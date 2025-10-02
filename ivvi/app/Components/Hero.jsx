import React from 'react'
import h from '../Styles/Hero.module.css'; 
import HeroBackground from '../../public/images/HeroBackground.png'; 
import laptop from '../../public/images/laptop.webp'; 


import Image from 'next/image';
import Link from 'next/link';


function Hero() {



  return (

    <main className={h.hero}>
    <Image className={h.heroBackgroundImage} src={HeroBackground} alt="background" width={100} height={100} quality={100} loading='lazy'/> 

    <section className={h.heroContentContainer} >

    <div className={h.heroTextContainer}>

        <div className={h.DSASubHeading}>

          DSA Approved
        </div>

        <h1 className={h.heroMainHeader}>
        <span>

        Instant Visual
        </span>


        <span style={{display: 'block'}} >

        Notes for
        </span>

        <span>

         Students
        </span>

        </h1>

        <article  className={h.heroSupportingText}>

          <div className={h.heroCompTitle}>

          ivvi Notes

            <span className={h.compTitleType}>
            ™
            </span>
          </div>

          transforms lectures into mind maps as you listen, helping you learn faster and graduate successfully.
        </article>

        <button className={h.heroCTAButton}>
          <Link className={h.heroCTALink}  href='/ivvi' alt='ivvi'>

            Try ivvi Notes now 

          </Link>

        </button>

    </div>

    <div className={h.heroLaptopImageContainer}>


      <Image className={h.heroLaptopImg}  src={laptop} alt='laptop'  quality={100} loading="lazy"/> 


    </div>
    </section>
    </main>
)
}

export default Hero