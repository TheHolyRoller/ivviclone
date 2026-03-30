import React from 'react'; 
import ds from '../Styles/DSA.module.css'; 
import DSAHero from '../Components/DSAHero';
import GrantSummary from '../Components/GrandSummary';
import DSASpec from '../Components/DSASpec';
import DSA_Allowance from '../Components/DSA_Allowance';
import Eligible from '../Components/Elibible';
import GrantCover from '../Components/Grant_Cover';
import DSA_Apply from '../Components/DSA_Apply';
import DSASteps from '../Components/DSASteps';
import Assessment from '../Components/Assessment';
import Prepare from '../Components/Prepare';
import Award from '../Components/Award';
import Query from '../Components/Query';

function page() {
  return (
    <section className={ds.mainContainer}>
    
    <div className={ds.subContainer}>

        <DSAHero/> 
        <GrantSummary/> 
        <DSASpec/> 
        <DSA_Allowance/> 
        <Eligible/> 
        <GrantCover/> 
        <DSA_Apply/> 
        <DSASteps/> 
        <Assessment/> 
        <Prepare/> 
        <Award/> 
        <Query/> 

        

        
        
        
        
        
        
        
        




    </div>
    </section>
  )
}

export default page
