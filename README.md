## The Fruits Eco Blockchain Network Type/Javascript Reference Library

`@fruitsjs` is a modern library written in Typescript providing common functionalities for _browsers_ and _nodejs_ , 
an advanced community-driven blockchain technology.

## Packages

The library is separated in the following packages

- [@fruitsjs/core] The main package providing an extense API for blockchain interaction
- [@fruitsjs/crypto] A package providing Fruits relevant crypto functions
- [@fruitsjs/util] A package providing useful functions, e.g. common conversion functions 
- [@fruitsjs/http] A package providing a _simplified_ Http layer, with consistent response types, and exception handling
- [@fruitsjs/monitor] A package providing a class to execute recurring async operations with de/serialization feature, good for listening to blockchain transactions 


## Installation

`@fruitsjs` aims modern browsers and nodejs > v10, but can also be used as bundled JavaScript using `<script>` 

### Using with NodeJS and/or modern web frameworks

Install using [npm](https://www.npmjs.org/):

```
npm install @fruitsjs/core
npm install @fruitsjs/crypto (optional)
npm install @fruitsjs/util (optional)
npm install @fruitsjs/http (optional)
```


or using [yarn](https://yarnpkg.com/):

``` yarn
yarn add @fruitsjs/core
yarn add @fruitsjs/crypto (optional)
yarn add @fruitsjs/util (optional)
yarn add @fruitsjs/http (optional)
```

> Usually, you won't need to install other packages than `@fruitsjs/core`, which uses the other packages.

### Using in classic `<script>`

Each package is available as bundled standalone library using UMD. 
This way _FruitsJS_ can be used also within `<script>`-Tags. 
This might be useful for Wordpress and/or other PHP applications.

Just import one of the packages using the HTML `<script>` tag.

`<script src='https://cdn.jsdelivr.net/npm/@fruitsjs/core@1.0.8/dist/fruitsjs.min.js'></script>`

`<script src='https://cdn.jsdelivr.net/npm/@fruitsjs/crypto@1.0.8/dist/fruitsjs.crypto.min.js'></script>`

`<script src='https://cdn.jsdelivr.net/npm/@fruitsjs/http@1.0.8/dist/fruitsjs.http.min.js'></script>`

`<script src='https://cdn.jsdelivr.net/npm/@fruitsjs/util@1.0.8/dist/fruitsjs.util.min.js'></script>`

Due to the way a package is imported following global variables are provided


| Package | Variable |
|---------|----------|
|  core   |`fruits$`      |
|  crypto |`fruits$crypto`|
|  http   |`fruits$http`  |
|  monitor   |`fruits$monitor`  |
|  util   |`fruits$util`  |

Examples:

```js
// using core
const api = fruits$.composeApi({
  nodeHost: "https://testnet.fwallet.net",
});

api.network.getBlockchainStatus().then(console.log);
```

```js
// using crypto
console.log(fruits$crypto.hashSHA256("test"))
```

```js
// using util
const value = fruits$util.Value.fromFRTS("1000")
```

```js
// using http
const client = new fruits$http.HttpClientFactory.createHttpClient('https://jsonplaceholder.typicode.com/');
client.get('/todos/1').then(console.log)
```

```js
 // using monitor
 
 // A method that checks if an account exists
 // > IMPORTANT: Do not use closures, when you need to serialize the monitor
 async function tryFetchAccount() {
     const Api = composeApi({nodeHost: 'https://testnet.fwallet.net'})
     try {
         const {account} = await Api.account.getAccount('1234')
         return account;
     } catch (e) {
         // ignore error
         return null;
     }
 }
 
 // A comparing function to check if a certain condition for the returned data from fetch function
 // is true. If it's true the monitor stops
 function checkIfAccountExists(account) {
     return account !== null;
 }
 
 // Create your monitor
 const monitor = new Monitor < Account > ({
     asyncFetcherFn: tryFetchAccount,
     compareFn: checkIfAccountExists,
     intervalSecs: 10, // polling interval in seconds
     key: 'monitor-account',
     timeoutSecs: 2 * 240 // when reached timeout the monitor stops
 })
 .onFulfilled(() => {
     // called when `checkIfAccountExists` returns true
     console.log('Yay, account active');
 })
 .onTimeout(() => {
     // called when `timeoutSecs` is reached
     console.log('Hmm, something went wrong');
 }).start();
```


## Usage

The following example shows how to interact with the blockchain, i.e. getting the balance of a specific account


### ES6/NodeJS style

In a separate file, preferably `index.js` or `main.js` write your entry point like this:

```js
import {composeApi, ApiSettings} from '@fruitsjs/core'
import {convertNQTStringToNumber} from '@fruitsjs/util'

const apiSettings = new ApiSettings('https://testnet.fwallet.net', 'fruits');
const api = composeApi(apiSettings);

// this self-executing file makes turns this file into a starting point of your app

(async () => {
  try{
    const {balanceNQT} = await api.account.getAccountBalance('13036514135565182944')
    console.log(`Account Balance: ${Value.fromPlanck(balanceNQT).toString()}`)  
  }
  catch(e){ // e is of type HttpError (as part of @fruitsjs/http)
    console.error(`Whooops, something went wrong: ${e.message}`)      
  }
})()

```

### `<script>` style

```js
const apiSettings = new fruits$.ApiSettings('https://testnet.fwallet.net', 'fruits');
const api = fruits$.composeApi(apiSettings);


api.account.getAccountBalance('13036514135565182944')
    .then( balance => {
        console.log(`Account Balance: ${fruits$util.Value.fromPlanck(balance.balanceNQT).toString()}`)  
    
    })
    .catch(e => { // e is of type HttpError (as part of @fruitsjs/http)
        console.error(`Whooops, something went wrong: ${e.message}`)      
    })

```

## Development

When contributing to the Fruits wallet and updates in FruitsJS are necessary, simply do

```
npm install && npm run bootstrap
```

That's it!

