/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fill-250": "repeat(auto-fill,minmax(310px,1fr))",
        "auto-fit-250": "repeat(auto-fit,minmax(250px,1fr))",
        "auto-fit-150": "repeat(auto-fit,minmax(300px,1fr))",
      },
      screens: {
        sm: "320px",
        // => @media (min-width: 320px) { ... }
        xs: "450px",
        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1070px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      backgroundImage: {
        'gradient-20-80': 'linear-gradient(to left, white 10%, #34C2AA 350%)',
        'gradient-clients': 'linear-gradient(to left, white 30%, #34C2AA 300%)',
        'gradient-top': 'linear-gradient(to top, white 55%, #34C2AA 350%)',
        'custom-teal-gradient': 'linear-gradient(90deg, #34C2AA 0%, #117A68 100%)',
        'custom-white-gradient': 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.88) 52.68%, #FFFFFF 100%)',
      },
    },
  },
  plugins: [],
};
