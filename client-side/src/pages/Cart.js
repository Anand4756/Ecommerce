import React from 'react'
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { CartContext } from '../CartContext';


const Cart = () => {
    
    
   const [products, setProducts] = useState([]);
   const {cart,setCart} = useContext(CartContext);
   
  useEffect(()=> {
        if(!cart.items){
            return;
        }
        fetch('/cart',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({ids: Object.keys(cart.items)})

        }).then(res=>{
            console.log("here", res )
            return res.json()})
            .then(prod=>{
                console.log("new ", prod )
            setProducts(prod);
        })
//    const id = window.localStorage.getItem('cart'); setMyLocalStorageData(JSON.parse(id))
  },[cart])
    
    return (
        <>
       
        <div className="cart">
        {products._id} hererii
            this is cart components
            <h3>Total  </h3>
            {
            products.map(product => {
                return (
                    <>
                    

                    <img src="/shoes-img1.png"></img>
                    <h1>{product.productname}</h1>
                    <h2>{product.price}</h2>
                    <h2>{product.category}</h2>
                    <button>+</button>
                    <h3>Quantiy</h3>
                    <button>-</button>
                    <h3>Price</h3>
                    <button>DELETE</button>
                    </>
                )
            })
        }
        hiii
           
        </div>
        </>
    )
}

export default Cart
