//middleware are functions that excecutes during a request to the server
const express = require('express');
const app = express();
const morgan =require('morgan'); 
//req => middleware => response
const logger=require('./logger');
const authorize=require('./authorized');
//app.use(logger); it will invoke the logger for every route
// app.use([authorize,logger])
app.use(morgan('tiny'));
//app.use('/api',logger); This will invoke the logger for every route after api
app.get('/', (req, res) => {
  res.send('Home'); 
})
app.get('/about', (req, res) => {
    res.send('About'); 
  })
app.get('/api/products', (req, res) => {
    res.send('Products'); 
  })
app.get('/api/items', (req, res) => {
  console.log(req.user);
    res.send('Items'); 
  })
app.get('*', (req, res) => {
  res.status('404').send('404 - Page Not Found');
})
app.listen(5000,()=>{
    console.log("listening on port 5000");
})