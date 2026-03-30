import React from 'react'; 
import ti from '../Styles/Award.module.css'; 
import Link from 'next/link';
import Image from 'next/image';
import img from '../../public/images/lady.webp'; 
 import girl from '../../public/images/girl_headphones.png'; 
import boy from '../../public/images/BOY laptop.png'; 


function Award() {
  return (
    <section className={ti.featureMainContainer}>
    
      {/* Add in the grid container here  */}
      <div className={ti.gridContainer}>


      {/* Add in the text container here */}
      <div className={ti.textContainer}>

        {/* <h2 className={ti.mainHeading}>

        Ready to Transform Your Learning? 

        </h2> */}
        
        

        <div className={ti.supportingHeadlineContainer}>

        <div className={ti.supportingHeadline}>

        {/* Grant Summary:  */}
        The Award


        </div>

        </div>

      <div className={ti.bulletPointListContainer}>

          <p className={ti.paragraph} >
            {/* If you are a university or college student studying full-time or half-time with a formal dyslexia report and eligible for student finance, you will get a DSA grant. The grant amount is tailored to your individual needs and is provided to help cover dyslexia-related study costs. */}
            This is not a pass/fail grant so you can be confident that you will get the right support following your needs assessment.
            
            
            </p>

            <p className={ti.paragraph}>
            {/* If you are a university or college student studying full-time or half-time with a formal dyslexia report and eligible for student finance, you will get a DSA grant. The grant amount is tailored to your individual needs and is provided to help cover dyslexia-related study costs. */}
            {/* This is not a pass/fail grant so you can be confident that you will get the right support following your needs assessment. */}
            Your award letter will list everything the needs assessor has approved you for. It will also explain how your supplier will deliver the equipment, software, and support to you.
            
            
            
            </p>

      </div>
      </div>

      <div className={ti.imageContainer}>

        {/* <Image className={ti.mainImage}  src={img} alt='woman' quality={100} loading='lazy' /> */}
        <Image className={ti.mainImage} src={boy} alt="woman" quality={100} loading='lazy'/> 



      </div>



      </div>
    </section>
  )
}

export default Award