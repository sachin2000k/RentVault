// src/pages/KycPage.js
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./KycPage.css";

function KycPage() {
  const location = useLocation(); // to get the role from SignupPage
  const navigate = useNavigate();

  const [aadhaar, setAadhaar] = useState("");
  const [pan, setPan] = useState("");
  const [kycCompleted, setKycCompleted] = useState(false);

  const role = location.state?.role || "customer"; // fallback

  const handleKycSubmit = (e) => {
    e.preventDefault();
    // dummy checks or logic
    if (aadhaar && pan) {
      // Show some KYC completed state + animation
      setKycCompleted(true);
      // auto-navigate after 2 seconds, for example
      setTimeout(() => {
        // go to login after KYC done
        navigate("/login", { state: { role } });
      }, 2000);
    }
  };

  return (
    <div className="kyc-page">
      {!kycCompleted ? (
        <form onSubmit={handleKycSubmit} className="kyc-form">
          <h2>KYC Verification</h2>
          <p>Enter your Aadhaar and PAN details</p>
          <input
            type="text"
            placeholder="Aadhaar Number"
            value={aadhaar}
            onChange={(e) => setAadhaar(e.target.value)}
          />
          <input
            type="text"
            placeholder="PAN Number"
            value={pan}
            onChange={(e) => setPan(e.target.value)}
          />
          <button type="submit">Complete KYC</button>
        </form>
      ) : (
        <div className="kyc-completed">
          <div className="kyc-checkmark">
            {/* Simple CSS animation or icon */}
            ✓
          </div>
          <h3>KYC Completed!</h3>
        </div>
      )}
    </div>
  );
}

export default KycPage;
