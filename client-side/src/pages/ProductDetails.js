import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';


const ProductDetails = () => {
  const [product, setProduct] = useState([]);
  const params = useParams();
  const back = useHistory();
  console.log(params);

    useEffect(() => {
        fetch(`/products/${params._id}`)
        .then(res => res.json())
        .then(product => {
           setProduct(product);
            console.log(product);
        })
    },[]);


    return (
        <>
        <button className="common-btn" onClick={ () => {back.goBack() } }>Back</button>
        <div className="product-details">
            
           <img src="/shoes-img1.png"></img>
           <h2>{product.productname}</h2>
           <h2>{product.category}</h2>
           <h3>Price: Rs{product.price}</h3>
           <button className="common-btn">Add</button>
        </div>
        </>
        
    )
}

export default ProductDetails
