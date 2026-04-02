import React from "react"
import Image from "next/image"
import styles from "../Styles/ResourcesHero.module.css"

function ResourcesHero({
	title = "Resources Page",
	imageSrc = "/images/resources-hero.png",
	imageAlt = "Team collaborating around a table with notes and laptops",
	showText = true,
	showOverlay = true,
}) {
	const shouldShowText = Boolean(showText && title)
	return (
		<section className={styles.hero}>
			<div className={styles.imageLayer}>
				<Image
					src={imageSrc}
					alt={imageAlt}
					fill
					className={styles.bgImage}
					sizes="100vw"
					quality={100}
					priority
				/>
				{showOverlay ? <div className={styles.overlay} aria-hidden /> : null}
			</div>
			<div className={styles.inner}>
				{shouldShowText ? <h1 className={styles.title}>{title}</h1> : null}
			</div>
		</section>
	)
}

export default ResourcesHero
