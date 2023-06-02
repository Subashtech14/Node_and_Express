const express=require('express');
const app = express();
const path = require('path');
//uses static files and middleware
app.use(express.static('./public'));

app.get('/',(req,res)=>{
  res.sendFile(path.resolve('index.html'));  
})
app.all('*',(req,res)=>{
  res.status(404).send('Page Not Found');
})
app.listen(5000,()=>{
  console.log('server is running');
})