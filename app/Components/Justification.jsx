import React from 'react'
import j from '../Styles/Justification.module.css'; 


function Justification() {
  return (
    <article className={j.mainContainer}>
    <div className={j.subContainer}>




    <h2 class={j.mainHeadline}>

    Why ivvi Notes?


    </h2>

    <p className={j.supportingText}>

    We get it - lectures can be overwhelming, traditional note-taking is slow, and making visual notes on the fly feels impossible. That's why we created 
    
    <div className={j.ivvi}>

    ivvi
    
    </div>
    
     Notes just for you!

    </p>
    </div>

    </article>
  )
}

export default Justification