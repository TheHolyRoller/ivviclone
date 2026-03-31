import React from 'react'
import h from '../Styles/AccessHero.module.css'; 
import laptop from '../../public/images/laptop.webp'; 

import Image from 'next/image';
import HeroBackground from '../../public/images/HeroBackground.png'; 
import lamp from '../../public/images/lamp.png'; 
import access from '../../public/images/access.jpeg'; 



function AccessHero() {

    return (

    <main className={h.hero}>
      
    <div className={h.imageOverlay}>
      
    </div>
    <Image className={h.heroBackgroundImage} src={access} alt="background"    /> 

    <section className={h.heroContentContainer} >

    <div className={h.heroTextContainer}>

        

        <h1 className={h.heroMainHeader}>

        ivvi for Work

      

        </h1>


    </div>

    </section>
    </main>
)
}

export default AccessHero