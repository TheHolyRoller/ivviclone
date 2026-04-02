import React from 'react'
import SecondaryHero from '../Components/SecondaryHero'
import AssessorGrid from '../Components/AssessorGrid'
import CentralVideoBlock from '../Components/CentralVideoBlock'
import LeftImageText from '../Components/LeftImageText'
import TextImageVideo from '../Components/TextImageVideo'
import ImageTextVideo from '../Components/ImageTextVideo'
import LiveMap from '../Components/LiveMap'
import Highlight from '../Components/Highlight'
import Edit from '../Components/Edit'
import Outline from '../Components/Outline'
import All from '../Components/All'
import FreeTrial from '../Components/FreeTrial'
import Testimony from '../Components/Testimony'
import LeadMagnet from '../Components/LeadMagnet'
import ContactForm from '../Components/ContactForm'


function Assessors() {
  return (
    <main>

    <SecondaryHero/>

    <AssessorGrid/>

    <CentralVideoBlock/>


  
    <LeftImageText/> 

    {/* Add in the main section container here  */}
    <section className="mainSpecGrid">


    {/* Add in the section heading */}

    <h5 className="mainSectionSpecHeading">

    {`Key Features You'll Love`}

    </h5>


    <TextImageVideo/> 
    <ImageTextVideo/> 


    <LiveMap/> 
    <Highlight/> 
    <Edit/> 
    <Outline/> 

    {/* Add in the end of the section here */}
    </section>




    <All/> 

    <FreeTrial/> 
    <Testimony/> 
    <LeadMagnet/> 
    <ContactForm/> 
    
    
    
    
    
    
    






    </main>
  )
}

export default Assessors