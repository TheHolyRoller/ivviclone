import React from 'react'
import help from '../../public/images/help.webp'
import DsaInfoBlock from './DsaInfoBlock'

function GrantCover() {
	return (
		<DsaInfoBlock
			title='What does the DSA grant cover?'
			image={help}
			imageAlt='Illustration of support options'
			paragraphs={[
				'Depending on your personal needs, the grant can cover practical tools and services that make study more accessible.',
				'These resources help you build a setup that works with your way of learning and thinking.'
			]}
			highlights={[
				{ label: 'Assistive software:', text: 'Mind mapping, text-to-speech, and other productivity tools.' },
				{ label: 'Hardware:', text: 'Laptops, printers, and other required equipment.' },
				{ label: 'Study skills support:', text: 'One-to-one sessions for writing, revision, and time planning.' },
				{ label: 'Other costs:', text: 'Printing, photocopying, and training for recommended software.' }
			]}
		/>
	)
}

export default GrantCover