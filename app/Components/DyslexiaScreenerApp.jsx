import React from "react"
import Image from "next/image"
import styles from "../Styles/DyslexiaScreenerApp.module.css"

function DyslexiaScreenerApp({
	headline = "Dyslexia Screener App",
	body = "We have created the top dyslexia screener on the Apple App Store. This free, multimedia interactive quiz gives you an indication of your potential level of dyslexia and the areas you might be feeling it the most.",
	ctaLabel = "Download the Screener",
	ctaHref = "#",
	imageSrc = "/images/screener.webp",
	imageAlt = "Dyslexia quiz app preview",
}) {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.copy}>
					<h2 className={styles.headline}>{headline}</h2>
					<p className={styles.body}>{body}</p>
					<a className={styles.cta} href={ctaHref}>
						{ctaLabel}
					</a>
				</div>

				<div className={styles.media} aria-hidden>
					<div className={styles.imageWrap}>
						<Image
							src={imageSrc}
							alt={imageAlt}
							width={858}
							height={808}
							fill
							className={styles.image}
							sizes="(max-width: 900px) 88vw, 440px"
							loading="lazy"
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default DyslexiaScreenerApp

