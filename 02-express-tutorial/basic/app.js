const express= require('express');
const app= express();
let {people}= require('./data');

//static assets
app.use(express.static('../methods-public'));
//parse from data
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true,data:people});
})
app.post('/api/people',(req,res)=>{
    const {name} = req.body;
    if(!name){
        return res.send(404).json({success:false,message:'Please provide a name value'})
    }
    res.status(201).json({success:true,person:name});
})
app.post('/login',(req,res)=>{
    const name= req.body.name;
    if(name){
    res.status(200).send(`Welcome ${name}`);
    }
    else{
        res.status(400).send('Please Provide Crediantls');
    }
})
app.listen(5000,()=>{
    console.log('listening on port 5000');
})