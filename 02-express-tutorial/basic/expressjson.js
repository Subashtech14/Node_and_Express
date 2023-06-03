const express = require('express');
const app = express();
const {products} = require('./data');
app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>');
})
app.get('/api/products', (req, res) => {
    const newProducts= products.map(product => {
        const {id,name,image} = product;
        return {id,name,image}
    })
    res.json(newProducts);
})
app.get('/api/products/:id', (req, res) => {
  const ProductId = req.params.id;
    const product = products.find(product => product.id === Number(ProductId));
    if(!product) return res.status(404).send('Product not found');
    res.json(product);
})
app.get('/api/v1/query', (req, res) => {
  console.log(req.query);
  const {search,limit} = req.query;
  let sortedProducts =[...products];
  if(search){
    sortedProducts = sortedProducts.filter(product => 
        product.name.startsWith(search)
)}
if(limit){
  sortedProducts = sortedProducts.slice(0,Number(limit));
}
if(sortedProducts < 1){
    // res.status(200).send('No products found');
    res.status(200).json({sucess:true,data:[]});   
}
//   res.status(200).json(sortedProducts);   
})
app.listen(5000, () => {
  console.log('Server started on port 5000');  
})