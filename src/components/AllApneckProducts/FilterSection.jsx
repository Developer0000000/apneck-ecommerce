import React, { useState } from 'react';
import FormatPrice from '../../helper/FormatPrice'
import { useProductsProvider } from '../../context/ProductsProvider';


export default function FilterSection() {

    const { updateFilterValue, clearFilter, products, filter: { maxPrice, minPrice, price, text, category } } = useProductsProvider();

    const getUniqueData = (data, property) => {

        let newVal = data.map((val) => {
            return val[property];
        });

        return newVal = ["all", ...new Set(newVal)];

    };

    const categoryData = getUniqueData(products, "category");

    return (
        <div className=' flex lg:justify-start justify-center flex-col'>

            <form className='lg:w-9/12 w-full mb-10'>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </div>
                    <input onChange={updateFilterValue} value={text} name='text' type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 outline-none rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Find Products" />
                </div>

            </form>


            {/* filterCategory */}
            <div className="mt-5 filterCategory ">
                <h1 className=' text-xl font-medium mb-3 text-center lg:text-start'>Category</h1>
                {
                    categoryData.map((val, i) => {
                        return (
                            <button key={i} type="button" name='category' value={val} className={val === category ? 'py-1 flex flex-col mx-auto lg:mx-0 capitalize hover:text-indigo-700 text-indigo-500 ' : 'py-1 flex flex-col mx-auto lg:mx-0 capitalize hover:text-indigo-700  '} onClick={updateFilterValue} >
                                {val}
                            </button>
                        )
                    })
                }

            </div>



            {/* Price */}
            <div className="my-10 filterCategory ">
                <h1 className=' text-xl font-medium mb-3 text-center lg:text-start'>Price</h1>
                <div className='w-3/4 mx-auto lg:mx-0'>
                    <label htmlFor="default-range" className="block mb-2 font-medium text-gray-900 text-center lg:text-start"> <FormatPrice price={price} /> </label>
                    <input onChange={updateFilterValue} id="default-range" type="range" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" value={price} min={minPrice} max={maxPrice} step='1' name='price' />
                </div>
            </div>






            {/* Clear Filter */}

            <button type="button" className="hover:transition-transform btn py-3 px-4 w-2/3 mx-auto lg:mx-0 lg:mr-3 mt-5 mb-16 lg:mb-0 lg:mt-0 text-white bg-red-600 border-red-600 hover:scale-105 focus:ring-4 focus:outline-none ring-0 ring-white flex justify-center items-center" onClick={clearFilter}>Clear Filter</button>



        </div >
    )
}
