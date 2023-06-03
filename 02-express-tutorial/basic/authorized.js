const authorize = (req, res, next) => {
 const {user}= req.query;
 if(user==='subash'){
    req.user={name:'Subash',id:3}
    next();
 }
 else{
    res.status(401).send('Unauthorized');
 }   
}
module.exports=authorize;