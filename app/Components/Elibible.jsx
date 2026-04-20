import React from 'react'
import woman from '../../public/images/featureBlockIMG.webp'
import DsaContentSection from './DsaContentSection'

function Eligible() {
	return (
		<DsaContentSection
			reverse
			largeSubtitle
			subtitle='You are eligible for DSA with dyslexia if you:'
			image={woman}
			imageAlt='Student reviewing notes'
			enlargeImageLaptopDesktop
			bullets={[
				'Have a dyslexia diagnosis from school or adulthood',
				'Are studying full-time or part-time for at least one year',
				'Are an undergraduate or postgraduate student in the UK',
				'Qualify for student finance'
			]}
			paragraphs={[
				'Sending a PDF of your original diagnosis is usually enough for dyslexia evidence. A childhood report is valid and does not expire.',
				'For some physical or mental health conditions, you may need a GP to complete the DSA evidence form.'
			]}
		/>
	)
}

export default Eligible