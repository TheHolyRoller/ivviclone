import styles from "../Styles/TeamProfile.module.css"
import Image from "next/image"

function TeamProfile({
	name,
	paragraphs,
	imageSrc,
	imageAlt
}) {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.textBlock}>
					<h2 className={styles.heading}>{name}</h2>

					{paragraphs.map((paragraph) => (
						<p key={paragraph} className={styles.bodyCopy}>
							{paragraph}
						</p>
					))}
				</div>

				<div className={styles.imageWrap}>
					<Image
						className={styles.profileImage}
						src={imageSrc}
						alt={imageAlt}
						width={700}
						height={900}
						sizes="(max-width: 768px) 100vw, 40vw"
						loading="lazy"
					/>
				</div>
			</div>
		</section>
	)
}

export default TeamProfile
