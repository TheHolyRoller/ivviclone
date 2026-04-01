import React from 'react'
import laptop from '../../public/images/lp.png'
import DsaContentSection from './DsaContentSection'

function DSA_Allowance() {
	return (
		<DsaContentSection
			title="Who is the Disabled Students' Allowance for?"
			subtitle='The DSA grant is available for students with:'
			image={laptop}
			imageAlt='Student working on a laptop'
			bullets={[
				'Specific learning difficulties such as dyslexia, dysgraphia, dyscalculia, ADHD, and autism',
				'Physical disabilities',
				'Mental health conditions (e.g. anxiety or depression)',
				'Long-term health conditions (e.g. cancer or heart disease)'
			]}
			paragraphs={[
				'This guide focuses on dyslexia support for higher education, and the same core steps can help when applying for other disability-related assistance.'
			]}
		/>
	)
}

export default DSA_Allowance