const withSass = require('@zeit/next-sass');

module.exports = withSass({
    webpack (config) {
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif|otf)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000000,
                    name: '[name].[ext]',
                },
            },
        });

        return config;
    },
});
