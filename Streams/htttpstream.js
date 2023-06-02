var http = require('http');
var fs=require('fs');

http.createServer((req,res)=>{
    // const text= fs.readFileSync('../context/big.txt','utf8');
    // res.end(text);
    const stream=fs.createReadStream('../context/big.txt','utf8');
    stream.on('open',()=>{
        stream.pipe(res);
    })
    stream.on('error',(err)=>{
        res.end(err);
    })
}).listen(5000)