const path = require("path");

module.exports = {
    mode: "development",
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "main.js",
        publicPath: '/'
    },

    target: "web",
    devServer: {
        port: "3010",
        historyApiFallback: true,
        static: ["./public"],
        open: true,
        hot: true,
        liveReload: true,
    },
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts"],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader', options: { importLoaders: 1 }
                    },
                    'postcss-loader',
                ],
            },

            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'assets/*',
            },
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'assets/*',
            },
        ],
    },
};