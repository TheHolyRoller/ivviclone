import React from 'react'
import sp from '../Styles/DSASteps.module.css'
import table from '../../public/images/table group.png'
import Image from 'next/image'
import cert from '../../public/images/cert.png'
import boy from '../../public/images/boy lp.png'
import lpt from '../../public/images/lap t.png'
import grant from '../../public/images/grant.png'
import Link from 'next/link'

const steps = [
	{
		image: table,
		title: "1. Contact your university's Disabilities and Wellbeing Team",
		description: 'This is the best first step. They can walk you through the process and help with the form.'
	},
	{
		image: cert,
		title: '2. Find your dyslexia assessment',
		description: 'Look for a PDF in your email history or locate your paper report.'
	},
	{
		image: boy,
		title: '3. Apply online',
		description: 'You can apply with student finance or separately during your course.',
		showLink: true
	},
	{
		image: lpt,
		title: '4. Attend a needs assessment',
		description: 'You should usually hear back within a few weeks with next-step details.'
	},
	{
		image: grant,
		title: '5. Receive your award',
		description: 'You will get a DSA2 entitlement letter with approved support and supplier details.'
	}
]

function DSASteps() {
	return (
		<section className={sp.mainContainer}>
			<div className={sp.subContainer}>
				<h2 className={sp.headline}>Here are the steps:</h2>

				<ul className={sp.flexContainer}>
					{steps.map((step) => (
						<li className={sp.gridSubContainer} key={step.title}>
							<Image src={step.image} alt={step.title} className={sp.gridImage} />

							<div className={sp.textContainer}>
								<h3 className={sp.gridHeadline}>{step.title}</h3>
								<p className={sp.gridParagraph}>{step.description}</p>

								{step.showLink ? (
									<Link href='#dsa-resources' className={sp.button}>
										Check the country links
									</Link>
								) : null}
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default DSASteps
