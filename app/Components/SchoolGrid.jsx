import React from 'react'
import g from '../Styles/SchoolGrid.module.css'
import icon1 from '../../public/icons/gridIcon1.webp'
import icon2 from '../../public/icons/gridIcon2.webp'
import icon3 from '../../public/icons/gridIcon3.webp'
import icon4 from '../../public/icons/gridIcon4.webp'
import Image from 'next/image'
import School_Justification from './School_Justification'

const featureItems = [
	{
		icon: icon1,
		title: 'Real-time note-taking',
		content: 'helps students capture important content instantly so they can focus on understanding.'
	},
	{
		icon: icon2,
		title: 'Combined learning styles',
		content: 'blends audio, visual, and written formats for multimodal learners.'
	},
	{
		icon: icon3,
		title: 'Identify key information',
		content: 'supports faster review through tagging and mind map structure.'
	},
	{
		icon: icon4,
		title: 'Seamless integration',
		content: 'lets students combine slides, images, and notes in one place.'
	},
	{
		icon: icon4,
		title: 'Flexible learning',
		content: 'works across devices and browsers for access in class and at home.'
	},
	{
		icon: icon4,
		title: 'Inclusive support',
		content: 'is designed for students with neurodiverse and executive-functioning needs.'
	}
]

function SchoolGrid() {
	return (
		<section className={g.featureGridContainer}>
			<div className={g.justificationContainer}>
				<School_Justification />
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

export default SchoolGrid