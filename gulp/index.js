let fileSistem = require('fs');
let path = './gulp/tasks';
let arrayPathFills =  fileSistem.readdirSync(path).map(cell => { return path+'/'+cell});
module.exports = arrayPathFills
