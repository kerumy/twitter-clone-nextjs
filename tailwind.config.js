// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     content: [
//         "./pages/**/*.{js,ts,jsx,tsx}",
//         "./components/**/*.{js,ts,jsx,tsx}",
//         "./app/**/*.{js,ts,jsx,tsx}",
//     ],
//     theme: {
//         extend: {
//             colors: {
//                 twitter: "#00ADED",
//             },
//         },
//     },
//     plugins: [],
// };

const path = require("path");

module.exports = {
    content: [
        path.join(__dirname, "./pages/**/*.{js,ts,jsx,tsx}"),
        path.join(__dirname, "./components/**/*.{js,ts,jsx,tsx}"),
        path.join(__dirname, "./app/**/*.{js,ts,jsx,tsx}"),
    ],
    theme: {
        extend: {
            colors: {
                twitter: "#00ADED",
            },
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
