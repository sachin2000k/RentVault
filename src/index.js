// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// e.g. in index.js or in your HomePage.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
