import React from "react";
import Slider from "react-slick";
import { Card, CardMedia, Box, Typography } from "@material-ui/core";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useStyles from "./styles.js";

const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1697565995802-710b903501ee?w=600&auto=format&fit=crop",
    caption: "Enjoy every moment",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1696592053072-2eef6e4ce864?w=600&auto=format&fit=crop",
    caption: "Capture the beauty of life",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1698371217616-69581e44570d?w=600&auto=format&fit=crop",
    caption: "Adventure awaits",
  },
  {
    url: "https://images.unsplash.com/photo-1495808089756-688a7abff51d?w=600&auto=format&fit=crop",
    caption: "Discover new horizons",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1697565995290-2b6f5dca294f?w=600&auto=format&fit=crop",
    caption: "Find joy in the little things",
  },
  {
    url: "https://images.unsplash.com/photo-1598623549917-a38dc6cd19b5?w=600&auto=format&fit=crop",
    caption: "Collect memories, not things.",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1696694229147-7739a8b47892?w=600&auto=format&fit=crop",
    caption: "Find joy in the journey.",
  },
  {
    url: "https://images.unsplash.com/photo-1494621622354-777dad9c18e4?w=600&auto=format&fit=crop",
    caption: "Moments that matter",
  },
];

const AutoSlidingImageSlider = () => {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <Box
      sx={{
        width: "100%",
        margin: "30px 0",
        padding: "10px 0",
      }}
      className={classes.boxContainer}
    >
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              borderRadius: "18px",
              overflow: "hidden",
              background: "#fff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Card
              sx={{ width: "100%", overflow: "hidden" }}
              className={classes.boxContainer}
            >
              <CardMedia
                component="img"
                height="300"
                image={image.url}
                className={classes.imgStyle}
                alt={`Image ${index + 1}`}
              />

              <Box
                sx={{
                  position: "absolute",
                  bottom: "10%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  textAlign: "center",
                }}
              >
                <Typography variant="body1">{image.caption}</Typography>
              </Box>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default AutoSlidingImageSlider;
