
import './App.css';
import { BrowserRouter as Router,Switch,Route,Link } from 'react-router-dom';
import Landingpage from './pages/Landingpage';
import Login from './pages/Login';
import Products from './components/Products';
import ProductDetails from './pages/ProductDetails';

import Cart from './pages/Cart';
import Header from './components/Header';
import { CartContext } from './CartContext';
import { useState, useEffect } from 'react';
function App() {
  const [cart, setCart] = useState({});
// using local storage
   useEffect(() => {
   const cart = window.localStorage.getItem('cart');
    setCart(JSON.parse(cart))
   }, []);

   useEffect(()=>{
    window.localStorage.setItem('cart', JSON.stringify(cart));
   },[cart]);

  return (
    <div>
     
      <Router>
       <CartContext.Provider value={{ cart,setCart }}>
      <Header />
      <switch>
      <Route path="/" component={Landingpage} exact ></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/cart" component={Cart}></Route>    
      <Route path="/products" exact component={Products}></Route>
      <Route path="/products/:_id" exact component={ProductDetails}></Route>
      </switch>
      </CartContext.Provider> 
      </Router>
      
    </div>
  );
}

export default App;
