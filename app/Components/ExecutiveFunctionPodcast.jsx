import React from "react"
import Image from "next/image"
import styles from "../Styles/ExecutiveFunctionPodcast.module.css"

function ExecutiveFunctionPodcast({
	headline = "Executive Function Podcast",
	body = "Darius Namdaran, founder of ivvi, co-hosts the Executive Function Podcast. Ideal for understanding how your brain gets things done (executive function) and how it affects the organisation in the workplace. Very helpful for dyslexia and ADHD.",
	ctaLabel = "Listen to the Podcast",
	ctaHref = "https://podcasts.apple.com/us/podcast/executive-function-brain-trainer-podcast/id1588400094",
	imageSrc = "/images/brain.jpg",
	imageAlt = "Executive Function Brain Trainer podcast cover",
}) {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.media}>
					<div className={styles.imageWrap}>
						<Image
							className={styles.image}
							src={imageSrc}
							alt={imageAlt}
							width={760}
							height={760}
							sizes="(max-width: 900px) 88vw, 380px"
							loading="lazy"
						/>
					</div>
				</div>

				<div className={styles.copy}>
					<h2 className={styles.headline}>{headline}</h2>
					<p className={styles.body}>{body}</p>

					<a
						className={styles.cta}
						href={ctaHref}
						target="_blank"
						rel="noopener noreferrer"
					>
						{ctaLabel}
					</a>
				</div>
			</div>
		</section>
	)
}

export default ExecutiveFunctionPodcast

