import React from 'react'
import ac from '../Styles/AccessToWork.module.css'; 
import AccessHero from '../Components/AccessHero';
import GetStarted from '../Components/GetStarted';
import ProcessGuide from '../Components/ProcessGuide'
import GrantOffer from '../Components/GrantOffer'
import Training from '../Components/Training'
import ApplyCTA from '../Components/ApplyCTA'


function page() {
  return (
    <section className={ac.mainContainer}>
        
        <AccessHero/>
        <GetStarted/> 
		<ProcessGuide />
		<GrantOffer />
		<Training />
		<ApplyCTA />
    
         
    

    </section>
  )
}

export default page