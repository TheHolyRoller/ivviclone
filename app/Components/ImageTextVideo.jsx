import React from 'react'
import img from '../../public/images/audio_rec.webp'
import StudentsFeatureSection from './StudentsFeatureSection'

function ImageTextVideo() {
	return (
		<StudentsFeatureSection
			title='Audio Recording'
			image={img}
			imageAlt='Audio recording timeline in ivvi Notes'
			description='Capture every word of your lectures or meetings with high-quality audio recording. This gives you a reliable backup so you can revisit any part of the session and never miss critical information.'
		/>
	)
}

export default ImageTextVideo