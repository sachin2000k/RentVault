// src/pages/SignupPage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  TextField,
  Button,
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup
} from "@mui/material";

function SignupPage() {
  const navigate = useNavigate();

  // Basic user details
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  // Role selection
  const [role, setRole] = useState("provider");

  const handleSignup = (e) => {
    e.preventDefault();
    // For a real app, you'd validate fields and send an API request.
    if (!fullName || !email || !phone) {
      alert("Please fill all required fields.");
      return;
    }

    // Dummy success
    alert(`Signup successful! Role: ${role}`);
    navigate("/signup/kyc", { state: { role } });
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        margin: "40px auto",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        padding: 3,
        borderRadius: 2
      }}
    >
      <Typography variant="h4" textAlign="center" sx={{ mb: 2, fontWeight: 300 }}>
        Sign Up
      </Typography>

      <Box component="form" onSubmit={handleSignup}>
        {/* Full Name */}
        <TextField
          fullWidth
          label="Full Name"
          variant="outlined"
          sx={{ mb: 2 }}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        {/* Email */}
        <TextField
          fullWidth
          type="email"
          label="Email"
          variant="outlined"
          sx={{ mb: 2 }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Phone */}
        <TextField
          fullWidth
          type="tel"
          label="Phone Number"
          variant="outlined"
          sx={{ mb: 2 }}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        {/* Address */}
        <TextField
          fullWidth
          label="Address"
          variant="outlined"
          sx={{ mb: 2 }}
          multiline
          rows={2}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Select Your Role:
        </Typography>
        <RadioGroup
          row
          value={role}
          onChange={(e) => setRole(e.target.value)}
          sx={{ mb: 2 }}
        >
          <FormControlLabel
            value="provider"
            control={<Radio />}
            label="Provider"
          />
          <FormControlLabel
            value="customer"
            control={<Radio />}
            label="Customer"
          />
        </RadioGroup>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          type="submit"
          sx={{ mt: 2 }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default SignupPage;
