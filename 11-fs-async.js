const { log } = require('console');
const {readFile,writeFile} = require('fs')

readFile('./context/first.txt','utf-8',(err,result)=>{
    if(err){ 
    log(err);
    return;
}
log(result);
const first =result;
  readFile('./context/second.txt','utf-8',(err,result)=>{
      if(err){
      log(err);
      return;
      }
    log(result);
    const second = result;
  })
})