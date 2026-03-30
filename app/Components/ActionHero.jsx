import React from 'react'
import h from '../Styles/SecondaryHero.module.css'; 
import HeroBackground from '../../public/images/HeroBackground.png'; 
import laptop from '../../public/images/laptop.webp'; 

import Image from 'next/image';
import Link from 'next/link';
import hero from '../../public/images/secondary_hero_img.png'; 
// import hero from '../../public/images/a_hero.png'; 
import action from '../../public/images/action.png'; 



function SecondaryHero() {


    return (

    <main className={h.hero}>
    <Image className={h.heroBackgroundImage} src={action} alt="background"    /> 

    <section className={h.heroContentContainer} >

    <div className={h.heroTextContainer}>

        {/* <div className={h.DSASubHeading}>

          DSA Approved

        </div> */}

        {/* <h1 className={h.heroMainHeader}>


        ivvi Notes- Your Instant Visual
Note-Taking Superpower

        <span className={h.mobileHeader} >

          Notes for

          Students


        </span>

        </h1> */}

        <h1  className={h.heroSupportingText}>

          {/* transforms lectures into mind maps as you listen, helping you learn faster and graduate successfully. */}
          Transform lectures into mind maps as you listen, learn faster, and remember longer!
        </h1>


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

export default SecondaryHero