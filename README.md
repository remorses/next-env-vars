## Install

```
npm i next-env-vars
```

## Usage

```js
const withEnv = require('next-env-vars')({ envFiles: ['.env'] })

module.exports = withEnv({})
```

Then in your app you can use process.env.VARNAME and it will be populated at build time (only the env vars used)
