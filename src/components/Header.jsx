import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Apneck from '../assets/apneck.png'
import { FiShoppingCart } from "react-icons/fi";
import { useCartContext } from '../context/CartProvider';
import { useAuth0 } from "@auth0/auth0-react";


const Header = (props) => {

    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    const { totalItems } = useCartContext();

    let { activeLink, onUpdateActiveLink } = props;

    const [activeBtn, setActiveBtn] = useState(false)

    const toggleBtn = () => {
        if (activeBtn) {
            setActiveBtn(false)
        }
        else {
            setActiveBtn(true)
        }
    };

    return (
        <>

            <nav className="bg-[#f6f8fa] fixed w-full z-20 top-0 left-0 border-b border-gray-200 shadow-lg">

                <div className="w-[95%] flex flex-wrap items-center justify-between mx-auto p-4">

                    <a onClick={() => onUpdateActiveLink('home')} href="/" className={activeLink === 'home' ? "flex items-center w-20 lg:ml-12" : 'flex items-center w-20 lg:ml-12'}>
                        <img src={Apneck} alt="Apneck" />
                    </a>

                    <div className="flex lg:order-2 space-x-2 lg:mr-20 mr-0">

                        <h2 className='self-center mr-4 text-base font-light'>{isAuthenticated && user.name}</h2>

                        {
                            isAuthenticated ?
                                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} type="button" className="hover:transition-transform btn py-2 px-3 lg:mr-3 hidden lg:flex hover:text-white hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300">Log Out
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                                </button>
                                :
                                <button onClick={() => loginWithRedirect()} type="button" className="hover:transition-transform btn py-2 px-3 lg:mr-3 hidden lg:flex hover:text-white hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300">Log in
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                                </button>

                        }


                        <div className='relative' style={{ marginLeft: '1.5rem' }}>
                            <NavLink onClick={() => onUpdateActiveLink('cart')} to='/cart' type="button" className={activeLink === 'cart' ? "block mt-2 text-blue-700 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 font-bold text-3xl" : "block mt-2 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 font-bold text-3xl"}>
                                <FiShoppingCart />
                                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-[#8490ff] border-2 border-white rounded-full -top-0 -right-2">{totalItems}</div>
                            </NavLink>
                        </div>

                        <button onClick={toggleBtn} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only"></span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>

                    <div className={activeBtn ? "items-center justify-between block lg:ml-auto lg:mr-9 w-full lg:flex lg:w-auto lg:order-1" : "hidden lg:ml-auto lg:mr-9 w-full lg:flex lg:w-auto lg:order-1"} id="navbar-sticky">

                        <ul className="flex flex-col justify-center items-center lg:items-stretch p-4 lg:p-0 mt-4 font-medium rounded-lg bg-[#f6f8fa] lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 text-black">

                            <li className='navlinks'>
                                <NavLink onClick={() => onUpdateActiveLink('home')} to="/" className={activeLink === 'home' ? "text-blue-700 singlelink" : " block py-2 pl-3 pr-4 text-gray-900  bg-[#f6f8fa]bg-blue-700 rounded lg:bg-transparent lg:p-0  lg:hover:text-blue-700"} aria-current="page">Home</NavLink>
                            </li>
                            <li className='navlinks'>
                                <NavLink onClick={() => onUpdateActiveLink('about')} to="/about" className={activeLink === 'about' ? "text-blue-700 singlelink" : " block py-2 pl-3 pr-4 text-gray-900  bg-[#f6f8fa]rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 "}>About</NavLink>
                            </li>
                            <li className='navlinks'>
                                <NavLink onClick={() => onUpdateActiveLink('products')} to="/products" className={activeLink === 'products' ? "text-blue-700 singlelink" : " block py-2 pl-3 pr-4 bg-[#f6f8fa] text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 "}>Products</NavLink>
                            </li>
                            <li className='navlinks'>
                                <NavLink onClick={() => onUpdateActiveLink('contact')} to="/contact" className={activeLink === 'contact' ? "text-blue-700 singlelink" : " block py-2 pl-3 pr-4 bg-[#f6f8fa] text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 "}>Contact</NavLink>
                            </li>

                        </ul>

                        <div onClick={() => loginWithRedirect()} className='sm:hidden flex flex-col space-y-5 justify-center items-center'>
                            <button type="button" className=" justify-center btn hover:text-white hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300">Log in
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                            </button>
                            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} type="button" className=" justify-center btn hover:text-white hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300">Log out
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                            </button>
                        </div>
                    </div>

                </div>
            </nav>


        </>
    )
}

export default Header
