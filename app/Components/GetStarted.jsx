"use client"

import styles from "../Styles/GetStarted.module.css"


export default function GetStarted() {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<h2 className={styles.title}>Get the Support You Deserve</h2>

				<p className={styles.bodyCopy}>
					The Access to Work grant is a fantastic resource for individuals with dyslexia or ADHD in the UK
					workplace. Its available if you're self-employed, full time, part-time, and for every type of work.
					If you notice dyslexia or ADHD interfering with daily work tasks like organisation, emails, or
					note-taking during meetings, you can apply for this grant and use some of it to fund 3 years of ivvi.
				</p>

				<button className={styles.ctaButton}>Try it now</button>
			</div>
		</section>
	)
}