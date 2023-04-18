const path = require("path");

module.exports = {
    target: "electron-renderer", // Set target to electron-renderer
    entry: "./src/index.js", // Replace with your entry point
    output: {
        path: path.resolve(__dirname, "dist"), // Replace with your output directory
        filename: "bundle.js", // Replace with your output filename
    },
    resolve: {
        fallback: {
            path: require.resolve("path-browserify"), // Add fallback for path
        },
    },
    module: {
        rules: [
            // Add your loaders here
        ],
    },
    plugins: [
        // Add your plugins here
    ],
};
