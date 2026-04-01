import React from 'react'
import group from '../../public/images/dsa group.png'
import DsaInfoBlock from './DsaInfoBlock'

function DSASpec() {
	return (
		<DsaInfoBlock
			title="What is the Disabled Students' Allowance?"
			image={group}
			imageAlt='Students discussing support options'
			paragraphs={[
				'The Disabled Students’ Allowance (DSA) is a grant that helps cover disability-related study costs, including support for dyslexia.',
				'The grant is based on your needs, not your household income. It is not means tested and does not need to be paid back.',
				'DSA is available to students with dyslexia across a wide range of needs and study contexts.'
			]}
		/>
	)
}

export default DSASpec