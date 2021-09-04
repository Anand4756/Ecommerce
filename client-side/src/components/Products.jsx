import React from 'react';
import Productcard from './Productcard';
import { useState,useEffect, useContext } from 'react';
import Header from './Header';
import { CartContext } from '../CartContext';
import Cart from '../pages/Cart';
const Products = () => {
   const {name} = useContext(CartContext);

    const [products, setProducts] = useState([]);
    useEffect(()=>{
    // console.log('component mounted') 
    fetch('/products')
    .then(response=> {
        console.log(response);
       return response.json()
    })
    .then(products => {
        setProducts(products);
        console.log(products)
    });
    },[]);
    
    return (


        <div>

        <section className="products">
            
            <h1>SHOES {name}</h1>
            
            <div className="all-products">
             {
             products.map(product => <Productcard key={product._id} productprops={product}/>)
             
             
             
             /* <Productcard />
             <Productcard />
             <Productcard />
             <Productcard />
             <Productcard />
             <Productcard />
             <Productcard />
             <Productcard /> */}
             
            
            </div>  
            
        </section>
        </div>
    )
}
 
export default Products
