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
                white: "#F9F9F9",
                gray: "#E9E9E9",
                blue: "#0047FF",
                "dark-blue": "#0935A6",
                blueg: "#2C60F3",
                violetg: "#A938F3",
                pinkg: "#E48090",
            },
            backgroundImage: {
                "hero-desktop": "url(./src/assets/Frame-47.webp)",
                "hero-tab": "url(./src/assets/Frame-48.webp)",
                "hero-mob": "url(./src/assets/Frame-49.webp)",
            },
        },
    },
    plugins: [],
};
