import React from 'react'
// import img from '../../public/images/featureBlockIMG.webp'; 
import img from '../../public/images/audio_rec.png'; 

import Link from 'next/link';
import Image from 'next/image';

import it from '../Styles/ImageTextVideo.module.css'; 


function ImageTextVideo() {
  return (  


    <section className={it.featureMainContainer}>
      <div className={it.gridContainer}>

   

      {/* Add in the text container here */}
      <div className={it.textContainer}>

        <h2 className={it.mainHeading}>

        {/* Neurodiverse Executive Functions */}
        {/* Full Transcript */}
        Audio recording

        </h2>

        <p className={it.supportingText}>

        Capture every word of your lectures or meetings with high-quality audio recording. This feature provides a reliable backup, allowing you to revisit any part of the session at any time, ensuring you never miss crucial information.

        </p>
     
      </div>

      <div className={it.imageContainer}>

<Image className={it.mainImage}  src={img} alt='woman' quality={100} loading='lazy' />

</div>


      </div>
    </section>
  )
}

export default ImageTextVideo