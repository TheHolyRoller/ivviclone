import React from 'react'
import img from '../../public/images/edit.webp'
import StudentsFeatureSection from './StudentsFeatureSection'
import sectionStyles from '../Styles/StudentsFeatureSection.module.css'

function Edit() {
	return (
		<StudentsFeatureSection
			reverse
			titleTag="h3"
			title='Edit Freely'
			image={img}
			imageAlt='Editing mode in ivvi Notes'
			description='Take control of your notes with full editing capabilities. Update keywords and icons, then enrich your map with files, links, and presentation images to build a complete learning resource.'
			mediaClassName={sectionStyles.mediaCapped}
		/>
	)
}

export default Edit