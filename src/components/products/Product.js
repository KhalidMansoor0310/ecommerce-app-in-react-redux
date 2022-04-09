import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/shopping/actions';
import { loadCurrentItems } from '../../redux/shopping/actions';
import {
  
    Link
} from "react-router-dom";
function Product(props) {
    const dispatch = useDispatch();
    return (
        //creating bootstrap card
        <div className="col-md-4">
            <div className="card my-3 ">
                {/* card media */}
                <div className="card-img-top p-3">
                    <img src={props.products.image} alt={props.products.name} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.products.name}</h5>
                    <p className="card-text">{props.products.price}</p>
                    <p className="card-text">{props.products.desc}</p>

                    {/* button to add to cart */}

                  
                        <Link to='/product/someId'>
                            <button className="btn btn-outline-dark" onClick={() => dispatch(loadCurrentItems(props.products))}>View Cart</button>
                        </Link>

                    



                    <button className="btn btn-outline-success" onClick={() => dispatch(addToCart(props.products.id))}>Add to cart</button>

                </div>
            </div>

        </div>

    )
}

export default Product
