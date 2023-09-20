import React, { useState } from 'react';
import FormatPrice from '../../helper/FormatPrice';
import { FaTrash } from 'react-icons/fa';

import Stock from '../Stock';
import { useCartContext } from '../../context/CartProvider';


const CartItem = ({ id, title, image, counter, price }) => {
    let { increment, decrement, removeItem } = useCartContext();

    return (
        <>

            <div className='my-10 grid text-center justify-center items-center place-items-center lg:grid-cols-5 grid-cols-3 lg:w-[90%] mx-auto'>


                <div className='flex lg:flex-row flex-col text-start py-4 justify-center items-center ml-4'>
                    <img src={image} alt={id} className='w-[30%]' />
                    <div className="image-data text-start w-full ml-4">
                        <p className='lg:block hidden'>{title ? title.slice(0, 20) : title}</p>
                    </div>
                </div>


                {/* Price  */}
                <p className='lg:block hidden'>{<FormatPrice key={id} price={price} />}</p>


                {/* Quantity  */}
                <div>
                    <Stock key={id} counter={counter} increment={() => increment(id)} decrement={() => decrement(id)} />
                </div>


                {/* Subtotal  */}

                <p className='lg:block hidden'>{<FormatPrice key={id} price={price * counter} />}</p>


                {/* Remove  */}

                <p>{<FaTrash className='text-red-600 cursor-pointer' onClick={() => removeItem(id)} />}</p>


            </div>




        </>
    )
}

export default CartItem
