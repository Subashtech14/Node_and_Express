const load = require('lodash');
const items = [1,[2,[3,4]]];
const deepitems = load.flattenDeep(items);
console.log(deepitems);
// use npm start to start it
// use npm run dev to start
//Event Loop
console.log('first task');
setInterval(() => {
    console.log('second task');
},1000);
console.log('third task');