import React from 'react'
// import img from '../../public/images/featureBlockIMG.webp'; 
import img from '../../public/images/full_transcript.png'; 

import Link from 'next/link';
import Image from 'next/image';

import it from '../Styles/TextImageVideo.module.css'; 

function TextImageVideo() {
  return (  


    <section className={it.featureMainContainer}>
      <div className={it.gridContainer}>

      <div className={it.imageContainer}>

        <Image className={it.mainImage}  src={img} alt='woman' quality={100} loading='lazy' />

      </div>

      {/* Add in the text container here */}
      <div className={it.textContainer}>

        <h2 className={it.mainHeading}>

        {/* Neurodiverse Executive Functions */}
        Full Transcript

        </h2>

        <p className={it.supportingText}>

        Every word spoken is accurately transcribed and stored in 
        
        <div className={it.ivvi}>

        ivvi Note's 
        
        </div>
        
        outline mode. This feature allows you to quickly locate specific quotes or information within your notes, making review and reference incredibly efficient.


        </p>
     
      </div>
      </div>
    </section>
  )
}

export default TextImageVideo