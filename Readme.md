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

### dataModule(data, options)

#### data
> **Required**  
> Type: `any`

The data to be wrapped in a module.


#### options.formatting(data)
> Type: `Function`  
> Default: JSON.stringify

The formatting function. When passed the `data`, it should return its representation in valid JavaScript code.




License
-------

[MIT][] © [Tomek Wiszniewski][].




<!-- Links -->
[MIT]: ./License.md
[Tomek Wiszniewski]: https://github.com/tomekwi
