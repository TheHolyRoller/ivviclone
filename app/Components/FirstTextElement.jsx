import React from 'react'
import ft from '../Styles/FirstTextElement.module.css'; 


function FirstTextElement() {
  return (
    <div className={ft.mainTextCotnainer} >

    <article className={ft.mainText} >
        “ivvi is a total life saver. I can get overwhelmed with the amount of information I hear in lectures and tutorials and my ADHD means I can focus on one aspect and miss other details.
Seeing the lecture mapped out visually means I can follow the big picture and understand what's being taught.”
      <span className={ft.studentName}> 
            - Grace, University Student -

      </span>
</article>
    </div>
  )
}

export default FirstTextElement