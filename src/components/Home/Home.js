import React, { useState } from 'react';
import useTShirt from '../../hooks/useTShirt';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';

import './Home.css'

const Home = () => {
      const [tShirts, setTShirts] = useTShirt();
      const [cart, setCart] = useState([])
      console.log(cart)
      
      const handelAddToCart = (selectedItem) => {
            const exists = cart.find(tShirt => tShirt._id === selectedItem._id)
            if (!exists) {
                const newCart = [...cart, selectedItem]
                  setCart(newCart)   
            }
            else {
                  alert("This item already exists")
            }
           
      }
      const handelRemovedFromCart = (selectedItem) => {
            const rest = cart.filter(tShirt => tShirt._id !== selectedItem._id)
            setCart(rest)
      }
      return (
            <div className='home-contianer'>
                  <div className="tshirt-container">
                        {
                              tShirts.map(tShirt => <TShirt
                                    key={tShirt.id}
                                    tShirt={tShirt}
                              handelAddToCart={handelAddToCart}></TShirt>)
                        }
                  </div>
                  <div className="cart-container">
                        <Cart cart={cart}
                        handelRemovedFromCart={handelRemovedFromCart}
                        ></Cart>
                  </div>
            </div>
      );
};

export default Home;