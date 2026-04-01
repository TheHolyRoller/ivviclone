import React from 'react'
import img from '../../public/images/edit.png'
import StudentsFeatureSection from './StudentsFeatureSection'

function Edit() {
	return (
		<StudentsFeatureSection
			reverse
			title='Edit Freely'
			image={img}
			imageAlt='Editing mode in ivvi Notes'
			description='Take control of your notes with full editing capabilities. Update keywords and icons, then enrich your map with files, links, and presentation images to build a complete learning resource.'
		/>
	)
}

export default Edit