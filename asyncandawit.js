const { readFile,writeFile} = require('fs');
const util = require('util');
const readFilePromise=util.promisify(readFile);
const writeFilePromise=util.promisify(writeFile);


const start = async () => {
  try {
    console.log("First Runing");
    const first = await readFilePromise('./context/first.txt','utf8');
    console.log("Second Runing");
    const second = await readFilePromise('./context/second.txt','utf-8');
   await writeFilePromise('./context/resultda.txt',`${first} ${second}`,{flag:'a'});
    console.log(first,"\n",second);
  } catch (err) {
    console.log(err);
  }
};

start();
console.log("Start");
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, result) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(result);
//       }
//     })
//   })
// }