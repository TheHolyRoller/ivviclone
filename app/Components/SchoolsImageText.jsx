import React from 'react'; 
import ti from '../Styles/SchoolsImageText.module.css'; 
import Link from 'next/link';
import Image from 'next/image';
import img from '../../public/images/girl_study.png';   



function SchoolsImageText() {
  return (
    <section className={ti.featureMainContainer}>
    
      {/* Add in the grid container here  */}
      <div className={ti.gridContainer}>

      {/* Add in the text container here */}
      <div className={ti.textContainer}>

        <h2 className={ti.mainHeading}>

        {/* How ivvi Notes Supports Your Learning */}
        Who can benefit from ivvi Notes?

        </h2>

        <p className={ti.mainSupportingText}>

        {/* ivvi Notes is designed to support various learning needs, helping students with: */}
        ivvi Notes is designed to support various learning needs, helping students with:


            
        </p>

      <div className={ti.bulletPointListContainer}>


        <ul className={ti.bulletPointList}>

        <li className={ti.bulletPointListItem}>


        <h5 className={ti.mainImageTextHeadline}>

          {/* Dyslexia         */}
          {/* Dysgraphia & Dyspraxia */}
          Dyslexia
          
          
          </h5>            

        <p className={ti.supportingTextListItem}>

        {/* Organise information visually, reducing the need for re-reading.  */}
        {/* Minimise writing and typing efforts. */}
        Organise information visually to reduce the need for repetitive re-reading and improve comprehension of complex texts.


        </p>




        </li>

        <li className={ti.bulletPointListItem}>

        <h5 className={ti.mainImageTextHeadline}>

          {/* Dyslexia         */}
          {/* ADD / ADHD */}
          Dysgraphia and Dyspraxia


          </h5>            

          <p className={ti.supportingTextListItem}>

          {/* Organise information visually, reducing the need for re-reading.  */}
          {/* Maintain focus and capture content without overwhelm. */}
          Minimise writing efforts by providing digital note-taking tools, reducing physical strain and improving legibility.


          </p>

        </li>
        <li className={ti.bulletPointListItem}>

            

        <h5 className={ti.mainImageTextHeadline}>

            {/* Dyslexia         */}
            {/* Executive Function */}
            ADD / ADHD


            </h5>            

            <p className={ti.supportingTextListItem}>

            {/* Organise information visually, reducing the need for re-reading.  */}
            {/* Improves organisation and planning of information. */}
            Maintain focus during lectures by allowing students to engage with content actively through tagging and mind mapping, capturing information without overwhelm.


            </p>



        </li>

        <li className={ti.bulletPointListItem}>

        <h5 className={ti.mainImageTextHeadline}>

            {/* Dyslexia         */}
            {/* ASD */}
            Autism Spectrum Disorder (ASD)


            </h5>            

            <p className={ti.supportingTextListItem}>

            {/* Organise information visually, reducing the need for re-reading.  */}
            {/* Manage sensory input and visualise complex information clearly. */}
            Manage sensory input and visualise complex information clearly, allowing for personalised organisation of lecture content in a way that makes sense to the individual.


            </p>

          </li>
        <li className={ti.bulletPointListItem}>

            
        <h5 className={ti.mainImageTextHeadline}>

            {/* Dyslexia         */}
            {/* Mental Health */}
            Mental Health


            </h5>            

            <p className={ti.supportingTextListItem}>

            {/* Organise information visually, reducing the need for re-reading.  */}
            {/* Alleviate stress and anxiety around note-taking. */}
            Alleviate stress and anxiety around note-taking and studying by ensuring comprehensive capture of lecture content, reducing worry about missed information.


            </p>


        </li>

        <li className={ti.bulletPointListItem}>

            
        <h5 className={ti.mainImageTextHeadline}>

            {/* Dyslexia         */}
            {/* Physical or Unseen Conditions */}
            Mobility Challenges


            </h5>            

            <p className={ti.supportingTextListItem}>

            {/* Organise information visually, reducing the need for re-reading.  */}
            {/* Reduce cognitive load for various challenges, including mobility issues, sensory impairments, and chronic fatigue. */}
            Enable effective note-taking without the need for extensive physical writing, supporting students with limited mobility or chronic pain conditions.


            </p>    



        </li>

        <li className={ti.bulletPointListItem}>

                      
          <h5 className={ti.mainImageTextHeadline}>

              {/* Dyslexia         */}
              Hearing Impairment


              </h5>            

              <p className={ti.supportingTextListItem}>

              {/* Organise information visually, reducing the need for re-reading.  */}
              Provide visual note-taking tools and transcription services to support understanding of lecture content for students who may struggle to hear or process auditory information.
              


              </p>    

           

          </li>

          <li className={ti.bulletPointListItem}>

                      
<h5 className={ti.mainImageTextHeadline}>

    {/* Dyslexia         */}
    {/* Hearing Impairment */}
    Unseen Conditions


    </h5>            

    <p className={ti.supportingTextListItem}>

    {/* Organise information visually, reducing the need for re-reading.  */}
    {/* Provide visual note-taking tools and transcription services to support understanding of lecture content for students who may struggle to hear or process auditory information. */}
    Reduce cognitive load for various challenges including chronic fatigue syndrome, fibromyalgia, and long COVID, by offering flexible, efficient note-taking solutions that can be used even on low-energy days.


    </p>  
</li> 
        </ul>
        </div>
      </div>


      
      <div className={ti.imageContainer}>

        <Image className={ti.mainImage}  src={img} alt='woman' quality={100} loading='lazy' />

      </div>




      </div>
    </section>
  )
}

export default SchoolsImageText;