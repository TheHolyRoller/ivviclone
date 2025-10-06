import React from 'react'
import tx from '../Styles/TextElement.module.css'; 





function TextElement() {
  return (
    <article className={tx.mainText} >“I’m just starting college with dyslexia and I love mindmapping but it can be hard to do it in lectures, so I’m really looking forward to ivvi showing me what’s being said visually so I can understand it.”

      <span className={tx.studentName}> 
        - Annie, College Student -
      </span>
</article>
  )
}

export default TextElement