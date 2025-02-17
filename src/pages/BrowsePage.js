// src/pages/BrowsePage.js
import React, { useState } from "react";
import dummyItems from "../data/dummyData";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  Checkbox,
  FormControlLabel
} from "@mui/material";
import "./BrowsePage.css";

function BrowsePage() {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [
    "Fashion",
    "Travel Equipment",
    "Electronics & Gadgets",
    "Accessories",
  ];

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories((prev) => prev.filter((cat) => cat !== category));
    } else {
      setSelectedCategories((prev) => [...prev, category]);
    }
  };

  const filteredItems =
    selectedCategories.length === 0
      ? dummyItems
      : dummyItems.filter((item) => selectedCategories.includes(item.category));

  const handleViewDetails = (itemId) => {
    navigate(`/item/${itemId}`);
  };

  return (
    <Box className="browse-page" sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 300 }}>
        Browse Items
      </Typography>
      <Box className="browse-container" sx={{ display: "flex" }}>
        {/* Left Filter Panel */}
        <Box
          className="browse-filters"
          sx={{
            width: expanded ? 240 : 60,
            border: "1px solid #ddd",
            backgroundColor: "#fff",
            mr: 3,
            borderRadius: 2,
            transition: "width 0.3s ease",
            p: 2
          }}
        >
          <Box
            className="filter-header"
            sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
          >
            <Typography variant="h6" sx={{ cursor: "pointer" }} onClick={() => setExpanded(!expanded)}>
              Filters
            </Typography>
            <Button variant="outlined" size="small" onClick={() => setExpanded(!expanded)}>
              {expanded ? "Hide" : "Show"}
            </Button>
          </Box>
          {expanded && (
            <Box className="filter-content">
              <Typography variant="subtitle1" sx={{ mb: 1 }}>
                Categories
              </Typography>
              {categories.map((cat) => (
                <FormControlLabel
                  key={cat}
                  control={
                    <Checkbox
                      checked={selectedCategories.includes(cat)}
                      onChange={() => handleCategoryChange(cat)}
                    />
                  }
                  label={cat}
                />
              ))}
            </Box>
          )}
        </Box>

        {/* Right Items Grid */}
        <Grid container spacing={3} sx={{ flex: 1 }}>
          {filteredItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <Card
                sx={{
                  boxShadow: 2,
                  borderRadius: 2,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.name}
                  sx={{ height: 200, objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Category: {item.category}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Actual Price: ${item.actualPrice}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Rental Price / day: ${item.rentalPricePerDay}
                  </Typography>
                </CardContent>
                <CardActions sx={{ mt: "auto" }}>
                  <Button size="small" onClick={() => handleViewDetails(item.id)}>
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default BrowsePage;
