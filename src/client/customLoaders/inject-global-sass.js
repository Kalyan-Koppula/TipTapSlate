const path = require('path');
module.exports = function (source) {
    const injectablePath = path.relative(path.dirname(this.resourcePath), path.resolve(__dirname, '..', 'variables.scss'));
    return `@import '${injectablePath}';\n${source}`;
}
