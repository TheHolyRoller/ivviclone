import React from 'react'; 
import ti from '../Styles/FreeTrial.module.css'; 
import Link from 'next/link';
import Image from 'next/image';
import img from '../../public/images/lady.webp'; 



function FreeTrial() {
  return (
    <section className={ti.featureMainContainer}>
    
      {/* Add in the grid container here  */}
      <div className={ti.gridContainer}>

      {/* Add in the image container here */}
    

      {/* Add in the text container here */}
      <div className={ti.textContainer}>

        <h2 className={ti.mainHeading}>

        {/* Neurodiverse Executive Functions */}
        Ready to Transform Your Learning?

        </h2>
        
        

        <div className={ti.supportingHeadlineContainer}>

        <div className={ti.supportingHeadline}>

        Free 30-day full trial.

        </div>

        </div>

      <div className={ti.bulletPointListContainer}>


        <ul className={ti.bulletPointList}>

        <li className={ti.bulletPointListItem}>

            

        No Commitment




        </li>

        <li className={ti.bulletPointListItem}>

        No Credit Card



        </li>

        <li className={ti.bulletPointListItem}>

                No Catch 



                </li>




        <li className={ti.bulletPointListItem}>

            

        No Subscription



        </li>


        <li className={ti.bulletPointListItem}>

        DSA Approved



        </li>

        <li className={ti.bulletPointListItem}>

            

        Keep Lifetime Access to Your Maps



        </li>


        </ul>

        <Link className={ti.ctaLink}  href='ivvi.dev' >

        <button className={ti.cta}>

          Try ivvi Notes Now 
        </button>


        </Link>


      </div>
      </div>

      <div className={ti.imageContainer}>

        <Image className={ti.mainImage}  src={img} alt='woman' quality={100} loading='lazy' />

      </div>



      </div>
    </section>
  )
}

export default FreeTrial; 