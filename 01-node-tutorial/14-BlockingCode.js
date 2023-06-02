const http = require('http')
const sever = http.createServer((req,res)=>{
   if(req.url === '/')
   res.end('Home Page');
   else if (req.url === '/about'){
    //Blocking Code
    for(let i=0;i<1000;i++){
        for(let j=0;j<1000;j++){
            
            console.log(`${i}, ${j}`);
        }
    }
    res.end("end");
   }
   else{
    res.end('No Default Page');
   }
  

});
sever.listen(5000,()=>{
    console.log("Listining");
})