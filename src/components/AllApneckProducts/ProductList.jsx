import React from 'react'
import ProductGridViewCard from './ProductGridViewCard'
import ProductListViewCard from './ProductListViewCard'
import { useProductsProvider } from '../../context/ProductsProvider'

const ProductList = () => {
    const { gridView } = useProductsProvider();

    if (gridView === true) {
        return <ProductGridViewCard />
    }
    if (gridView === false) {
        return <ProductListViewCard />
    }


}

export default ProductList
