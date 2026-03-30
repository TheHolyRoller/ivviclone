import React from 'react'
// import img from '../../public/images/featureBlockIMG.webp'; 
import img from '../../public/images/mind_map.png'; 

import Link from 'next/link';
import Image from 'next/image';

import ts from '../Styles/TechSpecs.module.css'; 


function All() {
  return (  


    <section className={ts.featureMainContainer}>
      <div className={ts.gridContainer}>

   

      {/* Add in the text container here */}
      <div className={ts.textContainer}>

        <h2 className={ts.mainHeading}>

        {/* Neurodiverse Executive Functions */}
        {/* Full Transcript */}
        {/* Live Mindmap  */}
        All in One App


        </h2>

        <p className={ts.supportingText}>

        Everything happens with one click. The audio, transcript and map are synchronised with each other. It is a dream for visual thinkers to use! 
        <div className={ts.extraSupportingText}>

        Watch a 3 Min Demo:


        </div>


        </p>
     
      </div>

      <div className={ts.imageContainer}>

{/* <Image className={ts.mainImage}  src={img} alt='woman' quality={100} loading='lazy' /> */}

<figure className={ts.videoContainer}  style={{}}>

<iframe

  className={ts.mainVideoFrame}
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