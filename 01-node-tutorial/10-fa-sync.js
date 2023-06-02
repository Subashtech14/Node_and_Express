const {readFileSync,writeFileSync} = require('fs')
const first = readFileSync('./context/first.txt','utf8')
const second = readFileSync('./context/second.txt','utf8')
//Read from a file and write to a file 
// If the file doesn't exist it will create or it will overwrite
writeFileSync(
    './context/result-sync.txt',
`Here is the result : ${first}, ${second}`
)
console.log(first,second);