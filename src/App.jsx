import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './module/Home/Home'
import About from './module/About/About'
import Contact from './module/Contact/Contact'
import Error from './module/Error/Error'
import SingleProductCard from './module/ProductCard/SingleProductCard'
import Products from './module/Products/Products'
import Cart from './module/Cart/Cart'


export default function App() {

  let [activeLink, setActiveLink] = useState();

  function onUpdateActiveLink(value) {
    setActiveLink(value);
  }

  return (
    <>
      <Header activeLink={activeLink} onUpdateActiveLink={onUpdateActiveLink} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products/singleproductcard/:id' element={<SingleProductCard />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer activeLink={activeLink} onUpdateActiveLink={onUpdateActiveLink} />
    </>
  )
}
