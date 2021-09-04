import React from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../CartContext';
const Productcard = (props) => {
    const { cart, setCart } = useContext(CartContext);
    const { productprops } = props; //to destruct
    
   
    const addToCart = (event, productprops) => {
        event.preventDefault();
        let _cart = {...cart};
        if(!_cart.items){
            _cart.items = {}
        }
        if(_cart.items[productprops._id]){
            _cart.items[productprops._id] = _cart.items[productprops._id] +1; 
        }else{
            _cart.items[productprops._id] = 1;
        }

     if(!_cart.totalItems){
        _cart.totalItems = 0;    
     }   
        _cart.totalItems += 1; 
        setCart(_cart);
        // console.log(productprops);
        // const cart ={
        //     items:{
        //     'adfnaknfaf': 2,
        //     },
        //     totalItems: 2
        // }
    }
   

    return (
        <Link to={`/products/${productprops._id}`}>
        
            
             <div className="product-details">
             
            <img src="/shoes-img1.png"></img>
         <h3 className="commom-color">{productprops.productname}</h3>
         <h3 className="commom-color">{productprops.category}</h3>
         <h3 className="commom-color">Rs {productprops.price}</h3>
        
         <button onClick={(e) => {addToCart(e, productprops)}} className="common-btn">ADD</button>
        
            </div>
            
        
        </Link> 
    )
}

export default Productcard
