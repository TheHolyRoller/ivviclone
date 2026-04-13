import styles from "../Styles/ContactInformation.module.css"

function ContactInformation() {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<h2 className={styles.heading}>Contact Information</h2>

				<div className={styles.infoBlock}>
					<p className={styles.line}>
						Media enquiries:
						<a className={styles.link} href="mailto:jo@ivvi.app">
							jo@ivvi.app
						</a>
					</p>
					<p className={styles.line}>
						Website:
						<a className={styles.link} href="https://www.ivvi.app" target="_blank" rel="noopener noreferrer">
							www.ivvi.app
						</a>
					</p>
					<p className={styles.line}>
						LinkedIn:
						<a className={styles.link} href="https://www.linkedin.com/company/ivviapp" target="_blank" rel="noopener noreferrer">
							linkedin.com/company/ivviapp
						</a>
					</p>
					<p className={styles.line}>Founders available for interview:</p>

					<ul className={styles.list}>
						<li className={styles.listItem}>Darius Namdaran, CEO</li>
						<li className={styles.listItem}>Jo Lee, COO</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default ContactInformation
