import React from 'react'
import boy from '../../public/images/BOY laptop.png'
import DsaContentSection from './DsaContentSection'


function Award() {
	return (
		<DsaContentSection
			title='The Award'
			image={boy}
			imageAlt='Student reviewing award details'
			background='#fff'
			paragraphs={[
				'This is not a pass/fail process. The aim is to identify support that matches your needs.',
				'Your award letter lists what has been approved and explains how your supplier will deliver equipment, software, and support.'
			]}
		/>
	)
}

export default Award