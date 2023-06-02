const express=require('express');
const app=express();
app.get('/',(req,res)=>{
  res.status().send('Hello World');  
})
app.get('/about',(req,res)=>{
  res.status(200).send('About Page');  
})
app.all('*',(req,res)=>{
  res.status(404).send('Page Not Found');
})
app.listen(5000,()=>{
    console.log('server is running');
})

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen