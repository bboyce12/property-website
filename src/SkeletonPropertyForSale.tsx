import React, { useEffect } from "react";
import "./SkeletonPropertyForSale.css";

function SkeletonPropertyForSale() {
  useEffect(() => {
    console.log("SkeletonPropertyForSale mounted");
    return () => {
      console.log("SkeletonPropertyForSale unmounted");
    };
  }, []);

  return <div key="loadingstate">Loading...</div>; // Test visibility
}

export default SkeletonPropertyForSale;
