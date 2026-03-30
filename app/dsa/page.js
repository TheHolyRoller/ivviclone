import React from 'react'; 
import ds from '../Styles/DSA.module.css'; 
import DSAHero from '../Components/DSAHero';
import GrantSummary from '../Components/GrandSummary';
import DSASpec from '../Components/DSASpec';
import DSA_Allowance from '../Components/DSA_Allowance';
import Eligible from '../Components/Elibible';


function page() {
  return (
    <section className={ds.mainContainer}>
    
    <div className={ds.subContainer}>

        <DSAHero/> 
        <GrantSummary/> 
        <DSASpec/> 
        <DSA_Allowance/> 
        <Eligible/> 
        
        
        
        




    </div>
    </section>
  )
}

export default page
