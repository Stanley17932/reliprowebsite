import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Slider = () => {
  // Using placeholder images for demonstration - replace with your actual image paths
  const sliderImages = [
    "/assets/images/image6.jpg",
    "/assets/images/image7.jpg",
    "/assets/images/image8.jpg",
  ];

  // State to track the current slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + sliderImages.length) % sliderImages.length
    );
  };

  // Function to go to specific slide (for dot indicators)
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Slider container */}
      <div className="relative w-full h-full">
        <motion.div
          className="flex w-full h-full"
          animate={{
            x: `-${currentIndex * 100}%`,
          }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          {sliderImages.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full relative"
              style={{ minWidth: "100%" }}
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback for broken images
                  e.target.style.background =
                    "linear-gradient(45deg, #667eea 0%, #764ba2 100%)";
                  e.target.style.display = "flex";
                  e.target.style.alignItems = "center";
                  e.target.style.justifyContent = "center";
                  e.target.innerHTML = `<span style="color: white; font-size: 24px;">Image ${
                    index + 1
                  }</span>`;
                }}
              />
              {/* Optional: Overlay with slide number */}
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded">
                {index + 1} / {sliderImages.length}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition-all duration-200 z-10"
        aria-label="Previous slide"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-opacity-30 transition-all duration-200 z-10"
        aria-label="Next slide"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? "bg-white"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
