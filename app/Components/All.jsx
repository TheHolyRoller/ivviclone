import React from 'react'
// import img from '../../public/images/featureBlockIMG.webp'; 
import img from '../../public/images/mind_map.png'; 

import Link from 'next/link';
import Image from 'next/image';

import it from '../Styles/All.module.css'; 


function All() {
  return (  


    <section className={it.featureMainContainer}>
      <div className={it.gridContainer}>

   

      {/* Add in the text container here */}
      <div className={it.textContainer}>

        <h2 className={it.mainHeading}>

        {/* Neurodiverse Executive Functions */}
        {/* Full Transcript */}
        {/* Live Mindmap  */}
        All in One App


        </h2>

        <p className={it.supportingText}>

        Everything happens with one click. The audio, transcript and map are synchronised with each other. It is a dream for visual thinkers to use! 
        <div className={it.extraSupportingText}>

        Watch a 3 Min Demo:


        </div>


        </p>
     
      </div>

      <div className={it.imageContainer}>

{/* <Image className={it.mainImage}  src={img} alt='woman' quality={100} loading='lazy' /> */}

<figure className={it.videoContainer}  style={{}}>

<iframe

  className={it.mainVideoFrame}
  src="https://player.vimeo.com/video/1007634251?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
  
  allow="autoplay; fullscreen; picture-in-picture"
  allowFullScreen
  title="ivvi Demo Video 30s"
/>


</figure>

</div>


      </div>
    </section>
  )
}

export default All