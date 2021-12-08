module.exports = {
  input: "./src/index.ts",
  output: {
    moduleName: "fruitsjs$monitor",
    fileName: "fruitsjs.monitor[min].js",
    format: ["umd", "umd-min"],
    dir: "./dist"
  },
  env: {
    NODE_ENV: "production"
  },
  plugins: {
    ['node-resolve']: {
      jsnext: true,
      preferBuiltins: true,
      browser: true
    }
  }
};
