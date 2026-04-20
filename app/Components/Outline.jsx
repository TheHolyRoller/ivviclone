import React from 'react'
import img from '../../public/images/outline.webp'
import StudentsFeatureSection from './StudentsFeatureSection'
import sectionStyles from '../Styles/StudentsFeatureSection.module.css'

function Outline() {
	return (
		<StudentsFeatureSection
			reverse
			titleTag="h3"
			title='Outline Visually'
			image={img}
			imageAlt='Outline mode connected with a mind map'
			description='Switch seamlessly between your visual map and structured outline. You can navigate connected keywords and images in both views, giving you flexible context while studying.'
			mediaClassName={sectionStyles.mediaCapped}
		/>
	)
}

export default Outline