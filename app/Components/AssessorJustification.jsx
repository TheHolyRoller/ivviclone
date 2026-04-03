import React from 'react'
import j from '../Styles/AssessorJustification.module.css'

function AssessorJustification() {
	return (
		<article className={j.mainContainer}>
			<div className={j.subContainer}>
				<h2 className={j.mainHeadline}>Why ivvi Notes for assessment?</h2>

				<p className={j.supportingText}>
					We get it - lectures can be overwhelming, traditional note-taking is slow, and making visual notes on the fly feels impossible. That's why we created 
					
					<span className={j.ivvi}>ivvi</span>
					
					Notes just for you!

				</p>
			</div>
		</article>


	)
}


export default AssessorJustification