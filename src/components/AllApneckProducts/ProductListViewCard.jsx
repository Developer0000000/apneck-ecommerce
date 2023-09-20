import React from 'react';

import FormatPrice from '../../helper/FormatPrice';
import { NavLink } from 'react-router-dom';
import { useProductsProvider } from '../../context/ProductsProvider';


export default function ProductListViewCard() {

  const { products } = useProductsProvider();

  return (
    <>

      <div className="my-10 bg-[#f6f8fa] lg:px-10 px-5">

        <section className="text-gray-600 body-font lg:border border-none">

          <div className="container lg:px-10 px-0 lg:py-4 py-20 mx-auto flex flex-wrap justify-between relative space-y-28 lg:space-y-0 my-10">

            {products.map((val) => {

              let { image, price, name, description, id } = val
              return (
                <div key={id} className='flex lg:justify-between justify-center text-center lg:text-left flex-wrap lg:flex-nowrap lg:border-none border pb-12 lg:pb-0 items-center'>

                  <div className="lg:w-[40%] h-[75%] w-full rounded-sm sm:mt-0 relative flex items-center" >
                    <img className="object-contain object-center w-full h-[100%] cursor-pointer" src={image} alt="image" />
                    <span className={`absolute inline-flex items-center justify-center px-2 text-sm font-bold text-white rounded-full -top-2 lg:right-8 -right-3 bg-blue-700 border-2 border-white`}>brand</span>
                  </div>

                  <div className="flex flex-wrap lg:mr-16 mx-auto lg:w-1/2 sm:w-2/3 content-start ">

                    <div className="w-full sm:p-4 px-4 mb-6">
                      <h1 className="title-font font-medium text-xl mb-2 text-gray-900">{name}</h1>
                      <div className="leading-relaxed">{description ? description.slice(0, 60) : description}...</div>
                      <h2 className="title-font font-medium text-3xl text-gray-900 mt-2 mb-4">{<FormatPrice key={id} price={price} />}</h2>
                      <NavLink to={`/products/singleproductcard/${id}`} type="button" className="hover:transition-transform btn py-3 px-0 lg:mr-3  hover:text-white hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 flex justify-center items-center w-[85%] mx-auto lg:w-[45%] lg:mx-0">Shop Now
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                      </NavLink>
                    </div>

                  </div>

                </div>
              )

            })}

          </div>
        </section >

      </div >

    </>
  )
}
