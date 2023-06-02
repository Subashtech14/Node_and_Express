const {createReadStream} = require('fs');
const stream= createReadStream('../context/big.txt',{
    highWaterMark:90000,
    encoding:'utf8'
});
//we are storeing in data event
//default 64kb
//last buffer - remainder of the stream
//high water mark - controls the buffer size
//const stream = fs.createReadStream('../context/big.txt',{highWaterMark:91000});
//const stream = fs.createReadStream('../context/big.txt',{encoding:'utf8'});
stream.on('data',(result)=>{
console.log(result);
stream.on('error',(err)=>{
  console.log(err);  
})
})