module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        lightGreen: "#F7FBFA",
        dark1: "#21272A",
        dark2: "#666666",
        dark3: "#999999",
        main1: "#028174",
        main2: "#00B286",
        light1: "#CCCCCC",
        light3: "#F5F5F5",
      },
      minHeight: {
        "screen-90": "calc(100vh-90px)",
      },
      fontSize: {
        "12px": "12px",
      },
    },
  },
  plugins: [],
};
