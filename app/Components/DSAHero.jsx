import React from 'react'
import h from '../Styles/DSAHero.module.css'
import Image from 'next/image'
import HeroBackground from '../../public/images/HeroBackground.png'

function DSAHero() {
	return (
		<section className={h.hero}>
			<Image className={h.heroBackgroundImage} src={HeroBackground} alt='Background pattern' />

			<div className={h.heroContentContainer}>
				<p className={h.subHeading}>A Guide to the</p>

				<h1 className={h.heroMainHeader}>
					Disabled Students&apos; Allowance
					<span className={h.headerAccent}>for Dyslexia</span>
				</h1>

				<p className={h.heroSupportingText}>
					This guide helps parents and students understand and apply for Disabled Students’ Allowance (DSA), with the key steps and resources in one place.
				</p>
			</div>
		</section>
	)
}

export default DSAHero