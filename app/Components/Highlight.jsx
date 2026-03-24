import React from 'react'
// import img from '../../public/images/featureBlockIMG.webp'; 
import img from '../../public/images/high.png'; 

import Link from 'next/link';
import Image from 'next/image';

import it from '../Styles/Highlight.module.css'; 


function Highlight() {
  return (  


    <section className={it.featureMainContainer}>
      <div className={it.gridContainer}>

   

      {/* Add in the text container here */}
      <div className={it.textContainer}>

        <h2 className={it.mainHeading}>

        {/* Neurodiverse Executive Functions */}
        {/* Full Transcript */}
        {/* Audio recording */}
        Highlight Quotes

        </h2>

        <p className={it.supportingText}>

        {/* Capture every word of your lectures or meetings with high-quality audio recording. This feature provides a reliable backup, allowing you to revisit any part of the session at any time, ensuring you never miss crucial information. */}
        Never miss an important point again. With a simple tap, you can highlight crucial quotes or information in real-time as you're listening. This feature ensures that key points stand out for easy reference later.

        </p>
     
      </div>

      <div className={it.imageContainer}>

<Image className={it.mainImage}  src={img} alt='woman' quality={100} loading='lazy' />

</div>


      </div>
    </section>
  )
}

export default Highlight