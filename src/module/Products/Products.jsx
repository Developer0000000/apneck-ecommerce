import React from 'react';

import Sort from '../../components/AllApneckProducts/Sort';
import ProductList from '../../components/AllApneckProducts/ProductList';
import FilterSection from '../../components/AllApneckProducts/FilterSection';

export default function Products() {


    return (
        <>

            <section className='mt-44'>
                <div className="grid mx-auto w-[85%] gtc">
                    <div className="left pt-5">
                        <FilterSection />
                    </div>
                    <div className="right">
                        <div className="right_top">
                            <Sort />
                        </div>
                        <div className="right_bottom">
                            <ProductList />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

