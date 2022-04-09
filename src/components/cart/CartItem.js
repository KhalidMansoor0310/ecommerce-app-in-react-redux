import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/shopping/actions';
function CartItem(props) {
   const dispatch = useDispatch();
    return (
        <>
      
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={props.item.image} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{props.item.name}</h5>
                            <p class="card-text">{props.item.desc}</p>
                            <p class="card-text">
                                <small class="text-muted">Price - ${props.item.price}</small>
                                </p>
                            <input type="number" value={props.item.qty} min='1'/>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-outline-danger" onClick={() => dispatch(removeFromCart(props.item.id))}>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        
        
        </>
    )
}

export default CartItem
