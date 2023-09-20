import React, { useState } from 'react';
import Marquee from "react-fast-marquee";


export default function Trusted() {


    let counters = document.querySelectorAll('#counter');


    counters.forEach((counter) => {

        counter.innerHTML = '0';

        function updateCounter() {

            let targetCount = +counter.getAttribute('data-target');

            let startCount = Number(counter.innerHTML);

            let incr = targetCount / 1000

            if (startCount < targetCount) {
                counter.innerHTML = `${Math.round(startCount + incr)}`;
                setTimeout(updateCounter, 200);
            } else {
                counter.innerHTML == targetCount
            }

        }


        updateCounter()

    });



    return (
        <>
            <section className="text-gray-600 body-font bg-[#f6f8fa]">
                <h1 className=' text-center text-xl pt-12 md:pt-16 text-black font-medium tracking-wider' style={{ fontFamily: 'Playfair Display' }}>Trusted By <span id='counter' data-target='10000'></span>+ Companies</h1>
                <div className="container md:py-8 lg:py-12 md:pb-16 pt-3 pb-5 md:pt-12 mx-auto">
                    <Marquee pauseOnHover="true" >
                        <div className="flex">
                            <div>
                                <img className='w-3/4' src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png" alt="trusted-brands" />
                            </div>
                            <div>
                                <img className='w-3/4' src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png" alt="trusted-brands" />
                            </div>
                            <div>
                                <img className='w-3/4' src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png" alt="trusted-brands" />
                            </div>
                            <div>
                                <img className='w-3/4' src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png" alt="trusted-brands" />
                            </div>
                            <div>
                                <img className='w-3/4' src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png" alt="trusted-brands" />
                            </div>
                        </div>
                    </Marquee>
                </div>
            </section>
        </>
    )
}
