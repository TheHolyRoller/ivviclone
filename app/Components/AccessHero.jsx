import React from 'react'
import h from '../Styles/AccessHero.module.css'
import Image from 'next/image'
import access from '../../public/images/access.jpeg'

function AccessHero() {
	return (
		<section className={h.hero}>
			<Image className={h.heroBackgroundImage} src={access} alt='Office team discussing work' />
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