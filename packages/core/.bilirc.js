module.exports = {
  input: "./src/index.ts",
  output: {
    moduleName: "fruitsjs$",
    fileName: "fruitsjs[min].js",
    format: ["umd", "umd-min"],
    dir: "./dist"
  },
  extendRollupConfig: (conf) => {
    conf.inputConfig.preserveSymlinks = true;
    return conf
  },
  env: {
    NODE_ENV: "production"
  },
  plugins: {
    ['node-resolve']: {
      jsnext: true,
      preferBuiltins: true,
      browser: true
    },
    commonjs: {
      namedExports: {
        'crypto-js': [
          'enc',
          'SHA256',
          'AES',
          'lib'
        ],
        '@fruitsjs/crypto': [
          'generateSignature',
          'verifySignature',
          'generateSignedTransactionBytes',
          'encryptMessage',
          'getAccountIdFromPublicKey'
        ],
        '@fruitsjs/contracts': [
          'generateContract',
          'calculateMinimumCreationFee',
          'generateMethodCall'
        ],
        '@fruitsjs/util': [
          'asyncRetry',
          'Amount',
          'FeeQuantPlanck',
          'convertNumberToNQTString',
          'convertNQTStringToNumber',
          'convertHexStringToDecString',
          'convertHexStringToString',
          'convertBase36StringToHexString',
          'convertHexStringToBase36String',
        ]
      },
    }
  }
};
