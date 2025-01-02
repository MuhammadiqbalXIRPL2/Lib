import React, { useState } from "react";
import image1 from "../../assets/image1.jpeg";
import image2 from "../../assets/image2.jpeg";
import image3 from "../../assets/image3.jpeg";
import image4 from "../../assets/image4.jpeg";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const ImageSlide = () => {
  const [slide, setSlide] = useState(0);
  const images = [image1, image2, image3, image4];

  const handleNext = () => {
    setSlide((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setSlide((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-[-40px] transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
      >
        <FaArrowLeftLong />
      </button>

      <img
        src={images[slide]}
        alt={`Slide ${slide}`}
        className="w-full h-auto object-cover"
      />

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-[-40px] transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded"
      >
        <FaArrowRightLong />
      </button>
    </div>
  );
};

export default ImageSlide;