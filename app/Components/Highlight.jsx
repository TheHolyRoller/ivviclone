import React from 'react'
import img from '../../public/images/high.webp'
import StudentsFeatureSection from './StudentsFeatureSection'
import sectionStyles from '../Styles/StudentsFeatureSection.module.css'

function Highlight() {
	return (
		<StudentsFeatureSection
			titleTag="h3"
			title='Highlight Quotes'
			image={img}
			imageAlt='Quote highlighting in ivvi Notes'
			description="Never miss an important point again. With a quick tap, you can highlight critical quotes or information in real time while listening, so key insights stand out during revision."
			mediaClassName={sectionStyles.mediaCapped}
		/>
	)
}

export default Highlight