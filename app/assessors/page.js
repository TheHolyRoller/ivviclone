import React from 'react'
import AssessHero from '../Components/AssessHero'
import Demo from '../Components/Demo'
import AssessorGrid from '../Components/AssessorGrid'
import RightImageText from '../Components/RigthImageText'
import TechSpecs from '../Components/TechSpecs'; 
import SpecGrid from '../Components/SpecGrid'; 
import DemoRequest from '../Components/Demo_Request'
import img from '../../public/images/girl_laptop.png';
import lady from '../../public/images/lady.webp'; 
import AssessorForm from '../Components/AssessorForm'
import SpecialistForm from '../Components/SpecialistForm'
import Testimonial from '../Components/Testimonial'



function Students() {
  return (
    <section>
        <AssessHero/> 
        <Demo/> 
        <AssessorGrid/> 
        <RightImageText/>
        <SpecGrid/> 
        <TechSpecs/> 
        {/* <DemoRequest/> */}
        <DemoRequest
      mainHeading="Request a Demo License"
      supportingHeadline=""
      bulletPoints={[
        'Free licence for  assessment, demonstration and training purposes.',
        'Experience the Functionality of ivvi',
        'DSA Approved',
        'No Subscription',
        'Keep Lifetime Access to Your Maps',
      ]}
      ctaText=""
      ctaLink="https://ivvi.dev"
      imageSrc={lady}
      imageAlt="Woman using laptop"
    />

    <AssessorForm/> 

    <SpecialistForm/> 

    <Testimonial/> 
    

    
                


    </section>
  )
}

export default Students