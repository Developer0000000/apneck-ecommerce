import React from 'react';
import FormatPrice from '../helper/FormatPrice';
import { NavLink } from 'react-router-dom';
import { useFeaturedProductContext } from '../context/FeaturedProductProvider';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const FeatureProductsCard = ({ title, price, image, id }) => {
    const { loading } = useFeaturedProductContext();
    return (
        <>
            <NavLink to={`/products/singleproductcard/${id}`}>
                {loading ? (
                    <div className="lg:px-[3.7rem] lg:py-4 text-center md:text-left w-full relative">
                        <div className="relative">
                            <Skeleton width={320} height={400} /> {/* Adjust the width and height */}
                            <span className={`absolute inline-flex items-center justify-center px-2 text-sm font-bold text-white rounded-full -top-2 -right-4 bg-blue-700 dark:border-gray-900 border-2 border-white`}>
                                {'brand'}
                            </span>
                        </div>
                        <div className="flex flex-col justify-around items-center mt-4 rounded-b-sm -translate-y-5 text-center py-3 bg-[#f6f8fa] space-y-2">
                            <Skeleton width={160} height={24} /> {/* Adjust the width and height */}
                            <Skeleton width={100} height={24} /> {/* Adjust the width and height */}
                        </div>
                    </div>
                ) : (
                    <div className="lg:px-[3.7rem] lg:py-4 text-center md:text-left w-full relative">
                        <div className="relative">
                            <a className="block relative h-fit rounded-sm rounded-b-none overflow-hidden">
                                <img alt={title} className="object-fill object-center w-full h-80 block" src={image} />
                            </a>
                            <span className={`absolute inline-flex items-center justify-center px-2 text-sm font-bold text-white rounded-full -top-2 -right-4 bg-blue-700  border-2 border-white`}>
                                {'brand'}
                            </span>
                        </div>
                        <div className="flex flex-col justify-around items-center mt-4 rounded-b-sm -translate-y-5 text-center py-3 bg-[#f6f8fa] space-y-2">
                            <h2 className="text-gray-900 title-font text-lg font-medium capitalize">{title}</h2>
                            <h5 className="text-lg lg:text-2xl font-semibold">{<FormatPrice price={price} />}</h5>
                        </div>
                    </div>
                )}
            </NavLink>
        </>
    );
};

export default FeatureProductsCard;