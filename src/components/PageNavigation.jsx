import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PageNavigation({ category }) {
    return (
        <>
            <div className='mt-24 py-4 flex items-center justify-center capitalize bg-[#f6f8fa] text-xl'>
                <NavLink to='/products' className='text-[#8490ff]'> Products </NavLink> /{category}
            </div>
        </>
    )
}
