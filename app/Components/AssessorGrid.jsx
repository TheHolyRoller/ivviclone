import React from 'react'
import g from '../Styles/FeatureGrid.module.css'; 

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


function AssessorGrid() {
  return (
    <section className={g.featureGridContainer}>
      
      <div className={g.headlineContainer}>

      ivvi Notes Benefits in Lectures

      </div>

      <section className={g.featureGrid}>
        <div className={g.gridItem}>
            <Image className={g.gridImg} src={icon1} alt="sync" quality={100} loading='lazy'/> 

            <p className={g.gridSupportingText}>
              Listen and learn, confident that everything is 
              safely captured, synced, and transcribed.
            </p>
        </div>
        <div className={g.gridItem}>
            <Image className={g.gridImg} src={icon2} alt="sync" quality={100} loading='lazy'/> 

            <p className={g.gridSupportingText}>
              
                View a real-time mind map that captures everything being said.

            </p>
        </div>
        <div className={g.gridItem} id={g.thirdItem} >
            <Image className={g.gridImg} src={icon3} alt="sync" quality={100} loading='lazy'/> 

            <p className={g.gridSupportingText}>
              
                  Say goodbye to the time-consuming task of re-listening to lectures and typing up notes after class.

            </p>
        </div>
        <div className={g.gridItem}>
            <Image className={g.gridImg} src={icon4} alt="sync" quality={100} loading='lazy'/> 

            <p className={g.gridSupportingText}>
              
                  Your notes are complete when you leave the lecture.

            </p>
        </div>
      </section>
    </section>
  )
}

export default AssessorGrid