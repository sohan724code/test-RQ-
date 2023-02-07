import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import img0 from "../../images/TrendingDeals/img1.webp";
import img1 from "../../images/TrendingDeals/img2.webp";
import img2 from "../../images/TrendingDeals/img3.webp";
import img3 from "../../images/TrendingDeals/img4.webp";
import img4 from "../../images/TrendingDeals/img5.webp";
import img5 from "../../images/TrendingDeals/img6.webp";
import img6 from "../../images/TrendingDeals/img7.webp";
import img7 from "../../images/TrendingDeals/img8.webp";
import img8 from "../../images/TrendingDeals/img9.webp";
import img9 from "../../images/TrendingDeals/img10.webp";
import "./SimpleSlider.css";

const imgArr = [
  {
    id: 0,
    img: img0,
    name: "Bangkok",
  },
  {
    id: 1,
    img: img1,
    name: "Cairo",
  },
  {
    id: 2,
    img: img2,
    name: "AlUla",
  },
  {
    id: 3,
    img: img3,
    name: "Dubai",
  },
  {
    id: 4,
    img: img4,
    name: "Istanbul",
  },
  {
    id: 5,
    img: img5,
    name: "Jeddah",
  },
  {
    id: 6,
    img: img6,
    name: "London",
  },
  {
    id: 7,
    img: img7,
    name: "Manama",
  },
  {
    id: 8,
    img: img8,
    name: "Makkah",
  },
  {
    id: 9,
    img: img9,
    name: "Riyadh",
  },
];

export const SimpleSlider = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box>
      <Container>
        <Typography> Responsive </Typography>
        <Box
          sx={{
            ".slick-slide > div": {
              margin: "1px 5px",
              width: "auto",
            },
            ".slick-list": {
              margin: "0px -5px",
            },
          }}
        >
          <Slider {...settings}>
            {imgArr.map((item, index) => (
              <Box key={index} className="trending-slider-item">
                <Box
                  sx={{
                    display: "flex",
                    height: "350px",
                    borderRadius: "5px",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      padding: "0px 5px",
                      borderRadius: "5px",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <img
                      src={item.img}
                      alt="..."
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "5px",
                      }}
                    />
                    <span>{item.name}</span>
                  </Box>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};
