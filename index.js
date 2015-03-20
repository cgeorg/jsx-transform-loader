var loaderUtils = require('loader-utils');
var jsxTransform = require('jsx-transform');

module.exports = function (source) {
  this.cacheable && this.cacheable();

  var query = loaderUtils.parseQuery(this.query);

  //TODO: how to do renameAttrs from query?
  var opts = {
    ignoreDocblock: !!query.ignoreDocblock,
    jsx: query.jsx,
    docblockUnknownTags: !!query.docblockUnknownTags,
    unknownTagsAsString: !!query.unknownTagsAsString,
    tagMethods: !!query.tagMethods
  };

  var transform = jsxTransform.transform(source, opts);

  this.callback(null, transform, null);
};
