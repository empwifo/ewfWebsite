module.exports = {
    theme: {
        container: {
            center: true,
            padding: "2rem"
        },
        extend: {
            height: {
                headermb: '15rem',
                headersm: '25rem', 
                headerxl: '40rem',
            },
            minWidth: {
                '0': '0',
                '1/5': '15%',
                '1/4': '20%',
                '1/3': '28%',
                '1/2': '45%'
            }
        },
    },
    variants : {
        extend: {}
    },
    plugins: [require("@tailwindcss/typography")],
    purge: ["./src/**/*.js", "./src/**/*.njk", "./src/**/*.svg"]
};