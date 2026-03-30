import React from 'react'
import j from '../Styles/School_Justification.module.css'; 


function School_Justification() {
  return (
    <article className={j.mainContainer}>
    <div className={j.subContainer}>

    <h2 class={j.mainHeadline}>

    {/* Why ivvi Notes? */}
    Teachers: Why ivvi Notes?


    </h2>

    <p className={j.supportingText}>

    {/* We get it - lectures can be overwhelming, traditional note-taking is slow, and making visual notes on the fly feels impossible. That's why we created  */}
    Lectures can be overwhelming, traditional note-taking is slow, and making visual notes in real time feels impossible. That's why we created 
    
    
    <div className={j.ivvi}>

    ivvi
    
    </div>
    
     {/* Notes just for you! */}
    Note's revolutionary Speech-to-Map™ technology just for your student.


    </p>
    </div>

    </article>
  )
}

export default School_Justification