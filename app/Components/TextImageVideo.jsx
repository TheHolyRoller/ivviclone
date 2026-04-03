import React from 'react'
import img from '../../public/images/full_transcript.webp'
import StudentsFeatureSection from './StudentsFeatureSection'

function TextImageVideo() {
	return (
		<StudentsFeatureSection
			reverse
			title='Full Transcript'
			image={img}
			imageAlt='Full transcript view in ivvi Notes'
			description="Every word spoken is accurately transcribed and stored in ivvi Notes outline mode. This feature helps you quickly locate specific quotes or information for faster review and reference."
		/>
	)
}

export default TextImageVideo
