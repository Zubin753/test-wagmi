/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx,ts}'],
  theme: {
    extend: {
      colors: {
        orange: 'var(--orange)',
        invOrange: 'var(--invOrange)',
        darkBackground: 'var(--dark)',
        grayBackground: 'var(--gray)',
        graySeparator: 'var(--grayBright)',
        firstCircle: 'var(--blackBright)',
        borderRings: 'var(--blackSuperBright)',
        blackLastRing: 'var(--blackLastRing)',
      },
      fontFamily: {
        bebas: ['Bebas Neue'],
        avenir: ['Avenir Next Cyr']
      },
      boxShadow: {
        cMd: '2px 2px 6px 0px #32323240, -2px -2px 6px 0px #32323240',

      }
    },
  },
  plugins: [],
}

