import React from 'react'
import g from '../Styles/AssessorGrid.module.css'
import icon1 from '../../public/icons/gridIcon1.webp'
import icon2 from '../../public/icons/gridIcon2.webp'
import icon3 from '../../public/icons/gridIcon3.webp'
import icon4 from '../../public/icons/gridIcon4.webp'
import Image from 'next/image'
import AssessorJustification from '../Components/AssessorJustification'

const featureItems = [
	{
		icon: icon1,
		title: 'Real-time note-taking',
		content: 'can be used to instantly capture information visually, ensuring students do not miss important details.'
	},
	{
		icon: icon2,
		title: 'Combined learning styles',
		content: 'allows for a combination of audio, visual, and written notes, catering to multimodal learners.'
	},
	{
		icon: icon3,
		title: 'Identify key information',
		content: 'visual tagging and mind mapping allow for quick and easy reference, saving valuable study time.'
	},
	{
		icon: icon4,
		title: 'Seamless integration',
		content: 'allows students to integrate slides, images, and other materials with their notes, providing a comprehensive study resource.'
	},
	{
		icon: icon4,
		title: 'Flexible learning',
		content: "can be accessed across any device or browser, anytime and anywhere, maximising students' access to their notes."
	},
	{
		icon: icon4,
		title: 'Note-taking support for all',
		content: 'is designed to support neurodiverse students who experience executive functioning and working memory difficulties (e.g. SpLD, ADHD, ASD).'
	}
]

function AssessorGrid() {
	return (
		<section className={g.featureGridContainer}>
			<div className={g.justificationContainer}>
				<AssessorJustification />
			</div>

			<section className={g.featureGrid}>
				{featureItems.map((feature) => (
					<article key={feature.title} className={g.gridItem}>
						<Image className={g.gridImg} src={feature.icon} alt='' quality={100} loading='lazy' />
						<h4 className={g.gridHeadline}>{feature.title}</h4>
						<p className={g.gridSupportingText}>
							<span className={g.ivvi}>ivvi</span>
							{feature.content}
						</p>
					</article>
				))}
			</section>
		</section>
	)
}

export default AssessorGrid