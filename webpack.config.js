const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/js/script.js'),
    output: {
        path: resolve(__dirname, 'dist'),
        clean: true,
        filename: 'script.js'
    }
}
