import React from 'react'
import AssessHero from '../Components/AssessHero'
import Demo from '../Components/Demo'
import AssessorGrid from '../Components/AssessorGrid'
import RightImageText from '../Components/RigthImageText'
import TechSpecs from '../Components/TechSpecs'; 
import SpecGrid from '../Components/SpecGrid'; 
import DemoRequest from '../Components/Demo_Request'




function Students() {
  return (
    <section>
        <AssessHero/> 
        <Demo/> 
        <AssessorGrid/> 
        <RightImageText/>
        <SpecGrid/> 
        <TechSpecs/> 
        <DemoRequest/>
                


    </section>
  )
}

export default Students