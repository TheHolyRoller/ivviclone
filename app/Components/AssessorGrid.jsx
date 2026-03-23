import React from 'react'
import g from '../Styles/AssessorGrid.module.css'; 

import icon1 from '../../public/icons/gridIcon1.webp'; 
import icon2 from '../../public/icons/gridIcon2.webp'; 
import icon3 from '../../public/icons/gridIcon3.webp'
import icon4 from '../../public/icons/gridIcon4.webp'

import Image from 'next/image';
import Link from 'next/link';

import focus from '../../public/images/focus.png'; 
import person from '../../public/images/person.webp'; 
import spike from '../../public/images/round_spike.png'; 
import angle from '../../public/images/angle.webp'
import car from '../../public/images/car.png'; 
import audience from '../../public/images/audience.png'; 
import hug from '../../public/images/hug.png'; 
import Justification from './Justification';



function AssessorGrid() {
  return (

    <>


    {/* TODO put this in the stylesheet and make it responsive  */}
    <section className={g.featureGridContainer} style={{position: 'relative', paddingTop: '15rem'}} >
    <div style={{position: 'absolute', top: '0', }} >
    
      <Justification/> 
      
      </div>
      
      <div className={g.headlineContainer}>

      {/* ivvi Notes Benefits in Lectures */}


      </div>

      <section className={g.featureGrid}>
        <div className={g.gridItem}>
            <Image className={g.gridImg} src={icon1} alt="sync" quality={100} loading='lazy'/> 

            <h4 className={g.gridHeadline}>

            Real-time note-taking
            </h4>
            <p className={g.gridSupportingText}>
            Capture every important detail instantly
            </p>
        </div>
        <div className={g.gridItem}>
            <Image className={g.gridImg} src={icon2} alt="sync" quality={100} loading='lazy'/> 
            <h4 className={g.gridHeadline}>

            {/* Real-time note-taking */}
            Multi-style learning
            </h4>
            <p className={g.gridSupportingText}>
              
                {/* View a real-time mind map that captures everything being said. */}
                Combine audio, visual, and text notes

            </p>
        </div>
        <div className={g.gridItem} id={g.thirdItem} >
            <Image className={g.gridImg} src={icon3} alt="sync" quality={100} loading='lazy'/> 
            
            <h4 className={g.gridHeadline}>

            {/* Real-time note-taking */}
            Highlight key info
            </h4>
            <p className={g.gridSupportingText}>
              
                  {/* Say goodbye to the time-consuming task of re-listening to lectures and typing up notes after class. */}
                  Use tagging and mind mapping for quick review

            </p>
        </div>
        <div className={g.gridItem}>
            <Image className={g.gridImg} src={icon4} alt="sync" quality={100} loading='lazy'/> 

            <h4 className={g.gridHeadline}>

            {/* Real-time note-taking */}
            All-in-one resource
            </h4>
            <p className={g.gridSupportingText}>
              
                  {/* Your notes are complete when you leave the lecture. */}
                  Integrate slides and images with your notes

            </p>
        </div>

        <div className={g.gridItem}>
            <Image className={g.gridImg} src={icon4} alt="sync" quality={100} loading='lazy'/> 
            <h4 className={g.gridHeadline}>

            {/* Real-time note-taking */}
            Study anywhere

            </h4>

            <p className={g.gridSupportingText}>
              
                  {/* Your notes are complete when you leave the lecture. */}
                  Access your notes on any device, anytime

            </p>
        </div>


        <div className={g.gridItem}>
            <Image className={g.gridImg} src={icon4} alt="sync" quality={100} loading='lazy'/> 
            
            <h4 className={g.gridHeadline}>

            {/* Real-time note-taking */}
            Designed for you

            
            </h4>

            <p className={g.gridSupportingText}>
              
                  {/* Your notes are complete when you leave the lecture. */}
                  Accommodate SpLD, Dyslexia, ADHD, ASD, and more

            </p>
        </div>
      </section>
    </section>
    </>

  )
}

export default AssessorGrid