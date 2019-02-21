var glob = require("glob")
const ref = "./public/teachers/server/"

module.exports = {
    mode: "production",
    entry: [
        ref+"all.js",
        ref+"obs.js"
    ],
    module: {
        rules: [//These are the loaders
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }           
        ]
    },
    output: {
        filename: 'client_bundle.js',
        path: __dirname + '/public/teachers',
        publicPath: '/public/teachers/'
    }
}