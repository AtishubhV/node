const path = require('path');
const currentFolder = path.dirname(process.mainModule.filename);
module.exports = {
getCurrentPath:currentFolder
}