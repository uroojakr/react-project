module.exports = {
    mode: 'jit', //just in time compiler mode
    purge: [
        './src/**/*.{js,jsx,ts,tsx}',
        './public/index.html',
    ],
    darkMode: false,
    theme: {
        extend: {},
        },
        variants: {
            backgroundColor: ['responsive', 'hover', 'focus'],
            borderWidth: ['responsive', 'first', 'last']
            },
            plugins: [],
    };
