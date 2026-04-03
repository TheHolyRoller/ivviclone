import React from 'react'
import h from '../Styles/SecondaryHero.module.css'; 
import HeroBackground from '../../public/images/HeroBackground.webp'; 
import laptop from '../../public/images/laptop.webp'; 

import Image from 'next/image';
import Link from 'next/link';
import hero from '../../public/images/secondary_hero_img.webp'; 



function SecondaryHero() {


    return (

    <main className={h.hero}>
    <Image
      className={h.heroBackgroundImage}
      src={hero}
      alt="Ivvi Notes secondary hero"
      fill
      sizes="100vw"
      loading="lazy"
    />

    <section className={h.heroContentContainer} >

      <div className={h.heroMainContainer}>

    <div className={h.heroTextContainer}>

        <div className={h.DSASubHeading}>

          DSA Approved

        </div>

        <h1 className={h.heroMainHeader}>


        ivvi Notes- Your Instant Visual
Note-Taking Superpower

        <span className={h.mobileHeader} >

          Notes for

          Students


        </span>

        </h1>

        <article  className={h.heroSupportingText}>

          {/* transforms lectures into mind maps as you listen, helping you learn faster and graduate successfully. */}
          Transform lectures into mind maps as you listen, learn faster, and remember longer!
        </article>


        <div className={h.buttonContainer}>

        <button className={h.heroCTAButton}>
          <Link className={h.heroCTALink}  href='/ivvi' alt='ivvi'>

            Try ivvi Notes now 

          </Link>

        </button>
        </div>

    </div>


    {/* Add in the main container here  */}
    </div>







    </section>
    </main>
)
}

export default SecondaryHero