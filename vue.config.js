module.exports = {
    chainWebpack: config => {
        config.plugins.delete('prefetch');
    }
    // ,
    // devServer: {
    //     proxy: 'http://localhost:8080'
    // }
};