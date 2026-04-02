import React from 'react'
import ti from '../Styles/LeftImageText.module.css'
import Image from 'next/image'
import img from '../../public/images/girl_study.png'

const supportItems = [
	{
		title: 'Dyslexia',
		description: 'Organise information visually, reducing the need for re-reading.'
	},
	{
		title: 'Dysgraphia & Dyspraxia',
		description: 'Minimise writing and typing efforts.'
	},

	{
		title: 'ADD / ADHD',
		description: 'Maintain focus and capture content without overwhelm.'
	},
	{
		title: 'Executive Function',
		description: 'Improves organisation and planning of information.'
	},
	{
		title: 'ASD',
		description: 'Manage sensory input and visualise complex information clearly.'
	},
	{
		title: 'Mental Health',
		description: 'Alleviate stress and anxiety around note-taking.'
	}, 

	{
		title: 'Physical or Unseen Conditions',
		description: 'Reduce cognitive load for various challenges, including mobility issues, sensory impairments, and chronic fatigue.'
	}
]

function LeftImageText() {
	return (
		<section className={ti.featureMainContainer}>
			<div className={ti.gridContainer}>
				<div className={ti.imageContainer}>
					<Image className={ti.mainImage} src={img} alt='Student revising with ivvi Notes' quality={100} loading='lazy' />
				</div>

				<div className={ti.textContainer}>
					<h2 className={ti.mainHeading}>How ivvi Notes Supports Your Learning</h2>
					<p className={ti.mainSupportingText}>
						{/* ivvi Notes is designed to support different learning needs and remove friction from live note-taking. */}
						ivvi Notes is designed to support various learning needs, helping students with:
					</p>

					<div className={ti.bulletPointListContainer}>
						<ul className={ti.bulletPointList}>
							{supportItems.map((item) => (
								<li className={ti.bulletPointListItem} key={item.title}>
									<h5 className={ti.mainImageTextHeadline}>{item.title}</h5>
									<p className={ti.supportingTextListItem}>{item.description}</p>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default LeftImageText