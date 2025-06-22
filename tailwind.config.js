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
                'serif': ['Playfair Display', 'serif'], // For headings
                'sans': ['Inter', 'sans-serif'], // For body text
            },
        },
    },
    plugins: [],
} 