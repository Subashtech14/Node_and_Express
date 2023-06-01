const load = require('lodash');
const items = [1,[2,[3,4]]];
const deepitems = load.flattenDeep(items);
console.log(deepitems);