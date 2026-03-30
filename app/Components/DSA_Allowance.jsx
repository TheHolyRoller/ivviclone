import React from 'react'
import img from '../../public/images/featureBlockIMG.webp'; 
import Link from 'next/link';
import Image from 'next/image';
import laptop from '../../public/images/lp.png'; 

import it from '../Styles/DSA_Allowance.module.css'; 

function DSA_Allowance() {
  return (  


    <section className={it.featureMainContainer}>
      
        <h2 className={it.mainHeading}>

        {/* Neurodiverse Executive Functions */}
        Who is the Disabled Students' Allowance for?

        </h2>
      <div className={it.gridContainer}>
        

      <div className={it.imageContainer}>

        <Image className={it.mainImage}  src={laptop} alt='woman' quality={100} loading='lazy' />


      </div>

      {/* Add in the text container here */}
      <div className={it.textContainer}>
    
        <div className={it.secondaryHeading}>

        The DSA grant is available for students with:


        </div>

        <div className={it.bulletPointListContainer}>


<ul className={it.bulletPointList}>

<li className={it.bulletPointListItem}>

    

    {/* Lectures can be overwhelming */}
    Specific Learning Difficulties such as Dyslexia, Dysgraphia, Dyscalculia, ADHD, and autism




</li>

<li className={it.bulletPointListItem}>
Physical disabilities

</li>
<li className={it.bulletPointListItem}>

Mental health conditions (e.g., anxiety, depression)

</li>

<li className={it.bulletPointListItem}>



{/* Visual notes are recommended but they're hard to create during lectures */}
{/* Mental health conditions (e.g., anxiety, depression) */}
Long-term health conditions (e.g., cancer, heart disease)

</li>

</ul>

</div>


        <p className={it.supportingText}>
        This guide will help you get the grant you need for dyslexia at university or college. You can also use the same principles to apply for other assistance.

        </p>

      </div>
      </div>
    </section>
  )
}

export default DSA_Allowance