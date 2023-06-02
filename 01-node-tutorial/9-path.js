const { log } = require('console');
const path =require('path');
console.log(path.sep);
//creating a file path
const filePath =path.join('content','subfolder','text.txt');
console.log(filePath);
//to find the base path
const base =path.basename(filePath);
log(base);
const absolute =path.resolve(__dirname,'content','subfolder','text.txt');
console.log(absolute);