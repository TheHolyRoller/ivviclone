import React from 'react'
import h from '../Styles/AssessHero.module.css'; 
import HeroBackground from '../../public/images/HeroBackground.png'; 
import laptop from '../../public/images/laptop.webp'; 

import Image from 'next/image';
import Link from 'next/link';
import hero from '../../public/images/assess.png'; 
// import hero from '../../public/images/a_hero.png'; 
import awards from '../../public/images/bett.png';



function AssessHero() {


    return (

    <main className={h.hero}>
    <Image className={h.heroBackgroundImage} src={hero} alt="background"    /> 

    <section className={h.heroContentContainer} >

    <div className={h.heroTextContainer}>

        <div className={h.DSASubHeadingContainer}>
        <div className={h.DSASubHeading}>


          DSA Approved
        </div>

        </div>

        <h1 className={h.heroMainHeader}>

        <Image className={h.awards} src={awards} alt="bett award sticker"/>

        ivvi Notes- Instant Visual
Note-Taking Assistive Technology

        <span className={h.mobileHeader} >

          Notes for

          Students


        </span>

        </h1>

        <article  className={h.heroSupportingText}>

        <div className={h.ivvi}>


            
          ivvi Notes™ 
          
        </div>
          
          is an innovative online note-taking tool designed to support neurodiverse students by instantly transforming information gathered during taught sessions into dynamic visual notes!
        </article>


        <button className={h.heroCTAButton}>
          <Link className={h.heroCTALink}  href='/ivvi' alt='ivvi'>

            Get Demo License 


          </Link>

        </button>

    </div>

    </section>
    </main>
)
}

export default AssessHero