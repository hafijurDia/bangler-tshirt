/* eslint-disable react/prop-types */
import React from 'react';
import './TShirt.css'

const TShirt = ({tshirt,handleAddToCart}) => {
    const {_id, name, picture, price} = tshirt;
    
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: {price}</p>
            <button onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;