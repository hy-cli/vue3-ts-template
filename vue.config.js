module.exports = {
  publicPath: "/",
  devServer: {
    port: 3030,
  },
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
  chainWebpack(config) {
    // 配置svg
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loa`der");
  },
  configureWebpack: (config) => {
    // 生产模式下去掉console
    if (process.env.NODE_ENV === "production") {
      config.optimization.minimizer.map((arg) => {
        const option = arg.options.terserOptions.compress;
        option.drop_console = true; // 打开开关
        return arg;
      });
    }
  },
};
