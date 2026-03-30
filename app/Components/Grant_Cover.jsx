import React from 'react'
import v from '../Styles/GrantCover.module.css'; 
import Link from 'next/link';
import Image from 'next/image';
import background from '../../public/images/videoBackground.jpg'; 
import help from '../../public/images/help.png'; 

import group from '../../public/images/dsa group.png'; 


function GrantCover() {
  return (

    <section className={v.hero}>

    <section className={v.heroContentContainer} >

    <div className={v.heroTextContainer}>

      
      <div className={v.headerContainer}>

        <h1 className={v.heroMainHeader}>

        {/* What is the Disabled Students' Allowance? */}
        What does the DSA grant cover?
        

        </h1>

      </div>


    </div>

    <div className={v.heroLaptopImageContainer}>

      <Image src={help} alt="group" className={v.dsaImage} /> 
    </div>

    <div className={v.CTASupportingTextContainer}>

      <p className={v.pargraph}>
      Depending on your personal needs, the grant may cover a range of useful items and services:


      </p>


    <ul className={v.list}>


    <li className={v.item}>
      
    
    <strong style={{marginRight: '6px'}}>

    Assistive Software:

    </strong>
     Mind-mapping, text-to-speech, and other programs. 
      
      
       </li>
       <li className={v.item}>
      
    
      <strong style={{marginRight: '6px'}}>
  
      {/* Assistive Software: */}
      Hardware:
  
      </strong>
       {/* Mind-mapping, text-to-speech, and other programs.  */}
       Laptops, printers, and other necessary equipment.
        
        
         </li>
         <li className={v.item}>
      
    
    <strong style={{marginRight: '6px'}}>

    Study Skills Tutoring:

    </strong>
     {/* Mind-mapping, text-to-speech, and other programs.  */}
     One-on-one sessions tailored to help with writing essays, preparing for exams, and managing time.  

      
      
       </li>
       <li className={v.item}>
      
    
    <strong style={{marginRight: '6px'}}>

    Other Costs:

    </strong>


     {/* Mind-mapping, text-to-speech, and other programs.  */}
     Printing, photocopying, and training for new software.
      
      
       </li>

    </ul>



      <p className={v.pargraph}>
      {/* The grant is based on your individual needs and not your household income, it’s not means tested and it doesn’t need to be paid back.  */}
      These resources mean you’ll have the equipment and support you need to make your degree work for you and your way of thinking. For many students, this support is crucial for their success.


      </p>

     

      <p className={v.pargraph}>
      {/* The Disabled Students’ Allowance (DSA) is a grant to help cover any disability-related costs for your studies, including those related to dyslexia. It covers support and equipment to help you succeed at university or college. */}
      {/* The grant is based on your individual needs and not your household income, it’s not means tested and it doesn’t need to be paid back.  */}
      {/* The DSA is available to all students with dyslexia, no matter how it affects them. It provides the tools and support needed to help you succeed. */}
      The exact details of what you are awarded through the grant will be decided at your Needs Assessment during the application process.


      </p>
       


    </div>

    </section>
    </section>


)
}

export default GrantCover