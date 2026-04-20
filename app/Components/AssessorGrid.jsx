import React from 'react'
import g from '../Styles/AssessorGrid.module.css'
import icon1 from '../../public/icons/gridIcon1.webp'
import icon2 from '../../public/icons/gridIcon2.webp'
import icon3 from '../../public/icons/gridIcon3.webp'
import iconCircleee from '../../public/icons/circleee.webp'
import iconIvviCard from '../../public/icons/ivvi card.webp'
import iconIvviGroupp from '../../public/icons/ivvi groupp.webp'
import Image from 'next/image'

const featureItems = [
	{
		icon: icon1,
		title: 'Real-time note-taking',
		alt: 'Icon for real-time note-taking: capture every important lecture detail instantly',
		content: 'Capture every important detail instantly'
	},
	{

		icon: icon2,
		title: 'Multi-style learning',
		alt: 'Icon for multi-style learning: audio, visual, and text notes together',
		content: 'Combine audio, visual, and text notes'
	},
	{
		icon: icon3,
		title: 'Highlight key info',
		alt: 'Icon for highlighting key information: tagging and mind mapping for quick review',
		content: 'Use tagging and mind mapping for quick review'
	},
	{
		icon: iconIvviCard,
		title: 'All-in-one resource',
		alt: 'Icon for an all-in-one resource: slides and images integrated with notes',
		content: 'Integrate slides and images with your notes'
	},
	{
		icon: iconCircleee,
		title: 'Study anywhere',
		alt: 'Icon for studying anywhere: notes on any device, any time',
		content: "Access your notes on any device, anytime"
	},
	{
		icon: iconIvviGroupp,
		title: 'Designed for you',
		alt: 'Icon for inclusive design: SpLD, dyslexia, ADHD, ASD, and related needs',
		content: 'Accommodate SpLD, Dyslexia, ADHD, ASD, and more'
	}
]

function AssessorGrid() {
	return (
		<section className={g.featureGridContainer}>
			<section className={g.featureGrid}>
				<div className={g.featureGridIntro}>
					<h2 className={g.featureGridHeading}>Assessors: Why ivvi Notes?</h2>
					<p className={g.featureGridSupporting}>
						{`Lectures can be overwhelming, traditional note-taking is slow, and making visual notes in real time feels impossible. That's why we created ivvi Notes' revolutionary Speech-to-Map™ technology just for your student.`}
					</p>
				</div>
				{featureItems.map((feature) => (
					<article key={feature.title} className={g.gridItem}>
						<Image className={g.gridImg} src={feature.icon} alt={feature.alt} loading="lazy" />
						<h4 className={g.gridHeadline}>{feature.title}</h4>
						<p className={g.gridSupportingText}>
							{/* <span className={g.ivvi}>ivvi</span> */}
							{feature.content}
						</p>
					</article>
				))}
			</section>
		</section>
	)
}

export default AssessorGrid