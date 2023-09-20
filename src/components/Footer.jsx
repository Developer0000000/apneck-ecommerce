import React from 'react'
import { NavLink } from 'react-router-dom'
import Apneck from '../assets/apneck.png'


export default function Footer(props) {

    let { activeLink, onUpdateActiveLink } = props;


    let years = new (Date);
    let year = years.getFullYear();

    return (
        <>
            <section className="text-gray-600 body-font bg-[#f6f8fa] lg:mt-10 mt-0 w-[90%] lg:w-[70%] rounded-lg mx-auto lg:translate-y-12 translate-y-20" >
                <div className="py-7 mx-auto">
                    <div className="lg:w-[90%] w-[80%] flex flex-col sm:flex-row sm:items-center justify-center items-start mx-auto">
                        <h1 className="flex-grow sm:pr-16 text-xl font-medium title-font lg:mb-0 mb-2 text-gray-900 lg:text-left text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                        <NavLink to='/contact' type="button" className="hover:transition-transform btn text-center ml-10 py-3 px-4 lg:mr-3  hover:text-white hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300">Get Started
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                        </NavLink>
                    </div>
                </div>
            </section>
            <footer className="text-white body-font bg-[#0A1435] ">
                <div className="container py-24 lg:w-[90%] lg:mx-auto ">
                    <div className="flex flex-wrap justify-center md:text-left text-center order-first">
                        <div className="lg:w-[25%] md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-base mb-6  uppercase">Apneck Store</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, eaque.</p>
                        </div>
                        <div className="lg:w-[20%] md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-base mb-6  uppercase">Permalinks</h2>
                            <nav className="list-none mb-10 space-y-2">
                                <li >
                                    <NavLink onClick={() => onUpdateActiveLink('home')} to='/' className={activeLink === 'home' ? "singlelink" : "text-white hover:text-blue-700 cursor-pointer"}>Home</NavLink>
                                </li>
                                <li >
                                    <NavLink onClick={() => onUpdateActiveLink('about')} to='/about' className={activeLink === 'about' ? "singlelink" : "text-white hover:text-blue-700 cursor-pointer"}>About</NavLink>
                                </li>
                                <li >
                                    <NavLink onClick={() => onUpdateActiveLink('products')} to='/products' className={activeLink === 'products' ? "singlelink" : "text-white hover:text-blue-700 cursor-pointer"}>Products</NavLink>
                                </li>
                                <li >
                                    <NavLink onClick={() => onUpdateActiveLink('contact')} to='/contact' className={activeLink === 'contact' ? "singlelink" : "text-white hover:text-blue-700 cursor-pointer"}>Contact</NavLink>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-[20%] md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-base mb-6  uppercase">Permalinks</h2>
                            <nav className="list-none mb-10 space-y-2">
                                <li>
                                    <NavLink to='/' className="text-white hover:text-blue-700 cursor-pointer">Privacy Policy</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/' className="text-white hover:text-blue-700 cursor-pointer">Terms and Condition</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/' className="text-white hover:text-blue-700 cursor-pointer">Refund Privacy</NavLink>
                                </li>

                            </nav>
                        </div>
                        <div className="lg:w-[30%] md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-base mb-6">SUBSCRIBE</h2>
                            <div className="flex flex-col lg:flex-row w-[90%] mx-auto lg:mx-0 xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap space-y-2 justify-center items-end md:justify-start">
                                <div className="relative sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2 ">
                                    <label htmlFor="footer-field" className="leading-7 text-sm text-white">Subscribe to get important updates</label>
                                    <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                                <div className='-translate-x-24 lg:translate-x-0'>
                                    <NavLink to='/' type="submit" className=" justify-center btn hover:text-white hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300">Subscribe</NavLink>
                                </div>
                            </div>
                            <p className="text-white text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
                                <br className="lg:block hidden" />waistcoat green juice
                            </p>
                        </div>
                    </div>
                </div>
                <div className="border-t-[1px] border-white ">
                    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                        <NavLink to='/' className="flex title-font font-medium items-center md:justify-start justify-center text-white lg:ml-12">
                            <img src={Apneck} alt="Apneck" className='w-20' />
                        </NavLink>
                        <p className="text-sm text-white sm:ml-6 sm:mt-0 mt-4">© {year} All Right Reserved —
                            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-white ml-1" target="_blank">@apneck</a>
                        </p>
                        <span className="social-icon inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <NavLink to='/' className="text-white hover:text-black icons">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </NavLink>
                            <NavLink to='/' className="ml-3 text-white hover:text-black icons">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </NavLink>
                            <NavLink to='/' className="ml-3 text-white hover:text-black icons">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </NavLink>
                            <NavLink to='/' className="ml-3 text-white hover:text-black icons">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </NavLink>
                        </span>
                    </div>
                </div>
            </footer>
        </>
    )
}
