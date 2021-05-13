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
                '1/5': '20%',
                '1/4': '25%',
                '1/3': '33%',
                '1/2': '50%',
                '1/1': '100%'
            },
            maxWidth: {
                '0': '0',
                '1/5': '20%',
                '1/4': '25%',
                '1/3': '33%',
                '1/2': '50%',
                '1/1': '100%'
            },
            transitionProperty: {
                'height': 'height',
                'spacing': 'margin, padding',
               }
        },
    },
    variants : {
        extend: {}
    },
    plugins: [require("@tailwindcss/typography")],
    purge: ["./src/**/*.js", "./src/**/*.njk", "./src/**/*.svg"]
};