import React from 'react'
import ti from '../Styles/FreeTrial.module.css'
import Link from 'next/link'
import { IVVI_APP_URL } from './ivviAppUrl'
import Image from 'next/image'
import img from '../../public/images/lady.webp'

const benefits = [
	'No commitment',
	'No credit card',
	'No catch',
	'No subscription',
	'DSA Approved',
	'Keep lifetime access to your maps'
]

function FreeTrial() {
	return (
		<section className={ti.featureMainContainer}>
			<div className={ti.gridContainer}>
				<div className={ti.textContainer}>
					<h2 className={ti.mainHeading}>Ready to Transform Your Learning?</h2>
					<p className={ti.supportingHeadline}>Free 30-day full trial.</p>

					<ul className={ti.bulletPointList}>
						{benefits.map((item) => (
							<li className={ti.bulletPointListItem} key={item}>
								{item}
							</li>
						))}
					</ul>

					<Link className={ti.cta} href={IVVI_APP_URL} target="_blank" rel="noopener noreferrer">
						Try ivvi Notes now
					</Link>
				</div>

				<div className={ti.imageContainer}>
					<Image className={ti.mainImage} src={img} alt='Learner using ivvi Notes' quality={100} loading='lazy' />
				</div>
			</div>
		</section>
	)
}

export default FreeTrial