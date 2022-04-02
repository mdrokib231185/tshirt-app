import React from 'react';
// import TShirt from '../tShirt/TShirt';
import './Cart.css'

const Cart = ({ cart, handelRemovedFromCart }) => {
      // Element variable st
      let command;
      if (cart.length === 0) {
            command = <p>please add 1 items</p>
      } else if (cart.length === 1) {
            command =<p>please add more items</p>
      }
      
      else {
            command =<p>Thanks for adding items</p>
      }
      // Element variable st
      return (
            <div>
                  <h1>selected item: {cart.length}</h1>
                 
                  {
                        cart.map(tShirt => <p>{tShirt.name}
                        <button onClick={() =>handelRemovedFromCart(tShirt)}>X</button></p>)
                  }
                  {command}
                  {cart.length !== 4 ? <p>Keep addiding</p> : <p><button>Remove all</button></p>}
            </div>
      );
};

export default Cart;