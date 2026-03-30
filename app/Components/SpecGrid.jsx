import React from 'react'
import it from '../Styles/SpecGrid.module.css'; 

import LeftImageSpecs from './LeftImageSpecs';
import RightImageSpecs from './RightImageSpecs';

import img from '../../public/images/videoBackground.jpg'; 

import sync from '../../public/images/sync.png'; 
import edit from '../../public/images/edit.png'; 
import trans from '../../public/images/trans.png'; 
import map from '../../public/images/mind_map.png'; 


function SpecGrid() {
  return (      

    <section className={it.specGrid}>

    <div className={it.mainHeadline}>

    Key Assistive Technology Features

    </div>
    
    {/* Add in the main section headline here  */}
    {/* <LeftImageSpecs/>  */}
    <LeftImageSpecs
      imageSrc={sync}
      imageAlt="Synchronised Visual Notes"
      heading="Synchronised Visual Notes"
      text={
        <>
        While you listen to a lecture  <strong>ivvi</strong>  Notes records the audio, transcribes it and transforms it into an editable mindmap in real time. Everything stays synchronised. When you click on one, it shows you the place in the other two notetaking forms.

        </>
      }
      linkText="Learn More"
      linkHref="/features"
      />

<RightImageSpecs
      imageSrc={img}
      imageAlt="Editable Notes"
      heading="Edit Freely"
      text="Take control of your notes with full editing capabilities. Customize your mind map by adding, changing, or removing keywords and icons."
      linkText="Learn More"
      linkHref="/features"
    />



    </section>

  )
}

export default SpecGrid