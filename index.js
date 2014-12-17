var formatJSON = require('format-json');
var indentString = require('indent-string');
var trim = require('trimmer');
var extend = require('extend');


var dataModule = function dataModule (data, options) { 'use strict';
    if (!options) options = {};
    var formatting = options.formatting || JSON.stringify;

    var formattedData = formatting(data);
    return new DataModule(
        ( 'export default'
        + ( /^\s/.test(formattedData)
          ? ''
          : ' '
          )
        + trim.right(formattedData, [';', '\n'])
        + ';'
        + '\n'
        ));
    };

dataModule.formatting =
    { diffy: function diffy (options) { 'use strict';
        if (!options) options = {};
        var indentStringOption = ( typeof options.indentString != 'undefined'
                                 ? '' + options.indentString
                                 : '  '
                                 );

        return function (data) {
            var formattedData = formatJSON.diffy(data);
            return '\n' + indentString(formattedData, indentStringOption);
            };
        }
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
