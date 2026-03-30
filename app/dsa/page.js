import React from 'react'; 
import ds from '../Styles/DSA.module.css'; 
import DSAHero from '../Components/DSAHero';
import GrantSummary from '../Components/GrandSummary';
import DSASpec from '../Components/DSASpec';


function page() {
  return (
    <section className={ds.mainContainer}>
    
    <div className={ds.subContainer}>

        <DSAHero/> 
        <GrantSummary/> 
        <DSASpec/> 
        
        




    </div>
    </section>
  )
}

export default page
