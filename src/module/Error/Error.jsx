import React from 'react'
import ErrorImg from '../../assets/error.svg'
import { NavLink } from 'react-router-dom'

export default function Error() {
    return (
        <>
            <section className="text-gray-600 body-font mt-20 lg:mt-28">
                <div className="container mx-auto flex px-5 py-8 items-center justify-center flex-col">
                    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={ErrorImg} />
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">UH OH! You're Lost</h1>
                        <p className="mb-8 leading-relaxed">Looks like you've followed a broken link or entered a URL that doesn't exist on this site.</p>
                        <div className="flex justify-center">
                            <NavLink to='/' type="button" className="hover:transition-transform btn py-3 px-4 lg:mr-3  hover:text-white hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300">Go To Home Page
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
