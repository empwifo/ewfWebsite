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
                'height': 'height'
               }
        },
    },
    variants : {
        transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
        extend: {}
    },
    plugins: [require("@tailwindcss/typography")],
    purge: ["./dist/**/*.html"]
};