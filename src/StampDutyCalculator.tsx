import "./StampDutyCalculator.css";
import { useState } from "react";

// Define taxDataType
interface TaxDataType {
  taxLadder: Array<{ threshold: number; rate: number }>;
}

function StampDutyCalculator() {
  const [formData, setFormData] = useState({ status: "", price: "" });
  const [totalTax, setTotalTax] = useState(0);
  const [lastTaxBand, setLastTaxBand] = useState(null);
  const [currentTaxBand, setCurrentTaxBand] = useState(0);
  const [effectiveRate, setEffectiveRate] = useState(0);
  // Standard tax
  const standardTaxData: TaxDataType = {
    taxLadder: [
      { threshold: 125000, rate: 0 },
      { threshold: 250000, rate: 0.02 },
      { threshold: 925000, rate: 0.05 },
      { threshold: 1500000, rate: 0.1 },
      { threshold: 99999999, rate: 0.12 },
    ],
  };

  // First time buyer
  const firstTimeBuyerTaxData: TaxDataType = {
    taxLadder: [
      { threshold: 300000, rate: 0 },
      { threshold: 500000, rate: 0.05 },
    ],
  };

  // Additional house
  const additionalBuyerTaxData = {
    taxLadder: [
      { threshold: 125000, rate: 0.05 },
      { threshold: 250000, rate: 0.07 },
      { threshold: 925000, rate: 0.1 },
      { threshold: 1500000, rate: 0.15 },
      { threshold: 99999999, rate: 0.17 },
    ],
  };

  const changeCalculatorData = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleCalculatorSubmit = (event) => {
    event.preventDefault();
    let taxData = standardTaxData.taxLadder;
    const status = event.target.status.value;
    const price = event.target.price.value; // directly assign price value
    console.log(status);
    console.log(price);
    // status1: first time buyer, status2: moving house, status3: additional house
    if (status === "status1" && price < 500000) {
      taxData = firstTimeBuyerTaxData.taxLadder;
    } else if (status === "status3") {
      taxData = additionalBuyerTaxData.taxLadder;
    }
    setTotalTax(0);

    let subtotalTax = 0; // Init local variables for calculation
    let calculatedTotalTax = 0;
    console.log(Object.keys(taxData[0]));
    console.log(Number(Object.values(taxData[currentTaxBand])[0]));
    // First tier scenario
    // Handle non-zero rate at first tier for additional house buyer
    if (status === "status3") {
      subtotalTax =
        Number(Object.keys(taxData[0])[0]) *
        Number(Object.values(taxData[0])[0]);
      calculatedTotalTax += subtotalTax;
      // Price smaller than first tier
    } else if (price <= Number(Object.keys(taxData[0])[0])) {
      setTotalTax(0);
    }
    // Iterate since second tier
    for (let i = 1; i < taxData.length; i++) {
      if (price >= Number(Object.keys(taxData[i])[0])) {
        // Comparing price with tier threshold
        console.log("larger");
        subtotalTax =
          (Number(Object.keys(taxData[i])[0]) -
            Number(Object.keys(taxData[i - 1])[0])) *
          Number(Object.values(taxData[i])[0]);
        calculatedTotalTax += subtotalTax;
      } else {
        // break if price is not higher than next tier
        const subtotalTax =
          (price - Number(Object.keys(taxData[i - 1])[0])) *
          Number(Object.values(taxData[i])[0]);
        if (subtotalTax > 0) {
          calculatedTotalTax += subtotalTax;
          setEffectiveRate((calculatedTotalTax / price) * 100);
          setTotalTax(calculatedTotalTax);
        }
        break;
      }
    }
    setEffectiveRate((calculatedTotalTax / price) * 100);
    setTotalTax(calculatedTotalTax);
  };
  return (
    <div className="calculator-container fade-in-container">
      <h1>Stamp Duty calculator</h1>
      <form
        className="calculator-form-container"
        onSubmit={handleCalculatorSubmit}
      >
        <label htmlFor="status">Status: </label>
        <select
          id="options"
          name="status"
          value={formData.status}
          onChange={changeCalculatorData}
        >
          <option value="status1">My first home</option>
          <option value="status2">My next home</option>
          <option value="status3">My additional property or second home</option>
        </select>
        <label htmlFor="price">Price: </label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={changeCalculatorData}
        ></input>
        <button type="submit">Calculate</button>
      </form>
      <div className="calculated-tax-container">
        <div>Stamp duty on your first home is </div>
        <div id="total-tax">£{totalTax}</div>
        <div>The effective tax rate is {effectiveRate}%.</div>
      </div>
    </div>
  );
}

export default StampDutyCalculator;
