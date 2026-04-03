import React from 'react'
import think from '../../public/images/think.webp'
import DsaContentSection from './DsaContentSection'

function DSA_Apply() {
	return (
		<DsaContentSection
			title='How do you apply for DSA?'
			image={think}
			imageAlt='Student thinking about application steps'
			background='#fff'
			paragraphs={[
				'You can apply for DSA at the same time as your student finance application, or at any point during your course.',
				'Apply as early as possible, ideally before you start university, so support is ready when teaching begins.'
			]}
		/>
	)
}

export default DSA_Apply