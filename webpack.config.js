module.exports = {
    entry: "./client.js",
    output: {
        path: __dirname,
        filename: "clientbundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style-loader!css-loader"},
            {test: /\.(js|jsx)$/, use: 'babel-loader'}
        ]
    },
    watch: true
};