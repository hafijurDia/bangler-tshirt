import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import './Home.css'
import Cart from '../Cart/Cart';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (tshirt) => {
        const newCart = [...cart, tshirt];
        const exist = cart.find(ts => ts._id === tshirt._id);
        if (exist) {
            alert('Product already added')
        }else{
            setCart(newCart);
            console.log(tshirt);
        }
        
    }

    const handleRemoveFromCart = (id) => {
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining);

    }

    return (
        <div className='home-container'>
            <div className='tshirt-container'>
                {
                    tshirts.map(tshirt => <TShirt
                    key={tshirt._id}
                    tshirt={tshirt}
                    handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;