import React from 'react'
import h from '../Styles/AssessHero.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { IVVI_APP_URL } from './ivviAppUrl'
import hero from '../../public/images/assess.webp'
import awards from '../../public/images/bett.webp'

function AssessHero() {
	return (
		<section className={h.hero}>
			<Image className={h.heroBackgroundImage} src={hero} alt='Assessor page background' sizes='100vw' loading="lazy" />

			<div className={h.heroContentContainer}>
				<p className={h.subHeading}>DSA Approved</p>

				<div className={h.heroTitleBlock}>
					<Image
						className={h.awards}
						src={awards}
						alt="Bett Awards winner badge"
						loading="lazy"
					/>
					<h1 className={h.heroMainHeader} id="assessors-hero-heading">
						ivvi Notes for assessors and specialists
					</h1>
				</div>

				<p className={h.heroSupportingText}>
					<span className={h.ivvi}>ivvi Notes™</span>
					transforms lecture content into dynamic visual notes in real time, giving neurodiverse students clearer structure while they listen.
				</p>

				<Link className={h.heroCTAButton} href={IVVI_APP_URL} target="_blank" rel="noopener noreferrer">
					Get Demo Licence
				</Link>
			</div>
		</section>
	)
}

export default AssessHero