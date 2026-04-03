import React from 'react'
import SecondaryHero from '../Components/SecondaryHero'

export const metadata = {
	title: "ivvi Notes for students — dyslexia, ADHD and DSA | ivvi",
	description:
		"ivvi Notes for university and college students: record lectures as live visual mind maps. Ideal for dyslexia, ADHD and DSA-funded assistive technology.",
	alternates: {
		canonical: "/students",
	},
}
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

    <CentralVideoBlock heading="Watch ivvi Notes map live speech for students" />


  
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

    <FreeTrial heading="Try ivvi Notes free: 30-day full trial for students" />
    <Testimony/> 
    <LeadMagnet title="Free DSA guide PDF from ivvi — download below" /> 
    <ContactForm/> 
    
    
    
    
    
    
    






    </main>
  )
}

export default Assessors