import React from 'react'
import { useFeaturedProductContext } from '../context/FeaturedProductProvider'
import FeatureProductsCard from './FeatureProductsCard';

const FeaturedProducts = () => {

    let { featureProducts } = useFeaturedProductContext();

    return (
        <>

            <section className="text-gray-600 body-font bg-[#f6f8fa]">
                <div className="text-center pt-20 ">
                    <h6 className='text-sm text-blue-700 mb-0.5 font-medium tracking-widest'>CHECK NOW!</h6>
                    <h1 className='lg:text-4xl text-3xl  font-medium text-black' style={{ fontFamily: 'Playfair Display' }}>Our Feature Services</h1>
                </div>
                <div className=" container py-24 mx-auto">
                    <div className="lg:w-full w-[80%] space-y-12 lg:space-y-0  mx-auto grid place-items-center lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
                        {
                            featureProducts.map((val) => (
                                <FeatureProductsCard key={val.id} {...val} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeaturedProducts
