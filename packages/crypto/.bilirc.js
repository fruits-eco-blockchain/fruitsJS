module.exports = {
  input: "./src/index.ts",
  output: {
    moduleName: "fruitsjs$crypto",
    fileName: "fruitsjs.crypto[min].js",
    format: ["umd", "umd-min"],
    dir: "./dist"
  },
  env: {
    NODE_ENV: "production"
  },
  plugins: {
    commonjs: {
      namedExports: {
        'crypto-js': [
          'enc',
          'SHA256',
          'AES',
          'lib'
        ]
      }
    }
  }
};
