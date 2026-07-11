const path = require('path')

module.exports = {
    devServer: {
        disableHostCheck: true
    },
    chainWebpack: config => {
        // Only apply raw-loader to blog post HTML so it doesn't clobber
        // html-webpack-plugin's EJS interpolation of public/index.html
        // (which resolves <%= BASE_URL %> for the favicon link, etc.).
        config.module
            .rule('raw')
            .test(/\.html$/)
            .include
                .add(path.resolve(__dirname, 'src/store/posts'))
                .end()
            .use('raw-loader')
            .loader('raw-loader')
            .end()
    },
}
