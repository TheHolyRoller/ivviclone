import React from 'react'
import ti from '../Styles/SchoolsImageText.module.css'
import Image from 'next/image'
import img from '../../public/images/girl_study.png'

const supportItems = [
	{
		title: 'Dyslexia',
		text: 'Organise information visually to reduce repetitive re-reading and improve understanding of complex text.'
	},
	{
		title: 'Dysgraphia and Dyspraxia',
		text: 'Minimise writing strain with digital note-taking that improves speed, clarity, and legibility.'
	},
	{
		title: 'ADD / ADHD',
		text: 'Support focus in lessons with tagging and mind mapping to capture ideas without overload.'
	},
	{
		title: 'Autism Spectrum Disorder (ASD)',
		text: 'Provide structured visual organisation to reduce sensory load and improve information processing.'
	},
	{
		title: 'Mental Health',
		text: 'Reduce stress around learning by capturing complete lesson content for easier review.'
	},
	{
		title: 'Mobility Challenges',
		text: 'Enable strong note-taking without long writing sessions, helping students with limited mobility.'
	},
	{
		title: 'Hearing Impairment',
		text: 'Strengthen understanding with visual notes and transcription for spoken classroom content.'
	},
	{
		title: 'Unseen Conditions',
		text: 'Lower cognitive load for conditions like long COVID, chronic fatigue, and fibromyalgia.'
	}
]

function SchoolsImageText() {
	return (
		<section className={ti.featureMainContainer}>
			<div className={ti.gridContainer}>
				<div className={ti.textContainer}>
					<h2 className={ti.mainHeading}>Who can benefit from ivvi Notes?</h2>
					<p className={ti.mainSupportingText}>
						ivvi Notes is designed to support a wide range of learning and accessibility needs.
					</p>

					<ul className={ti.bulletPointList}>
						{supportItems.map((item) => (
							<li className={ti.bulletPointListItem} key={item.title}>
								<h3 className={ti.mainImageTextHeadline}>{item.title}</h3>
								<p className={ti.supportingTextListItem}>{item.text}</p>
							</li>
						))}
					</ul>
				</div>

				<div className={ti.imageContainer}>
					<Image className={ti.mainImage} src={img} alt='Student studying with laptop' quality={100} loading='lazy' />
				</div>
			</div>
		</section>
	)
}

export default SchoolsImageText