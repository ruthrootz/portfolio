module.exports = {
    devServer: {
        disableHostCheck: true
    },
    chainWebpack: config => {
        config.module
            .rule('raw')
            .test(/\.html$/)
            .use('raw-loader')
            .loader('raw-loader')
            .end()
    },
}
