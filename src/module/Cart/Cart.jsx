import React from 'react'
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../context/CartProvider';
import CartItem from '../../components/CartItem/CartItem';
import FormatPrice from '../../helper/FormatPrice';
import { useAuth0 } from '@auth0/auth0-react';


export default function Cart() {

    const { user, isAuthenticated } = useAuth0();
    const { cart, shippingFee, clearFilter, totalAmount, totalItems } = useCartContext();

    if (cart.length === 0) {
        return (
            <div className='mt-44 mb-16'>
                <h3 className='text-center text-3xl'>No Item In Cart</h3>
            </div>
        )
    }

    return (
        <>
            <div className='mt-32 mb-20'>

                {
                    isAuthenticated && (
                        <div className='flex items-center justify-start mb-10 w-[90%] mx-auto'>
                            <img src={user.picture} alt={user.name} className='rounded-full w-[5%]' />
                            <h2 className='text-3xl font-light pl-8'>{user.name}</h2>
                        </div>
                    )
                }

                <div className='grid text-center justify-around lg:grid-cols-5 grid-cols-3 border-b-2 w-[90%] mx-auto pb-2 divide-x-4'>
                    <p>Item</p>
                    <p className='lg:block hidden'>Price</p>
                    <p>Quantity</p>
                    <p className='lg:block hidden'>Subtotal</p>
                    <p>Remove</p>
                </div>

                <div>
                    {
                        cart.map((val) => <CartItem key={val.id} {...val} />)
                    }
                </div>

                {/* Button  */}

                <div className='border-b-2 w-[90%] mx-auto mb-6'></div>
                <div className=' flex justify-between items-center flex-col lg:flex-row w-[90%] mx-auto'>
                    <div>
                        <NavLink to='/products' type="button" className="hover:transition-transform btn py-3 hover:bg-indigo-700 text-white bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 my-2 mx-auto lg:mx-0 mt-4">Continue Shopping
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1 mt-0.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                        </NavLink>
                    </div>
                    <div className=' self-center'>
                        <button type="button" className="self-center hover:transition-transform btn py-2 px-4 mx-auto lg:mx-0 lg:mr-3 mt-5 mb-16 lg:mb-0 lg:mt-0 text-white bg-red-600 border-red-600 hover:scale-105 focus:ring-4 focus:outline-none ring-0 ring-white flex justify-center items-center" onClick={clearFilter}>Clear Filter</button>
                    </div>
                </div>




                {/* Total Price  */}


                <div className='flex w-[90%] mx-auto lg:justify-end justify-center items-center lg:mt-20'>
                    <div className="w-64 h-40 flex flex-wrap flex-col items-start justify-center bg-[#f6f8fa] rounded-md pl-5">
                        <p className='mb-1.5'>SubTotal: <span className='px-10'><FormatPrice price={totalAmount} /> </span></p>
                        <p className=''>Shipping Fee: <span className='px-10'><FormatPrice price={shippingFee} /> </span></p>
                        <div className='border-b-2 w-[90%] my-3'></div>
                        <p className=''>Order Total: <span className='px-10'><FormatPrice price={totalAmount + shippingFee} /> </span></p>

                    </div>
                </div>




            </div>

        </>
    )
}
