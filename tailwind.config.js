/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                blob: "blob 12s infinite",
            },
            keyframes: {
                blob: {
                    "0%": {
                        transform: "rotate(0deg) scale(1)",
                        transformOrigin: "top left",
                    },
                    "100%": {
                        transform: "rotate(360deg) scale(1.0)",
                        transformOrigin: "top left",
                    },
                },
            },
        },
    },
    plugins: [],
};
