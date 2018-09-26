```js
const { fs, http, childProcess } = require('internal.modules')
fs.readFile( ... )
``` 

internal.modules iterates Node's internal (built in) modules and exports only the valid ones. The invalid ones are those you can't or shouldn't require directly such as internals and 'sub modules' (containing a '/'). _require('internal.modules')_ once

Implement this elegant functional reactive programming language pattern.
- _npm install_ into your workdirectory, or
- _npm install --global_ once and _npm link_ it where it is needed.
```js
/* module accessors are formatted as camelcased the JavaScript way. (stringDecoder, childProcess, ...) */
const { fs, childProcess } = require('internal.modules')

fs.readFile('index.js', (error, buffer) => {
    console.log(buffer.toString())
    console.log(childProcess.execSync('dir').toString())
})
```
```js
/* ES2018 spread syntax */
const { fs, os, ...theOthers } = require('internal.modules')
console.log(theOthers) /* all core modules except 'fs' and 'os' */

const { net, stream } = { net: 'changed', ...theOthers } /* here, the value of 'net' is the net module of Node. */
const { net, stream } = { ...theOthers, net: 'changed' } /* here, net = 'changed' because assignment happens after consuming theOthers */
console.log(net)
```
```js
/* */
let core = require('internal.modules')
const { http, https, config = require('./config.json') } = core
http.createServer((request, response) => { response.end(JSON.stringify(config, false, 3)) }).listen(80)
```
```js
/* initialize */
const { 
    querystring, 
    path, 
    express = require('express'), 
    mysql = require('mysql'), 
} = require('internal.modules')

var app = express()
app.use(express.static('public'))

app.get('/*', (request, response) => response.end(`thank you for visiting ${request.url}!`))
app.listen(8000)
// ...
```

## Why?
Because I type something like _const fs = require('fs')_ (_child_process, http, net, ..._) a hundred times a day.

## Links
- ECMAScript2018 specification ([formalized best practices](https://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf))
- Node.js v10.x [API documentation](https://nodejs.org/dist/latest-v10.x/docs/api/)
