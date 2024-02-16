"use client";

import PropTypes from "prop-types";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// -----------------------------------------------

export default function BrandsCarousel({ brands }) {
  const settings = {
    arrows: false,
    speed: 5000,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-3/4">
      <Slider {...settings}>
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="flex flex-row items-center justify-center"
          >
            <img
              alt="brand_logos"
              src={brand.image}
              style={{ width: "55%", mixBlendMode: "color-burn" }}
              className="aspect-square object-contain mix-blend-color-burn"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

BrandsCarousel.propTypes = {
  brands: PropTypes.array,
};
