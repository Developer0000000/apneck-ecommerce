import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';

const Stars = ({ rating }) => {
    let ratingStar = Array.from({ length: 5 }, (_, i) => {
        let halfNumber = i + 0.5;
        return (
            <span key={i}>
                {
                    rating && rating.rate > i + 1
                        ? <FaStar className=' text-indigo-700' />
                        : rating && rating.rate >= halfNumber
                            ? <FaStarHalfAlt className=' text-indigo-700' />
                            : <AiOutlineStar className=' text-indigo-700' />
                }
            </span>
        );
    });

    return (
        <>
            <span className="flex items-center">
                <div className='flex items-center space-x-1 text-lg'>
                    {ratingStar}
                </div>
                <span className="text-gray-600 ml-3">{rating && rating.count} Reviews</span>
            </span>
        </>
    );
};

export default Stars;
