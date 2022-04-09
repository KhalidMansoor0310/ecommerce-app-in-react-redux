import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product';
function Products() {
    const products = useSelector(state => state.shop.products);
    return (
        <div className='container'>
            <div className="row">
                    {
                        products.map((product) => {
                            return (
                                <Product products={product} key={product.id} />
                            )
                        })
                    }
            </div>
        </div>
    )
}

export default Products
