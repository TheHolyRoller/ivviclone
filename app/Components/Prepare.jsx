import React from 'react'
import img from '../../public/images/featureBlockIMG.webp'; 
import Link from 'next/link';
import Image from 'next/image';
import laptop from '../../public/images/lp.png'; 
// import girl from '../../public/images/girl_study.png';
import woman from '../../public/images/featureBlockIMG.webp'; 
import zoom from '../../public/images/mic.png'; 


import it from '../Styles/Prepare.module.css'; 

function Prepare() {
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
        {/* You are eligible for DSA with dyslexia if you: */}
        To help you prepare, think about these questions:



        </div>

        <div className={it.bulletPointListContainer}>


<ul className={it.bulletPointList}>

<li className={it.bulletPointListItem}>

    

    {/* Lectures can be overwhelming */}
    {/* Specific Learning Difficulties such as Dyslexia, Dysgraphia, Dyscalculia, ADHD, and autism */}
    {/* Have a dyslexia diagnosis from school or as an adult */}
    How does dyslexia affect you in daily life?




</li>

<li className={it.bulletPointListItem}>
{/* Physical disabilities */}
{/* Are studying full or half-time for at least one year */}
Do you find it hard to take notes in lectures?

</li>
<li className={it.bulletPointListItem}>

How do you write essays, reports, or prepare for presentations?


</li>

<li className={it.bulletPointListItem}>

Is time management or staying organized a challenge?

</li>

<li className={it.bulletPointListItem}>

{/* Is time management or staying organized a challenge? */}
What has helped you succeed in the past?

</li>


<li className={it.bulletPointListItem}>

{/* Is time management or staying organized a challenge? */}
Are there any softwares that you already know about that could really help you?

</li>

</ul>

</div>







      </div>

      <div className={it.imageContainer}>

<Image className={it.mainImage}  src={zoom} alt='woman' quality={100} loading='lazy' />


</div>
      </div>
      
    </section>
  )
}

export default Prepare