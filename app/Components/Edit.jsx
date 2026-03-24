import React from 'react'
// import img from '../../public/images/featureBlockIMG.webp'; 
import img from '../../public/images/edit.png'; 

import Link from 'next/link';
import Image from 'next/image';

import it from '../Styles/Edit.module.css'; 


function Edit() {
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
        {/* Full Transcript */}
        Edit Freely

        </h2>

        <p className={it.supportingText}>

        Take control of your notes with full editing capabilities. Customize your mind map by adding, changing, or removing keywords and icons. Enhance your notes by incorporating files, links, and images from presentations, making your notes a comprehensive resource.


        </p>
     
      </div>
      </div>
    </section>
  )
}

export default Edit