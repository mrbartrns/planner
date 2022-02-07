const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = () => {
  const mode = process.env.NODE_ENV;
  const envConfig = require(`./webpack.${mode}.js`);
  const config = merge(commonConfig, envConfig);
  return config;
};
