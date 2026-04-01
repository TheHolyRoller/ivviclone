import React from 'react'
import tx from '../Styles/Testimony.module.css'





function Testimony() {
  return (

    <div className={tx.textContainer} >
      
    <article className={tx.mainText} >
        "As a PhD candidate with dyslexia, <span className={tx.ivvi}>ivvi</span> is a game-changer for my research. It helps me organise my thoughts and data so I can visualise the big picture. My advisors notice improvements in my writing and content flow. <span className={tx.ivvi}>ivvi</span> has given me new confidence in completing my thesis. Thank you, <span className={tx.ivvi}>ivvi</span> team, for creating such a transformative tool!"


      <span className={tx.studentName}> 
        
        {/* - Annie, College Student - */}
        Kelly L, PhD Student


      </span>
</article>
    </div>
  )
}

export default Testimony