/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "blob-pattern" :"url('/image/blob-scene-haikei.svg')",
        
      },
      keyframes :{
        moveIncircle: {
          

        } 

      }
    },
  },
  
  plugins: [],
};
