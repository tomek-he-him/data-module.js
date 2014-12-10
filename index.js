var formatJSON = require('format-json');
var indentedString = require('indent-string');
var trim = require('trimmer');
var extend = require('extend');


var dataModule = function dataModule (data, options) { 'use strict';
    if (!options) options = {};
    var formatting = options.formatting || JSON.stringify;

    var formattedData = formatting(data);
    return new DataModule(
        ( 'exports default'
        + ( /^\s/.test(formattedData)
          ? ''
          : ' '
          )
        + trim.right(formattedData, [';', '\n'])
        + ';'
        + '\n'
        ));
    };


dataModule.diffy = function (options) { 'use strict';
    if (!options) options = {};
    var indentString = ( options.indentString !== undefined
                       ? options.indentString
                       : '  '
                       );

    return function (data) {
        var formattedData = formatJSON.diffy(data);
        return '\n' + indentedString(formattedData, indentString);
        };
    };


var DataModule = function DataModule (contents) { 'use strict';
    this.contents = contents;
    };
extend(DataModule.prototype,
    { toString: function toString () { 'use strict';
        return this.contents;
        }
    , toBuffer: function toBuffer () { 'use strict';
        return new Buffer(this.contents);
        }
    });


module.exports = dataModule;
