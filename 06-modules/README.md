# Modules are just files

## What are some benefits of splitting your program into files
* Self-contained functionality
* Shareable functionality
* Maintainable

## Ways to load JS modules
* Classic html file import
* CommonJS
* ES6 Modules

### CommonJS
* Supported in node.js
```js
// in module.js
const func1 = () => { return 'function1' };
modules.exports = {
    func1
}

// in main.js
const importedFunc = require('./module');
importedFunc.func1()
```

### ES6
* Supported in node.js > v13
* Supported in newer web browsers
```js
    // in modules.js
    export function sayMyName(name) {
        console.log(name);
    }
    
    // in main.js
    import {sayMyName} from './module.js';
    sayMyName('Max'); // will console.log('Max'); 
    
    // in index.html
    <script type="module" src="main.js"></script>
```

### Webpack
* Natively supports ES6, commonJS and other moduling systems.
* Output can be both ES6 Moduling, commonJS or other moduling formats

## Assignment - Calc POC
1. Copy the contents of the `assignment` directory (in this repo) to a new dir in your `short assignments` repo, to use as a baseline for the Calc project
2. In the newly created directory, create a new project using `npm init .`
3. Config project to use ES6 moduling method (in package.json: `"type": "module"` )
4. Build a simple math module `math.js`, implementing the following methods:
    * `add(n1, n2)`
    * `sub(n1, n2)`
    * `multiply(n1, n2)`
    * `divide(n1, n2)`
    * `equals(n1, n2, callback)`
5. Attach methods to buttons in the DOM


## Resources
[Understanding ES6 Modules](https://www.sitepoint.com/understanding-es6-modules/) !

[Webpack for everyone](https://laracasts.com/series/webpack-for-everyone) !

[Modules Intro](https://javascript.info/modules-intro)

[Webpack Modules](https://webpack.js.org/concepts/modules/)

[Import Statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
