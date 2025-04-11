import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import Ads from "../Ads";
import Nav from "../Navbar";
import SkeletonSales from "../SkeletonSales";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Sales.css";

// Defining the interface for the property meta data
export interface PropertyMetaDataType {
  items: Array<{ "count(*)": number }>;
  limit: number;
}

// Defining the interface for the property information
export interface PropertyInfoType {
  items: Array<{
    asking_type: string;
    address: string;
    postcode: string;
    price: number;
    excess_offer: number;
    video_uri: string;
    bedroom: number;
    bathroom: number;
    livingroom: number;
    floor_plan_uri: string;
    status: string;
    property_id: number;
    features: string;
    description_info: string;
    pseudo_column: any;
  }>;
  hasMore: boolean;
  limit: number;
  offset: number;
  count: number;
  links: Array<{
    rel: string;
    href: string;
  }>;
}

// Shortlist handler
export const shortlistHandler = (setShortListed, property_id) => {
  setShortListed((prev) => {
    if (prev.includes(property_id)) {
      return prev.filter((id) => id !== property_id);
    } else {
      return [...prev, property_id];
    }
  });
};

function Sales() {
  const [propertyInfo, setPropertyInfo] = useState<PropertyInfoType>({
    items: [],
    hasMore: false,
    limit: 0,
    offset: 0,
    count: 0,
    links: [],
  });

  const [PropertyMetaData, setPropertyMetaData] =
    useState<PropertyMetaDataType>({ items: [], limit: 6 });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState<number>(0);
  const [offset, setOffset] = useState<number>();
  const [shortlisted, setShortListed] = useState(
    localStorage.getItem("shortlisted")
      ? JSON.parse(localStorage.getItem("shortlisted"))
      : []
  );
  const prevPage = useRef<number>();
  const { asking_type, status } = useParams();

  // Page handler
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
        const response = await fetch(
          `https://apex.oracle.com/pls/apex/boyce/propertyinfosale/getMetaData?asking_type=${asking_type}&status=${status}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setPropertyMetaData(result);
        setOffset(result.limit);
        console.log("Max page:", Math.ceil(result.items[0]["count(*)"] / 8));
      } catch (err) {
        setError(err);
        console.log(error);
      }
    };
    getPropertyMetaData();
  }, []);

  useEffect(() => {
    console.log(PropertyMetaData); // This will log the updated state
  }, [PropertyMetaData]);

  // Save shortlisted properties to local storage
  useEffect(() => {
    localStorage.setItem("shortlisted", JSON.stringify(shortlisted));
    console.log(shortlisted);
  }, [shortlisted]);

  useEffect(() => {
    const getPropertyInfo = async () => {
      setLoading(true);
      try {
        console.log(page, prevPage);
        console.log(asking_type, status);
        const response = await fetch(
          `https://apex.oracle.com/pls/apex/boyce/propertyinfosale/all?asking_type=${asking_type}&status=${status}&offset=${
            page * offset
          }`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        // Check if no property found
        if (result.items.length == 0) {
          console.log("result item is empty");
          setPage(prevPage.current);
        } else {
          setPropertyInfo(result);
        }
      } catch (err) {
        setError(err);
        console.log(error);
      } finally {
        setLoading(false); // Stop loading
      }
    };
    getPropertyInfo();
  }, [page]);

  return (
    <>
      <div className="container text-center">
        <div className="row">
          {loading ? (
            <SkeletonSales /> // Show a loading message or spinner
          ) : (
            <div className="ads-container">
              {propertyInfo.items.map((item) => (
                <div className="ad-item" key={item.property_id}>
                  <Ads
                    propertyInfo={item}
                    shortlistInfo={shortlisted}
                    shortlistHandler={shortlistHandler}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="pagination-container">
          <span
            key="previous_page"
            onClick={() => pageHandler(page - 1)}
            className="page"
          >
            ←
          </span>
          {PropertyMetaData.items &&
            PropertyMetaData.items.length > 0 &&
            Array.from(
              {
                length: Math.ceil(
                  PropertyMetaData.items[0]["count(*)"] / offset
                ),
              },
              (_, i) => {
                return page == i ? (
                  <span
                    key={i + 1}
                    onClick={() => pageHandler(i)}
                    className="page current-page"
                  >
                    {i + 1}
                  </span>
                ) : (
                  <span onClick={() => pageHandler(i)} className="page">
                    {i + 1}
                  </span>
                );
              }
            )}
          <span
            key="next_page"
            onClick={() => pageHandler(page + 1)}
            className="page"
          >
            →
          </span>
        </div>
      </div>
    </>
  );
}

export default Sales;
