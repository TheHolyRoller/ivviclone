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


        <h5 className={ti.mainImageTextHeadline}>

          {/* Dyslexia         */}
          Dysgraphia & Dyspraxia
          
          
          </h5>            

        <p className={ti.supportingTextListItem}>

        {/* Organise information visually, reducing the need for re-reading.  */}
        Minimise writing and typing efforts.


        </p>




        </li>

        <li className={ti.bulletPointListItem}>

        <h5 className={ti.mainImageTextHeadline}>

          {/* Dyslexia         */}
          ADD / ADHD


          </h5>            

          <p className={ti.supportingTextListItem}>

          {/* Organise information visually, reducing the need for re-reading.  */}
          Maintain focus and capture content without overwhelm.


          </p>

        </li>
        <li className={ti.bulletPointListItem}>

            

        <h5 className={ti.mainImageTextHeadline}>

            {/* Dyslexia         */}
            Executive Function


            </h5>            

            <p className={ti.supportingTextListItem}>

            {/* Organise information visually, reducing the need for re-reading.  */}
            Improves organisation and planning of information.


            </p>



        </li>

        <li className={ti.bulletPointListItem}>

        <h5 className={ti.mainImageTextHeadline}>

            {/* Dyslexia         */}
            ASD


            </h5>            

            <p className={ti.supportingTextListItem}>

            {/* Organise information visually, reducing the need for re-reading.  */}
            Manage sensory input and visualise complex information clearly.


            </p>

          </li>
        <li className={ti.bulletPointListItem}>

            
        <h5 className={ti.mainImageTextHeadline}>

            {/* Dyslexia         */}
            Mental Health


            </h5>            

            <p className={ti.supportingTextListItem}>

            {/* Organise information visually, reducing the need for re-reading.  */}
            Alleviate stress and anxiety around note-taking.


            </p>


        </li>

        <li className={ti.bulletPointListItem}>

            
        <h5 className={ti.mainImageTextHeadline}>

            {/* Dyslexia         */}
            Physical or Unseen Conditions


            </h5>            

            <p className={ti.supportingTextListItem}>

            {/* Organise information visually, reducing the need for re-reading.  */}
            Reduce cognitive load for various challenges, including mobility issues, sensory impairments, and chronic fatigue.


            </p>    



        </li>

        <li className={ti.bulletPointListItem}>

                      
          <h5 className={ti.mainImageTextHeadline}>

              Dyslexia        


              </h5>            

              <p className={ti.supportingTextListItem}>

              Organise information visually, reducing the need for re-reading. 


              </p>    

          </li>




        </ul>
      </div>
      </div>




      </div>
    </section>
  )
}

export default LeftImageText