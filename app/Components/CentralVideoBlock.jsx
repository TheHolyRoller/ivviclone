import React from 'react'
import v from '../Styles/CentralVideoBlock.module.css'; 
import Link from 'next/link';
import Image from 'next/image';
import background from '../../public/images/videoBackground.jpg'; 


function CentralVideoBlock() {
  return (

    <section className={v.hero}>

    <section className={v.heroContentContainer} >

    <div className={v.heroTextContainer}>

      
      <div className={v.headerContainer}>

        <h1 className={v.heroMainHeader}>

        {/* Introducing ivvi Notes */}
        ivvi Notes in Action

        </h1>

      </div>


    </div>

    <div className={v.heroLaptopImageContainer}>

    {/* TO DO Add in a white background here  */}
    <figure className={v.videoContainer}  style={{}}>

  <iframe

    className={v.mainVideoFrame}
    src="https://player.vimeo.com/video/1007634251?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
    
    allow="autoplay; fullscreen; picture-in-picture"
    allowFullScreen
    title="ivvi Demo Video 30s"
  />

  
</figure>


    </div>



    <div className={v.CTASupportingTextContainer}>

        <p className={v.CTAText}>

        Watch a 30 second video that shows what 
        <div className={v.ivvi} >

        ivvi
        </div>
        
         Notes can do for you.


        </p>



    </div>

      <div className={v.buttonContainer}>


    
        <button className={v.heroCTAButton}>
          <Link className={v.heroCTALink}  href='/ivvi' alt='ivvi'>

            Try ivvi Notes now 

          </Link>

        </button>

      </div>

    </section>
    </section>


)
}

export default CentralVideoBlock