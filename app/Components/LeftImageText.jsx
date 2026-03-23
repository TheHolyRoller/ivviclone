import React from 'react'; 
import ti from '../Styles/LeftImageText.module.css'; 
import Link from 'next/link';
import Image from 'next/image';
import img from '../../public/images/girl_study.png';   


function LeftImageText() {
  return (
    <section className={ti.featureMainContainer}>
    
      {/* Add in the grid container here  */}
      <div className={ti.gridContainer}>

      
      <div className={ti.imageContainer}>

        <Image className={ti.mainImage}  src={img} alt='woman' quality={100} loading='lazy' />

      </div>

      {/* Add in the image container here */}
    

      {/* Add in the text container here */}
      <div className={ti.textContainer}>

        <h2 className={ti.mainHeading}>

        How ivvi Notes Supports Your Learning

        </h2>

        <p className={ti.mainSupportingText}>

        ivvi Notes is designed to support various learning needs, helping students with:


            
        </p>

      <div className={ti.bulletPointListContainer}>


        <ul className={ti.bulletPointList}>

        <li className={ti.bulletPointListItem}>

            

        No Commitment




        </li>

        <li className={ti.bulletPointListItem}>

        No Credit Card



        </li>
        <li className={ti.bulletPointListItem}>

            

        No Subscription



        </li>

        <li className={ti.bulletPointListItem}>

        No Catch

          </li>
        <li className={ti.bulletPointListItem}>

            

        Keep Lifetime Access to Your Maps



        </li>

        <li className={ti.bulletPointListItem}>

            

        DSA Approved



        </li>



        </ul>
      </div>
      </div>




      </div>
    </section>
  )
}

export default LeftImageText