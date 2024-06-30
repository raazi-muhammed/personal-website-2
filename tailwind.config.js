/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            borderRadius: {
                DEFAULT: "1rem",
            },
            colors: {
                primary: {
                    DEFAULT: "#5045CE",
                    foreground: "#fff",
                    accent: "#291638",
                },
                background: {
                    DEFAULT: "#0a0a0a",
                },
                foreground: {
                    DEFAULT: "#ffffff",
                },
                card: {
                    DEFAULT: "#2D2D3E",
                },
                secondary: {
                    DEFAULT: "#232323",
                    foreground: "#000",
                },
                muted: {
                    DEFAULT: "#0B0520",
                    foreground: "#bfbfbf",
                },
            },
            animation: {
                blob: "blob 12s infinite linear",
                blob2: "blob2 12s infinite linear",
            },
            keyframes: {
                blob: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                    "25%": {
                        transform: "translate(-15%, 40%) scale(1.1)",
                    },
                    "50%": {
                        transform: "translate(15%, 20%) scale(1.3)",
                    },
                    "75%": {
                        transform: "translate(5%, 25%) scale(1.1)",
                    },
                    "100%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                },
                blob2: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                    "33%": {
                        transform: "translate(25%, 20%) scale(1.3)",
                    },
                    "66%": {
                        transform: "translate(-25%, 25%) scale(1.1)",
                    },
                    "100%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                },
            },
        },
    },
    plugins: [],
};
