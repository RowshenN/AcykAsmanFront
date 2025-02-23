import React, { useRef, useEffect, useState } from "react";
import "./ContinuousVerticalSlider.css";

const ContinuousVerticalSlider = ({ items, direction = "normal" }) => {
  // Add direction prop
  const sliderRef = useRef(null);
  const [sliderHeight, setSliderHeight] = useState(0);

  useEffect(() => {
    const calculateSliderHeight = () => {
      let totalHeight = 0;
      if (sliderRef.current) {
        const children = sliderRef.current.children;
        for (let i = 0; i < children.length; i++) {
          totalHeight += children[i].offsetHeight;
        }
      }
      return totalHeight;
    };

    setSliderHeight(calculateSliderHeight);
  }, [items]);

  const animationDuration = sliderHeight / 120;

  return (
    <div className="continuous-vertical-slider-container">
      <div
        className="continuous-vertical-slider"
        ref={sliderRef}
        style={{
          animationDuration: `${animationDuration}s`,
          animationDirection: direction,
        }} // Apply direction
      >
        {direction === "normal" ? ( // Conditional rendering for direction
          <>
            {items.map((item, index) => (
              <div
                key={index}
                className="rounded-[21px] bg-[#F8F8F8] mb-5 !w-fit flex items-center justify-center sm:px-[30px] md:px-[50px] sm:py-5 md:py-[30px] "
              >
                <img
                  src={item}
                  alt="logo"
                  className="sm:w-[50px] md:w-[80px] sm:h-[50px] md:h-[80px] object-contain"
                />
              </div>
            ))}
            {items.map(
              (
                item,
                index // Duplicate for normal
              ) => (
                <div
                  key={index}
                  className="rounded-[21px] bg-[#F8F8F8] mb-5 !w-fit flex items-center justify-center sm:px-[30px] md:px-[50px] sm:py-5 md:py-[30px] "
                >
                  <img
                    src={item}
                    alt="logo"
                    className="sm:w-[50px] md:w-[80px] sm:h-[50px] md:h-[80px] object-contain"
                  />
                </div>
              )
            )}
          </>
        ) : (
          <>
            {items.map(
              (
                item,
                index // Duplicate for reverse (order matters)
              ) => (
                <div
                  key={index}
                  className="rounded-[21px] bg-[#F8F8F8] mb-5 !w-fit flex items-center justify-center sm:px-[30px] md:px-[50px] sm:py-5 md:py-[30px] "
                >
                  <img
                    src={item}
                    alt="logo"
                    className="sm:w-[50px] md:w-[80px] sm:h-[50px] md:h-[80px] object-contain"
                  />
                </div>
              )
            )}
            {items.map((item, index) => (
              <div
                key={index}
                className="rounded-[21px] bg-[#F8F8F8] mb-5 !w-fit flex items-center justify-center sm:px-[30px] md:px-[50px] sm:py-5 md:py-[30px] "
              >
                <img
                  src={item}
                  alt="logo"
                  className="sm:w-[50px] md:w-[80px] sm:h-[50px] md:h-[80px] object-contain"
                />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ContinuousVerticalSlider;
