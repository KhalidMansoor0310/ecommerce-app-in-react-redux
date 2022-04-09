import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import CartItem from './CartItem'



function Cart() {
    const cart = useSelector(state => state.shop.cart);  //cart is an array of objects
    const [items, setItems] = useState(0);
    const [price, setPrice] = useState(0);
    useEffect(() => {
        let items = 0;
        let price = 0;
        cart.forEach(item => {
            items = items + item.qty;
            price = items + item.qty * item.price;
        });
        setItems(items);
        setPrice(price);
    }, [cart, items, price, setItems, setPrice]);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    {
                        cart.map(item => {
                            return (
                                <CartItem key={item.id} item={item} />
                            )
                        })
                    }

                </div>
                <div className="col-md-4">
                    <div className="card my-3">
                        <div className="card-body">
                            <h2>Cart Summary</h2>
                            <hr />
                            <h3>Total Amount : ${price}</h3>
                            <h3>Total Items : {items}</h3>

                            <button className='btn btn-outline-info'>Checkout</button>
                            {/* <button className="btn btn-outline-danger" onClick={() => dispatch(removeFromCart(props.item.id))}>Remove</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
