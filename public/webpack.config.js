const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        index: './src/index.tsx',
        registry: './src/registry/index.tsx'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js'  ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'js')
    },
    performance: {
        hints: false
    }
};

