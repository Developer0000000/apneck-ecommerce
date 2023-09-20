import React, { useEffect } from 'react'
import PageNavigation from '../../components/PageNavigation'
import { useParams } from 'react-router-dom'
import { useFeaturedProductContext } from '../../context/FeaturedProductProvider';
import FormatPrice from '../../helper/FormatPrice';
import Stars from '../../components/Stars';
import AddToCart from '../../components/AddToCart';
import Skeleton from 'react-loading-skeleton';


export default function SingleProductCard() {

    let { id } = useParams();
    let { singleProduct, getSingleProduct, loading } = useFeaturedProductContext();
    let { image, category, price, title, description, rating } = singleProduct;
    let API = `https://fakestoreapi.com/products/${id}`

    useEffect(() => {
        getSingleProduct(API);
    }, [])


    return (
        <>
            <PageNavigation key={id} category={category} />
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container py-10 mx-auto">
                    <div className="lg:w-[90%] mx-auto flex flex-wrap items-center">
                        <div className="lg:w-1/2 w-full lg:h-auto object-cover object-center ">
                            <a href={image} className='flex justify-center items-center'>
                                {loading ? (
                                    <Skeleton width={320} height={400} /> // Add Skeleton here
                                ) : (
                                    <img src={image} className='lg:w-[75%] w-[90%]' alt="" />
                                )}
                            </a>
                        </div>
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 pt-20 mt-8 lg:mt-0 text-center lg:text-left ">
                            <h2 className="text-base title-font text-[#8490ff] font-medium tracking-widest uppercase">BRAND</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{title}</h1>
                            <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-start space-y-4 lg:space-y-0 my-4 lg:my-3">

                                <Stars key={id} rating={rating} />

                                {/* for PC  */}
                                <span className="lg:flex hidden  ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s social-icon bg-[#f6f8fa]">
                                    <a className="text-gray-500 hover:text-black icons cursor-pointer">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 " viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500 hover:text-black icons cursor-pointer">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 " viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500 hover:text-black icons cursor-pointer">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 " viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>


                            </div>

                            {/* for Mobile  */}
                            <span className="flex justify-center lg:hidden my-4 w-9/12 mx-auto py-2 space-x-2s social-icon bg-[#f6f8fa]">
                                <a className="text-gray-500 hover:text-black icons cursor-pointer">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 " viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a className="text-gray-500 hover:text-black icons cursor-pointer">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 " viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a className="text-gray-500 hover:text-black icons cursor-pointer">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 " viewBox="0 0 24 24">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                    </svg>
                                </a>
                            </span>

                            <p className="leading-relaxed pb-5 border-b-2 border-gray-100 mb-5 w-[90%] mx-auto lg:w-full lg:mx-0">{description}</p>

                            <ul className='space-y-1 mb-1 text-lg'>
                                <li>Available: <span className='font-semibold'>In Stock</span> </li>
                                <li>ID: <span className='font-semibold'>{id}</span> </li>
                                <li>MRP: <del> <FormatPrice key={id} price={price + price} /> </del></li>
                                <li className='text-[#8490ff]'>Deal of The Day: <FormatPrice key={id} price={price} /> </li>
                            </ul>

                            <div className="flex items-center justify-center lg:justify-start pb-5 border-b-2 border-gray-100 mb-5"></div>

                            <div className="addtocart">
                                <AddToCart product={singleProduct} />
                            </div>



                        </div>
                    </div >
                </div >
            </section >
        </>
    )
}
