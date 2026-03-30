import React from 'react'
import it from '../Styles/SpecGrid.module.css'; 

import LeftImageSpecs from './LeftImageSpecs';
import RightImageSpecs from './RightImageSpecs';

import img from '../../public/images/videoBackground.jpg'; 

import sync from '../../public/images/sync.png'; 
import edit from '../../public/images/edit.png'; 
import trans from '../../public/images/trans.png'; 
import map from '../../public/images/mind_map.png'; 
import recording from '../../public/images/recording.png'; 


function SpecGrid() {
  return (      

    <section className={it.specGrid}>

    <div className={it.mainHeadline}>

    Key Assistive Technology Features

    </div>
    
    {/* Add in the main section headline here  */}
    {/* <LeftImageSpecs/>  */}

    <RightImageSpecs
      imageSrc={recording}
      imageAlt="Editable Notes"
      heading="Synchronised Visual Notes"
      text={

        <>
        
        While you listen to a lecture <strong>ivvi Notes </strong>  records the audio, transcribes it and transforms it into an editable mindmap in real time. Everything stays synchronised. When you click on one, it shows you the place in the other two notetaking forms.
        
        </>


      }      linkText="Learn More"
      linkHref="/features"
    />


    <LeftImageSpecs
      imageSrc={sync}
      imageAlt="Synchronised Visual Notes"
      heading="Clear Audio recording"
      text="Provides a crucial accommodation for students with processing difficulties or slow writing speeds. The high-quality recording ensures that no information is missed, allowing students to focus on understanding rather than frantically writing during lectures."
      linkText="Learn More"
      linkHref="/features"
      />

<RightImageSpecs
      imageSrc={recording}
      imageAlt="Editable Notes"
      heading="Full transcription"
      text="Offers full text transcription of recorded audio, essential for students with auditory processing disorders or hearing impairments. The searchable text format also supports those with reading difficulties by allowing easy location of specific information."
      linkText="Learn More"
      linkHref="/features"
    />

      <LeftImageSpecs
      imageSrc={sync}
      imageAlt="Synchronised Visual Notes"
      heading="Live Mindmap"
      text="Utilizes AI to create visual representations of lecture content in real-time. This feature is particularly beneficial for visual learners and students with dyslexia or ADHD, helping them grasp complex concepts and relationships between ideas with ease."
      linkText="Learn More"
      linkHref="/features"
      />


    <RightImageSpecs
      imageSrc={recording}
      imageAlt="Editable Notes"
      heading="Edit Freely"
      text="Empowers students to personalize their notes, supporting various learning styles and needs. Students with executive functioning difficulties can reorganize information in a way that makes sense to them, enhancing comprehension and recall."
      linkText="Learn More"
      linkHref="/features"
    />


      <LeftImageSpecs
      imageSrc={sync}
      imageAlt="Synchronised Visual Notes"
      heading="Highlight Quotes"
      text="Allows immediate marking of important information, crucial for students with attention difficulties. This feature helps in maintaining focus during lectures and facilitates efficient review of key points later. "
      linkText="Learn More"
      linkHref="/features"
      />

      <RightImageSpecs
      imageSrc={recording}
      imageAlt="Editable Notes"
      heading="Visual Outline"
      text="Presents information in both visual (mind map) and linear (outline) formats, catering to different cognitive processing styles. The seamless integration between these modes supports students in developing a comprehensive understanding of the material, particularly for those with organizational difficulties."
      linkText="Learn More"
      linkHref="/features"
    />



    </section>

  )
}

export default SpecGrid