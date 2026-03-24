import React from 'react'
// import img from '../../public/images/featureBlockIMG.webp'; 
import img from '../../public/images/outline.png'; 

import Link from 'next/link';
import Image from 'next/image';

import it from '../Styles/Outline.module.css'; 


function Outline() {
  return (  


    <section className={it.featureMainContainer}>
      <div className={it.gridContainer}>

      <div className={it.imageContainer}>

        <Image className={it.mainImage}  src={img} alt='woman' quality={100} loading='lazy' />

      </div>

      {/* Add in the text container here */}
      <div className={it.textContainer}>

        <h2 className={it.mainHeading}>

        Outline Visually

        </h2>

        <p className={it.supportingText}>

        {/* Take control of your notes with full editing capabilities. Customize your mind map by adding, changing, or removing keywords and icons. Enhance your notes by incorporating files, links, and images from presentations, making your notes a comprehensive resource. */}
        Experience seamless integration between your mind map and a structured text outline. This mode presents your transcription as a well-organized outline, incorporating all keywords and images from the mind map. The interconnectivity between the outline and mind map allows for flexible navigation and comprehensive understanding of your notes.
        


        </p>
     
      </div>
      </div>
    </section>
  )
}

export default Outline