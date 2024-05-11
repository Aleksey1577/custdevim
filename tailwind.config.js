/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                ubuntu: "ubuntu",
                notosans: "noto-sans",
            },
            colors: {
                "max-white": "#FFFFFF",
                "white": "#F9F9F9",
                "gray": "#E9E9E9",
                "blue": "#0047FF",
            },
        },
    },
    plugins: [],
};
