import React, { useEffect, useState } from 'react';
import Cart from './cart';
import Card from './card'
import axios from 'axios';

const Body = () => {
    const [cart, setCart] = useState([])
    const [jsonData, setJsonData] = useState([]);
    useEffect(() => {
        axios.get('/experts.json')
        .then(data => setJsonData(data.data));
    }, []) 
    const addToCart = (expert) => {
        const exists = cart.find(item => item.id === expert.id);
        if (!exists) {
            setCart([...cart, expert]);
        }else{
            alert("Already Added in cart")
        }
    };

    const removeFromCart = (expert) => {
        const updatedCart = cart.filter(item => item.id !== expert.id);
        setCart(updatedCart);
    };


    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-2 md:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-5">
                   {jsonData.map(expert =>
                    <Card key={expert.id} expert={expert} addToCart={addToCart}/>
                   )}
                </div>
                <div className="md:col-span-1">
                    <Cart cart={cart} removeFromCart={removeFromCart}/>
                </div>
            </div>
        </div>
    );
};

export default Body;