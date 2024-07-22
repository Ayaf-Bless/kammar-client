import React, { useState } from "react";
import Slider from "react-slick"; // If using react-slick

const Carousel = ({
  images,
  onClickImage,
}: {
  images: any[];
  onClickImage: (i: any) => void;
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} onClick={() => onClickImage(index)}>
          <img
            alt={image.alt}
            className="h-full w-full object-cover object-center"
            src={image.src}
          />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
