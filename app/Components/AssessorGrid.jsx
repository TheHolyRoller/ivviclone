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
// import Justification from './Justification';
import AssessorJustification from '../Components/AssessorJustification'; 




function AssessorGrid() {
  return (

    <>


    {/* TODO put this in the stylesheet and make it responsive  */}
    <section className={g.featureGridContainer} style={{position: 'relative', paddingTop: '15rem'}} >
    <div style={{position: 'absolute', top: '0', }} >
    
      <AssessorJustification/> 
      
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
              <div className={g.ivvi}>
                ivvi 

              </div>

              can be used to instantly capture information visually, ensuring students do not miss important details.
            {/* Capture every important detail instantly */}

            </p>
        </div>
        <div className={g.gridItem}>
            <Image className={g.gridImg} src={icon2} alt="sync" quality={100} loading='lazy'/> 
            <h4 className={g.gridHeadline}>


            {/* Real-time note-taking */}
            {/* Multi-style learning */}
            Combined learning styles
            </h4>
            <p className={g.gridSupportingText}>

            <div className={g.ivvi}>
                ivvi 

              </div>
              
                {/* View a real-time mind map that captures everything being said. */}
                {/* Combine audio, visual, and text notes */}
                allows for a combination of audio, visual, and written notes, catering to multimodal learners.

            </p>
        </div>
        <div className={g.gridItem} id={g.thirdItem} >
            <Image className={g.gridImg} src={icon3} alt="sync" quality={100} loading='lazy'/> 
            
            <h4 className={g.gridHeadline}>

            {/* Real-time note-taking */}
            {/* Highlight key info */}
            Identify key information
            </h4>
            <p className={g.gridSupportingText}>

            <div className={g.ivvi}>
                ivvi's

              </div>
              
                  {/* Say goodbye to the time-consuming task of re-listening to lectures and typing up notes after class. */}
                  {/* Use tagging and mind mapping for quick review */}
                  visual tagging and mind mapping allow for quick and easy reference, saving valuable study time.

            </p>
        </div>
        <div className={g.gridItem}>
            <Image className={g.gridImg} src={icon4} alt="sync" quality={100} loading='lazy'/> 

            <h4 className={g.gridHeadline}>

            {/* Real-time note-taking */}
            {/* All-in-one resource */}
            Seamless integration
            </h4>
            <p className={g.gridSupportingText}>

            <div className={g.ivvi}>
                ivvi 

              </div>
              
                  {/* Your notes are complete when you leave the lecture. */}
                  {/* Integrate slides and images with your notes */}
                  allows students to integrate slides, images, and other materials with their notes, providing a comprehensive study resource.

            </p>
        </div>

        <div className={g.gridItem}>
            <Image className={g.gridImg} src={icon4} alt="sync" quality={100} loading='lazy'/> 
            <h4 className={g.gridHeadline}>

            {/* Real-time note-taking */}
            {/* Study anywhere */}
            Flexible learning

            </h4>

            <p className={g.gridSupportingText}>

            <div className={g.ivvi}>
                ivvi 

              </div>
              
                  {/* Your notes are complete when you leave the lecture. */}
                  {/* Access your notes on any device, anytime */}
                  can be accessed across any device or browser, anytime and anywhere, maximizing students' access to their notes.

            </p>
        </div>


        <div className={g.gridItem}>
            <Image className={g.gridImg} src={icon4} alt="sync" quality={100} loading='lazy'/> 
            
            <h4 className={g.gridHeadline}>

            {/* Real-time note-taking */}
            {/* Designed for you */}
            Note-taking support for all

            
            </h4>

            <p className={g.gridSupportingText}>

            <div className={g.ivvi}>
                ivvi 

              </div>
              
                  {/* Your notes are complete when you leave the lecture. */}
                  {/* Accommodate SpLD, Dyslexia, ADHD, ASD, and more */}
                  is designed to support neurodiverse students who experience executive functioning and working memory difficulties.
                    (E.g. SpLD, ADHD, ASD)

            </p>
        </div>
      </section>
    </section>
    </>

  )
}

export default AssessorGrid