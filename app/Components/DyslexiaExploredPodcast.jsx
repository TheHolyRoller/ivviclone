import React from "react"
import Image from "next/image"
import styles from "../Styles/DyslexiaExploredPodcast.module.css"

const DEFAULT_BODY =
	"Darius Namdaran, founder of ivvi, hosts the Dyslexia Explored Podcast. This is a great resource to discover other people's stories and journeys with dyslexia. Understand how dyslexia affects adults and children. Discover the strategies people have found to thrive."

function DyslexiaExploredPodcast({
	headline = "Dyslexia Explored Podcast",
	body = DEFAULT_BODY,
	ctaLabel = "Listen to the Podcast",
	ctaHref = "https://podcasts.apple.com/gb/podcast/dyslexia-explored/id1387645599",
	imageSrc = "/images/explored.jpg",
	imageAlt = "Illustration representing thinking and learning",
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

export default DyslexiaExploredPodcast
