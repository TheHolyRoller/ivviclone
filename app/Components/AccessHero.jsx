import React from 'react'
import h from '../Styles/AccessHero.module.css'
import Image from 'next/image'
import HeroBackground from '../../public/images/HeroBackground.webp'

function AccessHero() {
	return (
		<section className={h.hero}>
			<Image className={h.heroBackgroundImage} src={HeroBackground} alt='Background pattern' sizes='100vw' loading="lazy" />
			<div className={h.imageOverlay} />

			<div className={h.heroContentContainer}>
				<div className={h.heroTextContainer}>
					<h1 className={h.heroMainHeader}>ivvi for Work</h1>
				</div>
			</div>
		</section>
	)
}

export default AccessHero