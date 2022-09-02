/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        psm: "320px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px"
      },
      textColor: {
        "dblue": "#00385F",
        "gray": "#474A57"
      },
      backgroundColor: {
        "yellow": "#F2C917",
        "turquose": "#28E4C9",
        "dblue": "#00385F",
        "purple": "#2A95FF",
        "lightgray": "#F4F5F7",
        "lightyellow": "#FDC21D"
      },
      width: {
        "xxl": "390px",
        "superx": "694px"
      },
      height: {
        "xxl": "502px"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}