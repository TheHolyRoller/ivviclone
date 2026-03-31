import styles from "../Styles/TeamHero.module.css"

function TeamHero({
	title = "The ivvi Team",
	copy = "The team on a mission to help a million people with Dyslexia learn to Mindmap by 2030."
}) {
	return (
		<section className={styles.hero}>
			<div className={styles.overlay} />

			<div className={styles.content}>
				<h1 className={styles.heading}>{title}</h1>
				<p className={styles.bodyCopy}>{copy}</p>
			</div>
		</section>
	)
}

export default TeamHero
