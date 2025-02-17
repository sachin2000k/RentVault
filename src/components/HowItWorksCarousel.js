// src/components/HowItWorksCarousel.js
import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";

function HowItWorksCarousel() {
  // Example settings for auto-play
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  // Placeholder slides with animated GIFs or any images you like
  const slides = [
    {
      id: 1,
      title: "List or Browse",
      description: "Choose whether to lend your luxury items or discover new rentals.",
      img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGFkZWUzYjUxNzYyM2E5MmQ0ZGFlODNmN2Y1ZmUwYzY2OWQ5NGViZSZlcD12MV9zZWFyY2g&rid=giphy.gif"
    },
    {
      id: 2,
      title: "Book & Pay",
      description: "Safe payment, deposit, and a secure transaction process.",
      img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMjcxMzM5MGI3ZjlkZTYwNjM0MjRhNGI5ZmI4OWJmNGUxODNlZTYzYyZlcD12MV9zZWFyY2g&rid=giphy.gif"
    },
    {
      id: 3,
      title: "Enjoy & Return",
      description: "Use your rental, then return it on time with peace of mind.",
      img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDI3NTdjYTFiY2NjOWE3YTA0M2M3ZjVmZmMzZDMyZDYwNzk4OTcxMSZlcD12MV9zZWFyY2g&rid=giphy.gif"
    },
    {
      id: 4,
      title: "Earn or Save",
      description: "Sellers earn extra income, while renters save big on luxury products.",
      img: "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmQ0MTFmZWI0N2U3MDg1OTMyZWYzNTczOWMxOTcyZWZhMTY3NTBmMiZlcD12MV9zZWFyY2g&rid=giphy.gif"
    }
  ];

  return (
    <Box sx={{ maxWidth: "800px", mx: "auto", mt: 4, mb: 6 }}>
      <Typography variant="h4" textAlign="center" sx={{ fontWeight: 300, mb: 2 }}>
        How It Works
      </Typography>
      <Slider {...settings}>
        {slides.map((slide) => (
          <Box key={slide.id} sx={{ textAlign: "center", px: 2 }}>
            <img
              src={slide.img}
              alt={slide.title}
              style={{
                width: "100%",
                maxHeight: "350px",
                objectFit: "cover",
                borderRadius: "10px"
              }}
            />
            <Typography variant="h5" sx={{ mt: 2, mb: 1, fontWeight: 400 }}>
              {slide.title}
            </Typography>
            <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
              {slide.description}
            </Typography>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default HowItWorksCarousel;
