import React from 'react'
import h from '../Styles/SupportHero.module.css'
import lamp from '../../public/images/lamp.png'

import Image from 'next/image'

function SupportHero() {
	return (
		<main className={h.hero}>
			<Image
				className={h.heroBackgroundImage}
				src={lamp}
				alt=""
				fill
				priority
				sizes="100vw"
				quality={95}
			/>
			

			<section className={h.heroContentContainer}>
				<div className={h.heroTextContainer}>
					<h1 className={h.heroMainHeader}>
						ivvi Customer
						<br />
						Support
					</h1>

					<article className={h.heroSupportingText}>
						We love to help.

						<p className={h.text}>Please Contact us below.</p>
					</article>
				</div>
			</section>
		</main>
	)
}

export default SupportHero
