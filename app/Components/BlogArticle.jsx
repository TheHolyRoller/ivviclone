import styles from "../Styles/BlogArticle.module.css"
import Image from "next/image"

function BlogArticle({
	imageSrc = "/images/bett%20award.jpg",
	imageAlt = "ivvi team receiving a Bett award",
	title = "Our Story So Far. From Our Daughter's Bedroom Floor to Bett Award Winners",
	paragraphs = [
		"Nine and a half years ago, a 15-year-old girl was sobbing on her bedroom floor, surrounded by notes.",
		"She was top of her class. She'd rewritten and reread her notes for months. Nothing stuck. She failed an important exam. It was like a wall of words had collapsed on her.",
		"That girl was our daughter....."
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
					sizes="(max-width: 768px) 100vw, 50vw"
					loading="lazy"
				/>
			</div>

			<div className={styles.content}>
				<h2 className={styles.heading}>{title}</h2>

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

export default BlogArticle
