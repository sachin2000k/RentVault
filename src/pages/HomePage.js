// src/pages/HomePage.js
import React from "react";
import { Link } from "react-router-dom";
import HowItWorksCarousel from "../components/HowItWorksCarousel";
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent
} from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./HomePage.css";
import logoImg from "../assets/fashion/tux.jpg"
import electronicsImg from "../assets/electronics/cannon.jpg"
import travelImg from "../assets/travel/travel.webp"
import accessoryImg from "../assets/accessories/accessories.jpg"
function HomePage() {
  return (
    <Box className="home-page">
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "",
        //   background: `url("https://loremflickr.com/1600/900/luxury") center/cover no-repeat`,
        }}
      >
        <Box sx={{ textAlign: "center", px: 2 }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 300,
              letterSpacing: "2px",
              mb: 2,
              textShadow: "0 2px 4px rgba(0,0,0,0.5)"
            }}
          >
            RentVault
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              textShadow: "0 1px 3px rgba(0,0,0,0.4)"
            }}
          >
            Where Luxury Meets Affordability
          </Typography>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForwardIosIcon />}
            component={Link}
            to="/browse"
            sx={{
              backgroundColor: "#0071e3",
              ":hover": { backgroundColor: "#005bb5" }
            }}
          >
            Start Browsing
          </Button>
        </Box>
      </Box>

      {/* Brief About + CTA */}
      <Box sx={{ px: 3, py: 4, maxWidth: "1200px", mx: "auto" }}>
        <Typography variant="h4" sx={{ fontWeight: 300, mb: 2 }}>
          Experience Luxury on Demand
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
          RentVault is a secure marketplace where you can rent or lend 
          luxury products in categories like Fashion, Travel Equipment, 
          Electronics & Gadgets, and more. Sellers set their own pricing, 
          and users can rent these product. 
          Every transaction is protected through user verification, deposits, 
          and insurance. Enjoy the freedom to indulge in premium items without 
          the burden of ownership.
        </Typography>
        <Box>
          <Button
            variant="outlined"
            component={Link}
            to="/signup"
            sx={{ mr: 2 }}
          >
            List Your Item
          </Button>
          <Button
            variant="outlined"
            component={Link}
            to="/browse"
          >
            Browse Now
          </Button>
        </Box>
      </Box>
      <HowItWorksCarousel />
      {/* Categories Showcase */}
      <Box sx={{ px: 3, py: 4, backgroundColor: "#f8f9fa" }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 300, mb: 4, textAlign: "center" }}
        >
          Explore Our Categories
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {/* Fashion */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
              <CardMedia
                component="img"
                height="180"
                image={logoImg}
                alt="Fashion"
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6">Fashion</Typography>
                <Typography variant="body2" color="text.secondary">
                  From designer tuxes to ethnic wear & jewelry
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Travel */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
              <CardMedia
                component="img"
                height="180"
                image={travelImg}
                alt="Travel Equipment"
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6">Travel Equipment</Typography>
                <Typography variant="body2" color="text.secondary">
                  Luggage, trekking gear, and DSLR cameras
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Electronics */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
              <CardMedia
                component="img"
                height="180"
                image={electronicsImg}
                alt="Electronics & Gadgets"
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6">Electronics & Gadgets</Typography>
                <Typography variant="body2" color="text.secondary">
                  Smartwatches, laptops, iPads, and VR headsets
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Accessories */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
              <CardMedia
                component="img"
                height="180"
                image={accessoryImg}
                alt="Accessories"
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6">Accessories</Typography>
                <Typography variant="body2" color="text.secondary">
                  Handbags, sunglasses, luxury pens & more
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default HomePage;
