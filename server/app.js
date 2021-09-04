const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyparser.urlencoded({extended: true}));



mongoose.connect("mongodb://localhost:27017/ecommerceDB", {
  useNewUrlParser: true
});


const ProductSchema = new mongoose.Schema({
    productname: String,
    category: String,
    price: Number,
    
});

const Product = new mongoose.model("Product", ProductSchema);

app.get('/products',function(req, res){

    Product.find((err, found) => {
    if(err)
    console.log(err);
    else{
        res.json(found);
    }
    })

    
})

app.post('/admin/products', (req, res) => {
const name = req.body.name;
const pcategory = req.body.category;
const pprice = req.body.price;

const product = new Product({
        productname: name,
        category: pcategory,
        price: pprice,


});
product.save((err, ok) => {
if(err)
console.log(err);
res.json('ok');
})
})

app.get('/products/:id',(req, res) =>{
const id = req.params.id;
Product.findById(id, (err, found) => {
    if(found){
        res.json(found);
    }else{
        console.log(err);
    }
})

})


app.listen(5000, function(){
    console.log("Started server at 5000");
});