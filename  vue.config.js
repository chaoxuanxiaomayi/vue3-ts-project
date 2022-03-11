const path = require("path");
const resolve = (dir) => path.resolve(__dirname, dir);

function chainWebpack(config) {
  config.module.rule("svg").exclude.add(resolve("src/icons")).end();
  config.module
    .rule("icons")
    .test(/svg$/)
    .include.add(resolve("src/icons"))
    .end()
    .use("svg-sprite-loader")
    .loader("svg-sprite-loader")
    .options({
      symbolId: "icon-[name]",
    })
    .end();
}

module.exports = {
  chainWebpack,
  devSever: {
    port: 8080,
    open: true,
    overlay: {
      warning: false,
      error: true,
    },
  },
};
