import React from 'react'
import h from '../Styles/DSAHero.module.css'; 
import laptop from '../../public/images/laptop.webp'; 

import Image from 'next/image';
import Link from 'next/link';
import hero from '../../public/images/secondary_hero_img.png'; 
// import hero from '../../public/images/a_hero.png'; 

import HeroBackground from '../../public/images/HeroBackground.png'; 


function DSAHero() {


    return (

    <main className={h.hero}>
    <Image className={h.heroBackgroundImage} src={HeroBackground} alt="background"    /> 

    <section className={h.heroContentContainer} >

    <div className={h.heroTextContainer}>

        <div className={h.DSASubHeading}>

          {/* DSA Approved */}
          A Guide to the 

        </div>

        <h1 className={h.heroMainHeader}>

        Disabled Students' Allowance 

        <span style={{marginLeft: '6px', display: 'block', fontSize: '48px' }} >

          for Dyslexia 

        </span>

        </h1>

        <article  className={h.heroSupportingText}>

          {/* transforms lectures into mind maps as you listen, helping you learn faster and graduate successfully. */}
          {/* Transform lectures into mind maps as you listen, learn faster, and remember longer! */}
          This guide is here to help parents and students understand and get the Disabled Students’ Allowance (DSA). We've gathered all the key resources into this easy-to-use guide. 
        </article>


        {/* <button className={h.heroCTAButton}>
          <Link className={h.heroCTALink}  href='/ivvi' alt='ivvi'>

            Try ivvi Notes now 

          </Link>

        </button> */}

    </div>

    </section>
    </main>
)
}

export default DSAHero