import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";


export default function Services() {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">

                    <div className="flex justify-around flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-8">

                        <div className="w-[90%] md:w-[30%]  rounded-2xl grid place-items-center bg-[#f6f8fa] md:py-20 py-10">
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-indigo-500 flex-shrink-0 mb-4 md:mb-0">
                                <TbTruckDelivery className=' text-[2.5rem]' />
                            </div>
                            <h2 className="text-gray-900 md:text-xl title-font font-medium md:-mt-8">Super Fast & Free Delivery</h2>
                        </div>

                        <div className="w-[90%] md:w-[30%] space-y-3 md:space-y-3.5">
                            <div className=" rounded-2xl flex items-center bg-[#f6f8fa] py-10 pl-5">
                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-indigo-500 flex-shrink-0 mr-1.5">
                                    <MdSecurity className=' text-[2.5rem]' />
                                </div>
                                <h2 className="text-gray-900 md:text-lg title-font font-medium">Non-contact Shipping
                                </h2>
                            </div>
                            <div className=" rounded-2xl flex items-center bg-[#f6f8fa] py-10 pl-5">
                                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-indigo-500 flex-shrink-0 mr-1.5">
                                    <GiReceiveMoney className=' text-[2.5rem]' />
                                </div>
                                <h2 className="text-gray-900 md:text-lg title-font font-medium">Money-back Guaranteed</h2>
                            </div>
                        </div>

                        <div className="w-[90%] md:w-[30%]  rounded-2xl grid place-items-center bg-[#f6f8fa] md:py-20 py-10">
                            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white text-indigo-500 flex-shrink-0 mb-4 md:mb-0">
                                <RiSecurePaymentLine className=' text-[2.5rem]' />
                            </div>
                            <h2 className="text-gray-900 md:text-xl title-font font-medium md:-mt-8">Super Secure Payment System</h2>
                        </div>



                    </div>
                </div>
            </section>
        </>
    )
}
