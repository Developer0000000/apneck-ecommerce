import React, { useEffect } from 'react';
import HeroImg from '../assets/hero.jpg';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';


export default function Hero({ title }) {

    const { user, isAuthenticated } = useAuth0();


    let { name } = title;


    return (
        <>
            <section className="text-gray-600 body-font lg:py-20 lg:mt-10">
                <div className="container mx-auto flex px-4 lg:px-20 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mt-8 md:mt-0">
                        <span className=' text-[#8490ff] text-lg lg:text-base letter tracking-widest font-medium uppercase'>Wellcome  {isAuthenticated && user.name} to</span>
                        <h1 className="title-font sm:text-4xl lg:text-5xl text-4xl mb-4 font-medium text-gray-900" style={{ fontFamily: 'Playfair Display' }}>{name}</h1>
                        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                        <div className="flex justify-center">
                            <NavLink to='/products' type="button" className="hover:transition-transform btn py-3 px-4 lg:mr-3  hover:text-white hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300">Shop Now
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                            </NavLink>
                        </div>
                    </div>
                    <br />
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 img_shadow">
                        <img className="object-cover object-center" alt="hero" src={HeroImg} />
                    </div>
                </div>
            </section>


        </>
    )
}
