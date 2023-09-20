import React from 'react'
import Hero from '../../components/Hero'
import Services from '../../components/Services'
import Trusted from '../../components/Trusted'
import FeaturedProductsData from '../../components/FeaturedProductsData'



export default function Home() {

    let title = {
        name: "Apneck Store",
    }


    return (
        <div>
            <Hero title={title} />
            <FeaturedProductsData />
            <Services />
            <Trusted />

        </div>
    )
}
