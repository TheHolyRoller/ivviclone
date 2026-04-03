import styles from "../Styles/BlogHero.module.css"
import Image from "next/image"

function BlogHero({
	imageSrc = "/images/blog.png",
	imageAlt = "Student using ivvi mind mapping in a library",
	title = "Why the First AI Tool to Win a Bett SEND Award Is Against AI Summaries",
	paragraphs = [
		"The day ivvi won the 2026 Bett Award for SEND & Inclusion, the Education Secretary opened the Bett conference and announced the government's new AI safety standards for schools.",
		"She said something that stopped me in my tracks:",
		'"AI must be about helping children rise to the challenge of learning. N..."'
	],
	linkLabel = "Continue Reading..."
}) {
	return (
		<article className={styles.card}>
			<div className={styles.imageWrap}>
				<Image
					className={styles.image}
					src={imageSrc}
					alt={imageAlt}
					width={1200}
					height={720}
					loading="lazy"
					sizes="(max-width: 768px) 100vw, 50vw"
				/>
			</div>

			<div className={styles.content}>
				<h1 className={styles.heading}>{title}</h1>

				{paragraphs.map((paragraph) => (
					<p key={paragraph} className={styles.bodyCopy}>
						{paragraph}
					</p>
				))}

				<a href="#" className={styles.readMore}>
					{linkLabel}
				</a>
			</div>
		</article>
	)
}

export default BlogHero
