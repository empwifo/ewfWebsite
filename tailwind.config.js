module.exports = {
    theme: {
        container: {
            center: true,
            padding: "2rem"
        },
        extend: {
            height: {
                headersm: '20rem', 
                headerxl: '30rem',
            }
        },
    },
    variants : {
        extend: {}
    },
    plugins: [require("@tailwindcss/typography")],
    purge: ["./src/**/*.js", "./src/**/*.njk", "./src/**/*.svg"]
};