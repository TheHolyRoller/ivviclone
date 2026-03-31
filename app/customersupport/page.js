import React from 'react'
import cm from '../Styles/CustomerSupport.module.css'
import SupportHero from '../Components/SupportHero'
import CustomerContactForm from '../Components/CustomerContactForm'
import FAQ from '../Components/FAQ'


function page() {
  return (
    <div className={cm.mainContainer} >
        
      <SupportHero/> 
      <CustomerContactForm/> 
      <FAQ/> 
      
      



    </div>
  )
}

export default page