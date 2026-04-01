import React from 'react'
import j from '../Styles/AssessorJustification.module.css'

function AssessorJustification() {
	return (
		<article className={j.mainContainer}>
			<div className={j.subContainer}>
				<h2 className={j.mainHeadline}>Assessors: Why ivvi Notes?</h2>

				<p className={j.supportingText}>
					Lectures can be overwhelming, traditional note-taking is slow, and building visual notes in real time feels impossible.
					<span className={j.ivvi}>ivvi</span>
					Notes uses Speech-to-Map™ technology to support students with clear structure and better recall.
				</p>
			</div>
		</article>
	)
}

export default AssessorJustification