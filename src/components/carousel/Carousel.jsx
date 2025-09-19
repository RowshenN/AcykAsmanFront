import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Carousel = ({
  images,
  interval = 3000,
  className = "",
  overlay = false,
}) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(id);
  }, [paused, images.length, interval]);

  return (
    <div
      className={`overflow-hidden relative ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <motion.div
        className="flex h-full"
        animate={{ x: `-${index * 100}%` }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {images.map((img, i) => (
          <div key={i} className="w-full h-full flex-shrink-0 relative">
            <img
              src={img}
              alt={`slide-${i}`}
              className="w-full xs:h-[250px] md:h-[360px] object-cover rounded-[20px]"
            />
            {overlay && (
              <div className="absolute inset-0 bg-black/40 rounded-[20px]"></div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
