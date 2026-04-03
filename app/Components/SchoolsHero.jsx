import React from 'react'
import h from '../Styles/SchoolsHero.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { IVVI_APP_URL } from './ivviAppUrl'
import awards from '../../public/images/bett.webp'
import schools from '../../public/images/schools.webp'

function SchoolsHero() {
	return (
		<section className={h.hero}>
			<Image className={h.heroBackgroundImage} src={schools} alt='School classroom background' sizes='100vw' loading="lazy" />

			<div className={h.heroContentContainer}>
				<div className={h.heroTitleBlock}>
					<Image
						className={h.awards}
						src={awards}
						alt="Bett Awards winner badge"
						loading="lazy"
					/>
					<h1 className={h.heroMainHeader} id="schools-hero-heading">
						ivvi Notes - Instant Visual Note-Taking Assistive Technology
					</h1>
				</div>

				<p className={h.heroSupportingText}>
					<span className={h.ivvi}>ivvi Notes™</span>
					helps schools support neurodiverse learners by turning taught content into clear, visual notes in real time.
				</p>

				<Link className={h.heroCTAButton} href={IVVI_APP_URL} target="_blank" rel="noopener noreferrer">
					Get Demo Licence
				</Link>
			</div>
		</section>
	)
}

export default SchoolsHero