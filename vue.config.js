module.exports = {
    chainWebpack: config => {
        config.plugins.delete('prefetch');
    },
    devServer: {
        port: process.env.VUE_APP_PORT || 8080
    },
    publicPath: process.env.BASE_URL
};