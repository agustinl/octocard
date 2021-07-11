module.exports = {
    plugins: [
        "tailwindcss",
            process.env.NODE_ENV === "production"
                ? [
                    "@fullhuman/postcss-purgecss",
                    {
                        content: [
                            "./pages/**/*.{js,jsx,ts,tsx}",
                            "./components/**/*.{js,jsx,ts,tsx}",
                        ],
                        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
                        safelist: ["html", "body", "__next"]
                    },
                ]
                : undefined,
            "autoprefixer",
    ],
  };