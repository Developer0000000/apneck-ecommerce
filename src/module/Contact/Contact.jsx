import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'


export default function Contact() {

    const { user, isAuthenticated } = useAuth0();

    return (
        <>
            <section className="text-gray-600 body-font relative md:mt-12 mt-20 md:py-24 py-16">
                <h1 className=' text-center text-2xl md:text-3xl' style={{ fontFamily: 'MuseoModerno' }}>Feel Free To Contact</h1>
                <br />
                <br />
                <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.127359026722!2d74.25763187506708!3d31.465682549842942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919022a17a84c4b%3A0x74ef403a4d0bb9a4!2sExpo%20Center%20Lahore!5e0!3m2!1sen!2s!4v1688387101030!5m2!1sen!2s" width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        <div className="bg-white relative flex text-center md:text-left flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a className="text-indigo-500 leading-relaxed">example@email.com</a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <a href='tel:03254919026' className="leading-relaxed">+92 025 4919026</a>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <form action="https://formspree.io/f/xnqkayre" method="POST">
                            <h2 className=" text-center text-gray-900 text-lg mb-1 font-medium title-font" style={{ fontFamily: 'MuseoModerno' }}>Feedback</h2>
                            <p className=" text-center leading-relaxed mb-5 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <div className="relative mb-4">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input value={isAuthenticated ? user.name : ''} type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                <input value={isAuthenticated ? user.email : ''} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                            <button type="submit" className="w-full hover:transition-transform btn py-3 px-4 lg:mr-3 justify-center hover:text-white hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300">Send Now
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                            </button>
                            <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
