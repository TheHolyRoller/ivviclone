import Link from "next/link"
import styles from "../Styles/GetStarted.module.css"
import { IVVI_APP_URL } from "./ivviAppUrl"

export default function GetStarted() {
	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<h2 className={styles.title}>Get the Support You Deserve</h2>

				<p className={styles.bodyCopy}>
					The Access to Work grant is a strong support option for people with dyslexia or ADHD in the UK workplace.
					It&apos;s available if you&apos;re self-employed, full-time, part-time, and across different roles.
				</p>

				<p className={styles.bodyCopy}>
					If you notice dyslexia or ADHD interfering with daily work tasks like organisation, emails, or
					note-taking during meetings, you can apply for the grant and use part of it to fund 3 years of ivvi.
				</p>

				<Link
					className={styles.ctaButton}
					href={IVVI_APP_URL}
					target="_blank"
					rel="noopener noreferrer"
				>
					Try it now
				</Link>
			</div>
		</section>
	)
}