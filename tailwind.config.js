/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "grey": "#555555",
        "primary": "#F16126",
        "secondary": "#fff9f1",
        "black": "#101115",
      },
      padding:{
        "6.25": "25px",
        "3.75": "15px",
        "5.5": "22px"
      },
      borderColor:{
        "primary": "rgba(16,17,21,0.1)"
      }
    },
  },
  plugins: [],
}