data-module
===========

**Wrap a plain JS object into an ES6 module.**




Installation
------------

```
npm install data-module
```




Usage
-----

```js
var dataModule = require('data-module');

dataModule(
    { object: 'with'
    , some: ['important', 'data']
    }).toString();

// Outputs String: >
//     export default {"object":"with","some":["important","data"]};
//
```




API
---

### dataModule(data, [options])

#### data
> Type: `any`

The data to be wrapped in a module.


#### options.formatting(data)
> Default: JSON.stringify  
> Type: `Function`  
> Should accept arguments: `data` (type: `any`)  
> Should return type: `String`

The formatting function. When passed the original `data`, it should return its representation in valid JavaScript code.

We ship the function `dataModule.formatting.diffy([options])(data)`, which you can use here. The default value for `options` is `{indentString: '  '}`. We use [format-json][]'s diffy formatter to generate the output.




License
-------

[MIT][] © [Tomek Wiszniewski][].




<!-- Links -->
[MIT]: ./License.md
[Tomek Wiszniewski]: https://github.com/tomekwi
[format-json]: https://www.npmjs.com/package/format-json
