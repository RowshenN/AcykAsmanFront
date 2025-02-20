import React from 'react';

const VerticalCarousel = ({ images, height = '300px', width = '200px', duration = '10s' }) => {
  const numberOfImages = images.length;

  const styles = {
    verticalCarousel: {
      height,
      width,
      overflow: 'hidden',
      position: 'relative',
    },
    carouselWrapper: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      animationDuration: duration,
      '--number-of-images': numberOfImages, // Set CSS variable
      animation: 'verticalScroll linear infinite', // Define animation
    },
    carouselSlide: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexShrink: 0,
    },
    verticalScroll: { // Keyframes animation
      '0%': { transform: 'translateY(0)' },
      '100%': { transform: `translateY(calc(-100% * (${numberOfImages} - 1)))` }, // Use template literal
    },
    image: {
      maxWidth: '100%',
      maxHeight: '100%',
    },
  };

  return (
    <div style={styles.verticalCarousel}>
      <div style={styles.carouselWrapper}>
        {images.map((image, index) => (
          <div key={index} style={styles.carouselSlide}>
            <img src={image.src} alt={image.alt} style={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalCarousel;