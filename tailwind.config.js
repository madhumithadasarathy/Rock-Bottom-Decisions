/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#fdf6e3',
        'paper-dark': '#f5edda',
        ink: '#1e1e1e',
        'ink-light': '#4a4a4a',
        'red-mistake': '#d64545',
        'blue-win': '#4a90e2',
        'yellow-highlight': '#ffd166',
        'pencil-gray': '#b0b0b0',
        'eraser-pink': '#f8b4b4',
      },
      fontFamily: {
        hand: ['Caveat', 'cursive'],
        sketch: ['Patrick Hand', 'cursive'],
        scribble: ['Kalam', 'cursive'],
      },
    },
  },
  plugins: [],
}
