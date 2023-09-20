import React from 'react';
import FeaturedProductsCard from '../FeatureProductsCard';
import { useProductsProvider } from '../../context/ProductsProvider';

const ProductGridViewCard = () => {
    const { loading, products } = useProductsProvider();
    if (loading) {
        <div className='flex justify-center items-center'>loading...</div>
    }
    return (
        <div className='my-10 grid lg:grid-cols-2 grid-cols-1 place-items-center justify-between items-center gap-y-8 bg-[#f6f8fa] pt-16 pb-12 lg:px-0 px-7'>
            {
                products.map((val) => (
                    <FeaturedProductsCard key={val} {...val} />
                ))
            }
        </div>
    )
}

export default ProductGridViewCard
