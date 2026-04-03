import styles from "../Styles/Training.module.css"
import Image from "next/image"

function Training({
	title = "Training",
	copy = "Once you receive your award letter, you can purchase the recommended software, hardware, and training from providers of your choice. We offer mind mapping training and can guide you to other reputable speech-to-text and text-to-speech service providers.",
	imageSrc = "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=1200&q=80",
	imageAlt = "Person attending an online training call"
}) {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.textBlock}>
					<h2 className={styles.heading}>{title}</h2>
					<p className={styles.bodyCopy}>{copy}</p>
				</div>

				<div className={styles.imageBlock}>
					<Image
						className={styles.image}
						src={imageSrc}
						alt={imageAlt}
						width={1200}
						height={720}
						sizes="(max-width: 768px) 100vw, 45vw"
						loading="lazy"
					/>
				</div>
			</div>
		</section>
	)
}

export default Training
