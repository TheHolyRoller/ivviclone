import React from 'react'
import j from '../Styles/School_Justification.module.css'


function School_Justification() {
	return (
		<article className={j.mainContainer}>
			<div className={j.subContainer}>
				<h2 className={j.mainHeadline}>Why ivvi Notes for teachers and classrooms?</h2>
				<p className={j.supportingText}>
					Lectures can be overwhelming, traditional note-taking is slow, and making visual notes in real time feels impossible.
					<span className={j.ivvi}>ivvi</span>
					Notes uses Speech-to-Map™ technology to support students with clearer structure and recall.
				</p>
			</div>
		</article>
	)
}

export default School_Justification