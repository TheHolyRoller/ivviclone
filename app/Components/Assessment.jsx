import React from 'react'
import group from '../../public/images/dsa group.webp'
import DsaInfoBlock from './DsaInfoBlock'

function Assessment() {
	return (
		<DsaInfoBlock
			title='Your Needs Assessment'
			image={group}
			imageAlt='Student discussing needs assessment outcomes'
			paragraphs={[
				'Once your application is reviewed, you are invited to a needs assessment. This is a conversation about what support will help you study effectively.',
				'It is not an exam. The goal is to recommend practical tools, software, and support based on your real study needs.',
				'The recommendations from this assessment are used to create your DSA2 award letter.'
			]}
		/>
	)
}

export default Assessment