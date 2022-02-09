module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                react: {
                    link: '#0178df',
                    DEFAULT: '#20232a',
                },
            },
            boxShadow: {
                custom: '3px 3px 12px rgba(200, 200, 200, 0.3)',
            },
            flexGrow: {
                2: 2,
                3: 3,
                4: 4,
            },
        },
    },
    plugins: [],
}
