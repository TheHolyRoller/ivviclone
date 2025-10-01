import React from 'react'
import img from '../../public/images/featureBlockIMG.webp'; 
import Link from 'next/link';
import Image from 'next/image';

import it from '../Styles/ImageText.module.css'; 

function ImageText() {
  return (  
    <section className={it.featureMainContainer}>
    
      {/* Add in the grid container here  */}
      <div className={it.gridContainer}>

      {/* Add in the image container here */}
      <div className={it.imageContainer}>

        <Image className={it.mainImage}  src={img} alt='woman' quality={100} loading='lazy' />

      </div>

      {/* Add in the text container here */}
      <div className={it.textContainer}>

        <h2 className={it.mainHeading}>

        Neurodiverse Executive Functions

        </h2>

        <p className={it.supportingText}>
        Over 10% of students have dyslexia or ADHD, making traditional note-taking a challenge. Whether you're neurodiverse or simply a visual learner,
        <span className={it.ivviSpan}  style={{fontWeight: '600'}} >
        ivvi

        </span> 
         converts lectures into visual notes, enabling you to learn more efficiently and achieve academic success.

        </p>

        {/* Add in the bullet point list here  */}

      <div className={it.bulletPointListContainer}>


        <ul className={it.bulletPointList}>

        <li className={it.bulletPointListItem}>

            

            Lectures can be overwhelming




        </li>

        <li className={it.bulletPointListItem}>

            



        Taking traditional notes is slow




        </li>
        <li className={it.bulletPointListItem}>



        Visual notes are recommended but they're hard to create during lectures




        </li>
        </ul>

      </div>
      </div>
      </div>
    </section>
  )
}

export default ImageText