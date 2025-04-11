import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import "./SkeletonPropertyForSale.css";
function SkeletonPropertyForSale() {
    useEffect(() => {
        console.log("SkeletonPropertyForSale mounted");
        return () => {
            console.log("SkeletonPropertyForSale unmounted");
        };
    }, []);
    return _jsx("div", { children: "Loading..." }, "loadingstate"); // Test visibility
}
export default SkeletonPropertyForSale;
