import React from 'react'
import ti from '../Styles/RightImageText.module.css'
import Image from 'next/image'
import img from '../../public/images/girl_study.webp'

const supportItems = [
	{
		title: 'Dyslexia',
		text: 'Organise information visually, reduce re-reading, and improve understanding of complex content.'
	},
	{
		title: 'Dysgraphia and Dyspraxia',
		text: 'Minimise writing effort with digital note capture and improve readability.'
	},
	{
		title: 'ADD / ADHD',
		text: 'Keep focus in lectures with active tagging and mind mapping as content is delivered.'
	},
	{
		title: 'Autism Spectrum Disorder (ASD)',
		text: 'Structure sensory input and complex ideas in a clearer, more personalised way.'
	},
	{
		title: 'Mental Health',
		text: 'Reduce study stress by ensuring important details are captured reliably.'
	},
	{
		title: 'Mobility Challenges',
		text: 'Support note-taking without extended physical writing for students with pain or mobility limitations.'
	},
	{
		title: 'Hearing Impairment',
		text: 'Use live transcription and visual notes to improve access to taught content.'
	},
	{
		title: 'Unseen Conditions',
		text: 'Lower cognitive load on low-energy days for long-term and fluctuating conditions.'
	}
]

function RightImageText() {
	return (
		<section className={ti.featureMainContainer}>
			<div className={ti.gridContainer}>
				<div className={ti.textContainer}>
					<h2 className={ti.mainHeading}>Who can benefit from ivvi Notes in higher education?</h2>
					<p className={ti.mainSupportingText}>ivvi Notes supports a wide range of learning needs across higher education.</p>

					<div className={ti.bulletPointListContainer}>
						<ul className={ti.bulletPointList}>
							{supportItems.map((item) => (
								<li className={ti.bulletPointListItem} key={item.title}>
									<h3 className={ti.mainImageTextHeadline}>{item.title}</h3>
									<p className={ti.supportingTextListItem}>{item.text}</p>
								</li>
							))}
						</ul>

						<p className={ti.buttonIntroText}>Download our Assessors Guide:</p>
						<a
							className={ti.downloadButton}
							href='/assessors_DSA_guide.pdf'
							download='assessors_DSA_guide.pdf'
						>
							Download Assessors Guide
						</a>
					</div>
				</div>

				<div className={ti.imageContainer}>
					<Image className={ti.mainImage} src={img} alt='Student using laptop for note-taking' loading="lazy" />
				</div>
			</div>
		</section>
	)
}

export default RightImageText