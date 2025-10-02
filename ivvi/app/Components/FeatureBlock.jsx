import React from 'react'; 
import ft from '../Styles/FeatureBlock.module.css'; 
import Image from 'next/image';
import Link from 'next/link';
import img from '../../public/images/man.webp'; 



function FeatureBlock() {
  return (

   <section className={ft.featureMainContainer}>

      <div className={ft.gridContainer}>


      <div className={ft.imageContainer}>

        <Image className={ft.mainImage}  src={img} alt='woman' quality={100} loading='lazy' />

      </div>

      {/* Add in the text container here */}
      <div className={ft.textContainer}>

        <h2 className={ft.mainHeading}>

        How ivvi Notes Works

        </h2>

        

        {/* Add in the bullet point list here  */}

      <div className={ft.bulletPointListContainer}>


        <ul className={ft.bulletPointList}>

        <li className={ft.bulletPointListItem}>

            

            Open ivvi in your lecture




        </li>

        <li className={ft.bulletPointListItem}>



        Tap record


        </li>
        <li className={ft.bulletPointListItem}>



        Explore magic map




        </li>

        <div className={ft.lastText} >Fuel your memory with notes that work for you.</div>


        </ul>

      </div>
      </div>
      </div>
    </section>

)
}

export default FeatureBlock