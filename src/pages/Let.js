import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Ads from "../Ads";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Let.css";
function Let() {
    const [propertyInfo, setPropertyInfo] = useState("");
    const [PropertyMetaData, setPropertyMetaData] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [offset, setOffset] = useState("");
    const prevPage = useRef();
    const { asking_type, status } = useParams();
    const pageHandler = (selectedPage) => {
        if (selectedPage >= 0) {
            prevPage.current = page;
            setPage(selectedPage);
        }
    };
    // Obtaining total properties available for calculation of pages
    useEffect(() => {
        const getPropertyMetaData = async () => {
            try {
                const response = await fetch(`https://apex.oracle.com/pls/apex/boyce/propertyinfosale/getMetaData?propertyStatus=${status}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                33;
                const result = await response.json();
                setPropertyMetaData(result);
                setOffset(result.limit);
                console.log("Max page:", Math.ceil(result.items[0]["count(*)"] / 8));
            }
            catch (err) {
                setError(err);
                console.log(error);
            }
        };
        getPropertyMetaData();
    }, []);
    useEffect(() => {
        console.log(PropertyMetaData); // This will log the updated state
    }, [PropertyMetaData]);
    useEffect(() => {
        const getPropertyInfo = async () => {
            setLoading(true);
            try {
                console.log(page, prevPage);
                const response = await fetch(`https://apex.oracle.com/pls/apex/boyce/propertyinfosale/all?asking_type=${asking_type}&status=${status}&offset=${page * offset}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                // Check if no property found
                if (result.items.length == 0) {
                    console.log("result item is empty");
                    setPage(prevPage.current);
                }
                else {
                    setPropertyInfo(result);
                }
            }
            catch (err) {
                setError(err);
                console.log(error);
            }
            finally {
                setLoading(false); // Stop loading
            }
        };
        getPropertyInfo();
    }, [page]);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "container text-center", children: [_jsx("div", { className: "row", children: loading ? (_jsx("p", { children: "Loading..." }) // Show a loading message or spinner
                    ) : (propertyInfo.items.map((item) => (_jsx("div", { className: "ads-container col-12 col-md-4 mb-4", children: _jsx(Ads, { propertyInfo: item }) }, item.property_id)))) }), _jsxs("div", { className: "pagination-container", children: [_jsx("span", { onClick: () => pageHandler(page - 1), className: "page", children: "\u2190" }, "previous_page"), PropertyMetaData.items &&
                            PropertyMetaData.items.length > 0 &&
                            Array.from({
                                length: Math.ceil(PropertyMetaData.items[0]["count(*)"] / offset),
                            }, (_, i) => {
                                return page == i ? (_jsx("span", { onClick: () => pageHandler(i), className: "page current-page", children: i + 1 }, i + 1)) : (_jsx("span", { onClick: () => pageHandler(i), className: "page", children: i + 1 }));
                            }), _jsx("span", { onClick: () => pageHandler(page + 1), className: "page", children: "\u2192" }, "next_page")] })] }) }));
}
export default Let;
