//CommonJS, every file is module (by default) 
// Modules - Encapsulated Code (only share minimum)
const names=require('./4-name');
const sayHi=require('./5-utils');
console.log(names);
sayHi('susan');
sayHi(names.john);
sayHi(names.peter);