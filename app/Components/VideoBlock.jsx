import React from 'react'
import v from '../Styles/VideoBlock.module.css'; 
import Link from 'next/link';
import Image from 'next/image';
import background from '../../public/images/videoBackground.jpg'; 


function VideoBlock() {
  return (

    <section className={v.hero}>


    <section className={v.heroContentContainer} >

    <div className={v.heroTextContainer}>

      

        <h1 className={v.heroMainHeader}>
        <span>

        Introducing ivvi Notes
        </span>


        

        </h1>

        <p  className={v.heroSupportingText}>

          We understand these challenges, so we built ivvi Notes for you with our revolutionary Speech-to-Map™ technology. As you  listen, ivvi Notes transcribes the lecture and transforms it into a visual mind map with keywords and images. ivvi Notes is the ultimate solution for visual thinkers.
        </p>

        <button className={v.heroCTAButton}>
          <Link className={v.heroCTALink}  href='/ivvi' alt='ivvi'>

            Try ivvi Notes now 

          </Link>

        </button>

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
    </section>
    </section>


)
}

export default VideoBlock