module.exports = {
    theme: {
        container: {
            center: true,
            padding: "2rem"
        },
        extend: {
            minWidth: {
                '0': '0',
                '1/8': '12%',
                '1/7': '14%',
                '1/6': '16%',
                '1/5': '20%',
                '1/4': '25%',
                '1/3': '33%',
                '1/2': '45%',
                '1/1': '99%'
            },
            maxWidth: {
                '0': '0',
                '1/8': '12%',
                '1/7': '14%',
                '1/6': '16%',
                '1/5': '20%',
                '1/4': '25%',
                '1/3': '33%',
                '1/2': '45%',
                '1/1': '99%'
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
    purge: ["./dist/**/*.html", "./dist/**/*.js"]
};