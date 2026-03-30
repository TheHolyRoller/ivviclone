import React from 'react'
import img from '../../public/images/featureBlockIMG.webp'; 
import Link from 'next/link';
import Image from 'next/image';
import laptop from '../../public/images/lp.png'; 
// import girl from '../../public/images/girl_study.png';
import woman from '../../public/images/featureBlockIMG.webp'; 


import it from '../Styles/Eligible.module.css'; 

function Eligible() {
  return (  


    <section className={it.featureMainContainer}>
      
        {/* <h2 className={it.mainHeading}>

        Who is the Disabled Students' Allowance for?

        </h2> */}
      <div className={it.gridContainer}>
        

  

      {/* Add in the text container here */}
      <div className={it.textContainer}>
    
        <div className={it.secondaryHeading}>

        {/* The DSA grant is available for students with: */}
        You are eligible for DSA with dyslexia if you:


        </div>

        <div className={it.bulletPointListContainer}>


<ul className={it.bulletPointList}>

<li className={it.bulletPointListItem}>

    

    {/* Lectures can be overwhelming */}
    {/* Specific Learning Difficulties such as Dyslexia, Dysgraphia, Dyscalculia, ADHD, and autism */}
    Have a dyslexia diagnosis from school or as an adult




</li>

<li className={it.bulletPointListItem}>
{/* Physical disabilities */}
Are studying full or half-time for at least one year

</li>
<li className={it.bulletPointListItem}>

{/* Mental health conditions (e.g., anxiety, depression) */}
Are an undergraduate or postgraduate student studying in the UK

</li>

<li className={it.bulletPointListItem}>



{/* Visual notes are recommended but they're hard to create during lectures */}
{/* Mental health conditions (e.g., anxiety, depression) */}
{/* Long-term health conditions (e.g., cancer, heart disease) */}
Qualify for student finance

</li>

</ul>

</div>


        <p className={it.supportingText}>
        {/* This guide will help you get the grant you need for dyslexia at university or college. You can also use the same principles to apply for other assistance. */}
        Sending a PDF of your original diagnosis is enough to be eligible for DSA. A childhood diagnosis report is sufficient. Your report has no time limit on when it was done.

        </p>

        <p className={it.supportingText}>
        {/* This guide will help you get the grant you need for dyslexia at university or college. You can also use the same principles to apply for other assistance. */}
        {/* Sending a PDF of your original diagnosis is enough to be eligible for DSA. A childhood diagnosis report is sufficient. Your report has no time limit on when it was done. */}
        For physical or mental conditions you will need your GP to fill in the GP DSA Evidence Form.        

        </p>




      </div>

      <div className={it.imageContainer}>

<Image className={it.mainImage}  src={woman} alt='woman' quality={100} loading='lazy' />


</div>
      </div>
      
    </section>
  )
}

export default Eligible