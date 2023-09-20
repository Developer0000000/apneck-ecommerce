import React from 'react';

import { FaPlus, FaMinus } from 'react-icons/fa';


export default function Stock({ increment, decrement, counter }) {
    return (
        <>
            <div className="flex space-x-6 text-lg cursor-pointer lg:ml-5 justify-center lg:justify-start">
                <button onClick={decrement} className='cursor-pointer'> <FaMinus className='cursor-pointer' /> </button>
                <p className='text-indigo-700 text-2xl'>{counter}</p>
                <button onClick={increment} className='cursor-pointer'> <FaPlus className='cursor-pointer' /> </button>
            </div>
        </>
    )
}
