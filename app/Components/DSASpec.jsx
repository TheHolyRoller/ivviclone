import React from 'react'
import v from '../Styles/DSASpec.module.css'; 
import Link from 'next/link';
import Image from 'next/image';
import background from '../../public/images/videoBackground.jpg'; 

import group from '../../public/images/dsa group.png'; 


function DSASpec() {
  return (

    <section className={v.hero}>

    <section className={v.heroContentContainer} >

    <div className={v.heroTextContainer}>

      
      <div className={v.headerContainer}>

        <h1 className={v.heroMainHeader}>

        What is the Disabled Students' Allowance?
        

        </h1>

      </div>


    </div>

    <div className={v.heroLaptopImageContainer}>

      <Image src={group} alt="group" className={v.dsaImage} /> 
    </div>

    <div className={v.CTASupportingTextContainer}>

      <p className={v.pargraph}>
      The Disabled Students’ Allowance (DSA) is a grant to help cover any disability-related costs for your studies, including those related to dyslexia. It covers support and equipment to help you succeed at university or college.


      </p>
      <p className={v.pargraph}>
      {/* The Disabled Students’ Allowance (DSA) is a grant to help cover any disability-related costs for your studies, including those related to dyslexia. It covers support and equipment to help you succeed at university or college. */}
      The grant is based on your individual needs and not your household income, it’s not means tested and it doesn’t need to be paid back. 


      </p>

      <div className={v.headline}>

      It's for everyone with dyslexia. 

      </div>

      <p className={v.pargraph}>
      {/* The Disabled Students’ Allowance (DSA) is a grant to help cover any disability-related costs for your studies, including those related to dyslexia. It covers support and equipment to help you succeed at university or college. */}
      {/* The grant is based on your individual needs and not your household income, it’s not means tested and it doesn’t need to be paid back.  */}
      The DSA is available to all students with dyslexia, no matter how it affects them. It provides the tools and support needed to help you succeed.


      </p>
       


    </div>

    </section>
    </section>


)
}

export default DSASpec