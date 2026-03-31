import React from 'react'
import h from '../Styles/SupportHero.module.css'; 
import laptop from '../../public/images/laptop.webp'; 

import Image from 'next/image';
import HeroBackground from '../../public/images/HeroBackground.png'; 
import lamp from '../../public/images/lamp.png'; 



function SupportHero() {


    return (

    <main className={h.hero}>
    <Image className={h.heroBackgroundImage} src={lamp} alt="background"    /> 

    <section className={h.heroContentContainer} >

    <div className={h.heroTextContainer}>

        

        <h1 className={h.heroMainHeader}>

        {/* Disabled Students' Allowance  */}
        ivvi Customer Support

      

        </h1>

        <article  className={h.heroSupportingText}>

        We love to help.

        <p className={h.text}>

        Please Contact us below.

        </p>


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

export default SupportHero