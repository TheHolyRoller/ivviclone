import React from 'react'
import h from '../Styles/ActionHero.module.css'
import Image from 'next/image'
import action from '../../public/images/action.webp'

function ActionHero() {
	return (
		<section className={h.hero}>
			<Image className={h.heroBackgroundImage} src={action} alt='Learner using ivvi in action' sizes='100vw' priority />
			<div className={h.overlay} />

			<div className={h.heroContentContainer}>
				<h1 className={h.heroTitle}>See ivvi Notes in Action</h1>
			</div>
		</section>
	)
}

export default ActionHero