import React from 'react';
import {  useState } from 'react';

import '../styles/Cart.css';
const Cart = (props) => {	
    const [isOpen, setIsOpen ] = useState(true)
    console.log(props.cart);
    const total = props.cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
   
    
        
    
    return isOpen? (
        <div className='Cart'>
            <button onClick={()=>{setIsOpen(false)}}> Fermer le pannier </button>
            {props.cart.length > 0?
            <div>
                <h2>Votre pannier</h2>
                <ul>
                    {props.cart.map((item) => (
                    <li key={item.name}>{item.name} {item.price}$  x {  item.amount}</li>
                ))}
                </ul>
                <br/>
                <h3>Le total est de {total} $</h3>
                <button onClick={() => {props.updateCart([])}}>vider le pannier</button>
            </div>
            : <h3>Votre pannier est vide</h3>
            }
            

       </div>
    ): (<div>
        <button onClick={()=>{setIsOpen(true)}}> Ouvrir le pannier </button>
    </div>);
};

export default Cart;