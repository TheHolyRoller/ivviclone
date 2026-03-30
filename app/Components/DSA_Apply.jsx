import React from 'react'; 
import ti from '../Styles/DSA_Apply.module.css'; 
import Link from 'next/link';
import Image from 'next/image';
import img from '../../public/images/lady.webp'; 
import girl from '../../public/images/girl_headphones.png'; 
import think  from '../../public/images/think.png'; 


function DSA_Apply() {
  return (
    <section className={ti.featureMainContainer}>
    
      <div className={ti.gridContainer}>

      <div className={ti.textContainer}>

        <div className={ti.supportingHeadlineContainer}>

        <div className={ti.supportingHeadline}>

        {/* Grant Summary:  */}
        How do you apply for DSA?


        </div>

        </div>

      <div className={ti.bulletPointListContainer}>

          <p>
            {/* If you are a university or college student studying full-time or half-time with a formal dyslexia report and eligible for student finance, you will get a DSA grant. The grant amount is tailored to your individual needs and is provided to help cover dyslexia-related study costs. */}
            You can apply for DSA at the same time as your student finance application, or at any time during your course. It's recommended to apply as early as possible, ideally before you start university.
            
            
            </p>


      </div>
      </div>

      <div className={ti.imageContainer}>

        <Image className={ti.mainImage} src={think} alt="woman" quality={100} loading='lazy'/> 

      </div>


      </div>
    </section>
  )
}

export default DSA_Apply; 