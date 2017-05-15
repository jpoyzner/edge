module.exports = {
    entry: "./client/client.js",
    output: {
        path: __dirname,
        filename: "clientbundle.js"
    },
    module: {
        loaders: [
            {test: /\.scss$/, use: [{loader: "style-loader"}, {loader: "css-loader"}, {loader: "sass-loader"}]},
            {test: /\.(js|jsx)$/, use: 'babel-loader'}
        ]
    },
    watch: true
};