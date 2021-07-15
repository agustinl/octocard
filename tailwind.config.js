module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        screens: {
            "sm": "440px",
			"md": "786px"
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
