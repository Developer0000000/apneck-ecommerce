import React, { useState } from 'react'
import Stock from './Stock'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../context/CartProvider';

const AddToCart = ({ product }) => {

    const { addToCart } = useCartContext();

    let { id } = product;

    const [counter, setCounter] = useState(1);

    let itemStock = 10;

    const increment = () => {
        if (itemStock > counter) {
            setCounter(counter + 1);
        } else {
            alert(`At that time, we've only ${itemStock} items of this product. If you want to buy more products, contact us via Email or Phone.`);
        }
    };

    const decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    };

    return (
        <>
            <Stock increment={increment} decrement={decrement} counter={counter} />
            <NavLink onClick={() => addToCart(id, product, counter, itemStock)} to='/cart' type="button" className="hover:transition-transform btn py-3 w-[9.1rem] hover:bg-indigo-700 text-white bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 my-2 mx-auto lg:mx-0 mt-4">Add To Cart
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
            </NavLink>
        </>
    )
}

export default AddToCart
