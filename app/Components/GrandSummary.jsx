import React from 'react'; 
import ti from '../Styles/GrantSummary.module.css'; 
import Link from 'next/link';
import Image from 'next/image';
import img from '../../public/images/lady.webp'; 
 import girl from '../../public/images/girl_headphones.png'; 



function GrantSummary() {
  return (
    <section className={ti.featureMainContainer}>
    
      {/* Add in the grid container here  */}
      <div className={ti.gridContainer}>

      {/* Add in the image container here */}
    

      {/* Add in the text container here */}
      <div className={ti.textContainer}>

        {/* <h2 className={ti.mainHeading}>

        Ready to Transform Your Learning? 

        </h2> */}
        
        

        <div className={ti.supportingHeadlineContainer}>

        <div className={ti.supportingHeadline}>

        Grant Summary: 


        </div>

        </div>

      <div className={ti.bulletPointListContainer}>

          <p>If you are a university or college student studying full-time or half-time with a formal dyslexia report and eligible for student finance, you will get a DSA grant. The grant amount is tailored to your individual needs and is provided to help cover dyslexia-related study costs.</p>


      </div>
      </div>

      <div className={ti.imageContainer}>

        {/* <Image className={ti.mainImage}  src={img} alt='woman' quality={100} loading='lazy' /> */}
        <Image className={ti.mainImage} src={girl} alt="woman" quality={100} loading='lazy'/> 



      </div>



      </div>
    </section>
  )
}

export default GrantSummary; 