import React from 'react'
import zoom from '../../public/images/mic.webp'
import DsaContentSection from './DsaContentSection'

function Prepare() {
	return (
		<DsaContentSection
			reverse
			subtitle='To help you prepare, think about these questions:'
			image={zoom}
			imageAlt='Microphone and headset for study support'
			bullets={[
				'How does dyslexia affect you in daily study life?',
				'Do you find it difficult to take notes during lectures?',
				'How do you currently write essays, reports, or prepare presentations?',
				'Is time management or organisation a challenge?',
				'What strategies have helped you in the past?',
				'Are there tools or software options you already know would help?'
			]}
		/>
	)
}

export default Prepare