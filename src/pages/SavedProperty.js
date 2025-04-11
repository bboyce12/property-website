import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./SavedProperty.css";
import Ads from "../Ads";
import SkeletonSales from "../SkeletonSales";
function SavedProperty() {
    const { asking_type } = useParams();
    const [savedPropertyInfo, setSavedPropertyInfo] = useState([]);
    const [retrivedPropertyID, setRetrivedPropertyID] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [shortlisted, setShortListed] = useState(localStorage.getItem("shortlisted")
        ? JSON.parse(localStorage.getItem("shortlisted"))
        : []);
    // Shortlist handler (to add or remove property from shortlist)
    const shortlistHandler = (property_id) => {
        setShortListed((prev) => {
            if (prev.includes(property_id)) {
                return prev.filter((id) => id !== property_id);
            }
            else {
                return [...prev, property_id];
            }
        });
    };
    const getSavedPropertyInfo = async () => {
        let localRetrivedPropertyID = [...retrivedPropertyID];
        for (const property of shortlisted) {
            try {
                const response = await fetch(`https://apex.oracle.com/pls/apex/boyce/savedProperty/getPropertyInfo?asking_type=${asking_type}&property_id=${property}`);
                if (!response.ok) {
                    throw new Error("HTTP error! status: ${response.status}");
                }
                const result = await response.json();
                console.log("result", result.items[0].property_id);
                // Check if the property_id is already in the list
                if (!localRetrivedPropertyID.includes(result.items[0].property_id)) {
                    localRetrivedPropertyID.push(result.items[0].property_id);
                    setSavedPropertyInfo((prevData) => {
                        // Check if the property is already in the state
                        if (!prevData.some((item) => item.property_id === result.items[0].property_id)) {
                            return [...prevData, result.items[0]];
                        }
                        return prevData;
                    });
                }
                console.log(savedPropertyInfo);
                console.log(localRetrivedPropertyID);
            }
            catch (err) {
                setError(err);
            }
        }
        setLoading(false);
        setRetrivedPropertyID(localRetrivedPropertyID);
    };
    useEffect(() => {
        console.log("shortlisted", shortlisted);
    }, []);
    useEffect(() => {
        getSavedPropertyInfo();
    }, []);
    return (_jsx(_Fragment, { children: _jsxs("div", { className: "saved-property-section-container", children: [_jsxs("h1", { children: ["My saved properties (", asking_type, ")"] }), _jsx("div", { className: "saved-property-container", children: loading ? (_jsx(SkeletonSales, {})) : (_jsx("div", { className: "ads-container", children: savedPropertyInfo.map((item) => (_jsx("div", { className: "ad-item", children: _jsx(Ads, { propertyInfo: item, shortlistInfo: shortlisted, shortlistHandler: shortlistHandler }) }, item.property_id))) })) })] }) }));
}
export default SavedProperty;
