import React from 'react';

import { BsFillGridFill } from 'react-icons/bs';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { useProductsProvider } from '../../context/ProductsProvider';


export default function Sort() {
    const { gridView, setGridView, setListView, products, sorting } = useProductsProvider()
    return (
        <>
            <div className='flex flex-col lg:flex-row lg:justify-between space-y-2 lg:space-y-0 justify-center lg:flex-nowrap flex-wrap items-center bg-[#f6f8fa] py-6'>

                <div className="sort px-4 space-x-6">
                    <button onClick={setGridView} className={gridView ? 'bg-black text-white p-2 rounded-sm' : 'bg-white p-2 rounded-sm'}> <BsFillGridFill className='text-lg' /> </button>
                    <button onClick={setListView} className={!gridView ? 'bg-black text-white p-2 rounded-sm' : 'bg-white p-2 rounded-sm'}> <AiOutlineUnorderedList className='text-lg' /> </button>
                </div>

                <div>
                    <div className="productData lg:block hidden">{products.length} Products Available</div>
                </div>


                <div className="selection lg:pr-4 pr-0">
                    <div className="productData lg:hidden block text-center mb-5">{products.length} Products Available</div>

                    <form action="#">
                        <label htmlFor="sort" className="sr-only">Filter Price</label>
                        <select onChange={sorting} id="sort" className="cursor-pointer flex justify-around items-center py-2.5 w-full bg-transparent border-2 border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-400  peer">
                            <option value='--Select--' className='py-10'>Sort By: --Select--</option>
                            <option value="" disabled></option>
                            <option value='lowest' className='py-10'>Sort By: Lowest Price</option>
                            <option value="" disabled></option>
                            <option value='highest' className='py-10'>Sort By: Highest Price</option>
                            <option value="" disabled></option>
                            <option value='ascending' className='py-10'>Sort By: Ascending</option>
                            <option value="" disabled></option>
                            <option value='descending' className='py-10'>Sort By: Descending</option>
                        </select>
                    </form>


                </div>

            </div>
        </>
    )
}
