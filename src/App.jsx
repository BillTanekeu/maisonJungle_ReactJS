import './styles/App.css';
import { useState, useEffect } from 'react';
import Banner from './components/Banner';
import Cart from './components/Cart';
import ShoppingList from './components/ShoppingList';
function App() {

  const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])


  const [cat, setCategorie] = useState('')

  return (
    <div className="App">
      
      <Banner />
      <div className="contentCartShopping">
      <Cart cart = {cart} updateCart = {updateCart} />
      <ShoppingList cat = {cat} setCategorie  = {setCategorie}
                             cart = {cart} updateCart = {updateCart}  />
             
      </div>
      
    </div>
  );
}

export default App;
