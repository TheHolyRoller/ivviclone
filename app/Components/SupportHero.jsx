import React from 'react'
import h from '../Styles/SupportHero.module.css'
import lamp from '../../public/images/lamp-1.webp'

import Image from 'next/image'

function SupportHero() {
	return (
		<main className={h.hero}>
			<Image
				className={h.heroBackgroundImage}
				src={lamp}
				alt=""
				width={1600}
				height={900}
				fill
				sizes="100vw"
				loading="lazy"
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
