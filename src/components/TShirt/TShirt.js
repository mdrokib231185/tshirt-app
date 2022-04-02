import React from 'react';
import './TShirt.css'

const TShirt = ({handelAddToCart, tShirt}) => {
      
      const {name, picture ,price} =tShirt
      return (
            <div className='t-shirt'>
                  <img src={picture} alt="" /> 
                  <h4>{name}</h4>
                  <h4>${price}</h4>
                  <button onClick={() => handelAddToCart (tShirt)}>Add to Cart</button>
            </div>
      );
};

export default TShirt;