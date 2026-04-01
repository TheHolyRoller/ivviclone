import React from 'react'
import h from '../Styles/AssessHero.module.css'
import Image from 'next/image'
import Link from 'next/link'
import hero from '../../public/images/assess.png'
import awards from '../../public/images/bett.png'

function AssessHero() {
	return (
		<section className={h.hero}>
			<Image className={h.heroBackgroundImage} src={hero} alt='Assessor page background' />

			<div className={h.heroContentContainer}>
				<p className={h.subHeading}>DSA Approved</p>

				<h1 className={h.heroMainHeader}>
					<Image className={h.awards} src={awards} alt='Bett award sticker' />
					ivvi Notes - Instant Visual Note-Taking Assistive Technology
				</h1>

				<p className={h.heroSupportingText}>
					<span className={h.ivvi}>ivvi Notes™</span>
					transforms lecture content into dynamic visual notes in real time, giving neurodiverse students clearer structure while they listen.
				</p>

				<Link className={h.heroCTAButton} href='/ivvi'>
					Get Demo Licence
				</Link>
			</div>
		</section>
	)
}

export default AssessHero