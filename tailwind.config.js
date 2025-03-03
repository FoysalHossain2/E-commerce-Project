/** @type {import('tailwindcss').Config} */

export default  {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'xsm': '412px',
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1400px',
      'xxl' : '1400px',
    },
    extend: {
      fontFamily:{
        DM_Sans:"var(--DM__Sans)",
        Josefin__Sans:"var(--Josefin__Sans)",
        Roboto: "var(--Roboto)" 
      },
      colors:{
        bg_Primary_color: "var(--bg_Primary_color)",
        bg_Secondary_color: "var(--bg_Secondary_color)",
        main_text_color: "var(--main_text_color)",
        secondary_text_color: "var(--secondary_text_color)",
        button_Color: "var(--button_Color)",
        Paragraph__Color: "var(--Paragraph__Color)"
      },
    },
  },
  plugins: [ require('tailwind-scrollbar'),],
}

