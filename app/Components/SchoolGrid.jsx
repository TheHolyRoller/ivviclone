import React from 'react'
import g from '../Styles/SchoolGrid.module.css'
import icon1 from '../../public/icons/gridIcon1.webp'
import icon2 from '../../public/icons/gridIcon2.webp'
import icon3 from '../../public/icons/gridIcon3.webp'
import iconIvviCard from '../../public/icons/ivvi card.webp'
import iconCircleee from '../../public/icons/circleee.webp'
import iconIvviGroupp from '../../public/icons/ivvi groupp.webp'
import Image from 'next/image'
import School_Justification from './School_Justification'

const featureItems = [
	{
		icon: icon1,
		title: 'Real-time note-taking',
		alt: 'Icon for real-time note-taking: capture important lecture content instantly',
		content: 'helps students capture important content instantly so they can focus on understanding.'
	},
	
	{
		icon: icon2,
		title: 'Combined learning styles',
		alt: 'Icon for combined learning styles: audio, visual, and written formats together',
		content: 'blends audio, visual, and written formats for multimodal learners.'
	},
	{

		icon: icon3,
		title: 'Identify key information',
		alt: 'Icon for identifying key information: tagging and mind maps for faster review',
		content: 'supports faster review through tagging and mind map structure.'
	},
	{
		icon: iconIvviCard,
		title: 'Seamless integration',
		alt: 'Icon for seamless integration: slides, images, and notes in one workspace',
		content: 'lets students combine slides, images, and notes in one place.'
	},
	{
		icon: iconCircleee,
		title: 'Flexible learning',
		alt: 'Icon for flexible learning: access on different devices and browsers in class and at home',
		content: 'works across devices and browsers for access in class and at home.'
	},
	{
		icon: iconIvviGroupp,
		title: 'Inclusive support',
		alt: 'Icon for inclusive support: neurodiverse learners and executive-function needs',
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
						<Image className={g.gridImg} src={feature.icon} alt={feature.alt} loading="lazy" />
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