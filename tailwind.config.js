/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'northstar': {
                    'green': '#22c55e', // Primary green
                    'dark': '#1f2937', // Dark gray/charcoal
                }
            },
            fontFamily: {
                'serif': ['Montserrat', 'sans-serif'], // Modern, blocky headings
                'sans': ['Inter', 'sans-serif'], // Clean body text
            },
        },
    },
    plugins: [],
} 