import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Preloader from '../component/Preloader'

export default function Master(props) {
  return (
      <>
        <Preloader />
        
        <Header />
        
       {props.children}
       
        <Footer />
      </>
  )
}
