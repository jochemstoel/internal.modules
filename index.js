/* https://github.com/sindresorhus/camelcase/blob/master/index.js */
const camelCase = require('camelcase')
module.exports = { /* */ }

/* list Node built in modules and filter out internals and invalid 'sub modules' (containing a '/') */
Object.keys(process.binding('natives')).filter(el => !/^_|^internal/.test(el) && [
    'freelist',
    'sys', 
    'worker_threads', 
    'config'
].indexOf(el) === -1 && el.indexOf('/') == -1).forEach(el => {
    module.exports[camelCase(el)] = require(el) // global.childProcess = require('child_process')
})