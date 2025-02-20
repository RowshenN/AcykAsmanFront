import React, { useState, useEffect, useRef } from 'react';

const InfiniteVerticalCarousel = ({ children, autoPlay = true, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    let timer;

    if (autoPlay) {
      timer = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1); // Increment, don't use modulo here
      }, interval);
    }

    return () => clearInterval(timer);
  }, [autoPlay, interval]);

  useEffect(() => {
    if (carouselRef.current) {
      const childrenCount = children.length;
      const container = carouselRef.current;

      container.style.transition = 'transform 0.5s ease-in-out';

      // Adjust for infinite scrolling
      const adjustedIndex = currentIndex % childrenCount;
      container.style.transform = `translateY(-${adjustedIndex * 100}%)`;

      // Handle wrapping: if near the end, quickly jump to the beginning without animation
      if (currentIndex >= childrenCount * 2) {
        container.style.transition = 'none';
        container.style.transform = `translateY(0%)`;
        setTimeout(() => {
          container.style.transition = 'transform 0.5s ease-in-out';
          setCurrentIndex(childrenCount); // Reset to the "real" beginning
        }, 0); // Use 0 timeout to make it happen after the current render
      }
    }
  }, [currentIndex, children.length]);


  const childrenWithClones = [...children, ...children, ...children]; // Clone children for infinite effect

  return (
    <div className="overflow-hidden h-[300px] relative">
      <div
        className="flex flex-col w-full transition-transform duration-1000 ease-in-out"
        ref={carouselRef}
        style={{ height: `${childrenWithClones.length * 100}%` }}
      >
        {childrenWithClones.map((child, index) => (
          <div
            key={index}
            className="h-screen snap-start"
            style={{ height: '100vh' }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  );
};


export default InfiniteVerticalCarousel;