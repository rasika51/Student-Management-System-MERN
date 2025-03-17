// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}", // Add paths to your files
  ],
  theme: {
    extend: {
      animation: {
        fadeInUp: "fadeInUp 1.2s ease-out forwards",
        fadeInScale: "fadeInScale 1s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeInScale: {
          "0%": {
            opacity: "0",
            transform: "scale(0.8)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
