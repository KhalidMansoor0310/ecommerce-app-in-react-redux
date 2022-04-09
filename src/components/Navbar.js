import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar() {
    const cart = useSelector(state => state.shop.cart);
    const [cartCount ,setCount] = useState(0);
    useEffect(()=>{
        let count = 0;
        cart.forEach(item => {
            count += item.qty;
        });
        setCount(count);
    },[cart,cartCount]);

    return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                   <Link className="navbar-brand bg-success text-white p-3" to="/cart"> CART - {cartCount} - Items</Link>
                </div>
            </nav>

    )
}

export default Navbar
