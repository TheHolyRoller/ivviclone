import React from 'react'
// import img from '../../public/images/featureBlockIMG.webp'; 
import img from '../../public/images/mind_map.png'; 

import Link from 'next/link';
import Image from 'next/image';

import it from '../Styles/LiveMap.module.css'; 


function LiveMap() {
  return (  


    <section className={it.featureMainContainer}>
      <div className={it.gridContainer}>

   

      {/* Add in the text container here */}
      <div className={it.textContainer}>

        <h2 className={it.mainHeading}>

        {/* Neurodiverse Executive Functions */}
        {/* Full Transcript */}
        Live Mindmap 


        </h2>

        <p className={it.supportingText}>

        {/* Capture every word of your lectures or meetings with high-quality audio recording. This feature provides a reliable backup, allowing you to revisit any part of the session at any time, ensuring you never miss crucial information. */}
        As you record, AI technology creates a visual index of your lecture, selecting key words and icons to represent main concepts. This dynamic map helps you see the big picture, recognize patterns in information, and makes your notes more memorable and easy to review.


        </p>
     
      </div>

      <div className={it.imageContainer}>

<Image className={it.mainImage}  src={img} alt='woman' quality={100} loading='lazy' />

</div>


      </div>
    </section>
  )
}

export default LiveMap