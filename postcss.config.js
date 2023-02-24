module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 1920 / 10,
      unitPrecision: 5,
      propList: ["*"],
      selectorBlackList: [], //排除html样式
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    }
  }
}