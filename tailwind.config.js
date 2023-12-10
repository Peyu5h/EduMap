/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
    
      xs: '418px',
      xss: '496px',
      sm: '618px',
      md:'768px',
      lg:'984px',
      lgg: '1093px',
      xl: '1440px',
    },
    extend: {
      colors: {
        darkbg: '	hsl(208, 48%, 6%)',
        overlay2: '	hsl(223, 27%, 10%)',
        overlay3: '	hsl(230, 15%, 24%)',
        yellowpri: '	hsl(39, 87%, 56%)',
        yellowsec: '	hsl(38, 67%, 57%)',
        heading: '	hsl(224, 11%, 40%)',
        sub: 'hsl(221, 10%, 50%)',
        headinglight: 'hsl(222, 6%, 33%)',
        tableHead: '	hsl(222, 27%, 12%)',
        tableDark: '	hsl(230, 15%, 24%)',
        tableLight: '	hsl(229, 16%, 33%) ',
        tabletxt: 'hsl(221, 15%, 59%)'
      },

      fontFamily:{
        
        sans: ['Open Sans', 'sans-serif'] ,
        pop: ['Poppins', 'sans-serif'],
        exo: ['Exo', 'sans-serif'],
        cool:['coolvetica', 'sans-serif']
      }
    },
  },
  plugins: [
  
  ],
}

