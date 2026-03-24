import React from 'react'
import tx from '../Styles/Testimony.module.css'; 





function Testimony() {
  return (

    <div className={tx.textContainer} >
      
    <article className={tx.mainText} >
        {/* “I’m just starting college with dyslexia and I love mindmapping but it can be hard to do it in lectures, so I’m really looking forward to ivvi showing me what’s being said visually so I can understand it.” */}
        "As a PhD candidate with dyslexia, 
        <div className={tx.ivvi}>
            
        ivvi
        
             </div>
         is a game-changer for my research. It helps me organize my thoughts and data for me to visualize the big picture. My advisors notice improvements in my writing and the flow of my content. 
        <div className={tx.ivvi}>

         ivvi
        </div>
         
          has given me newfound confidence in completing my thesis. Thank you, 
        <div className={tx.ivvi}>

          ivvi
        </div>
          
           team, for creating such a transformative tool!"


      <span className={tx.studentName}> 
        
        {/* - Annie, College Student - */}
        Kelly L, PhD Student


      </span>
</article>
    </div>
  )
}

export default Testimony