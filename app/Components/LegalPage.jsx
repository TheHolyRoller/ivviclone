import React from "react"
import styles from "../Styles/LegalPage.module.css"

function LegalPage({ title, children }) {
	return (
		<main className={styles.main}>
			<div className={styles.inner}>
				<h1 className={styles.title}>{title}</h1>
				<div className={styles.body}>{children}</div>
			</div>
		</main>
	)
}

export function LegalH2({ children }) {
	return <h2 className={styles.h2}>{children}</h2>
}

export function LegalH3({ children }) {
	return <h3 className={styles.h3}>{children}</h3>
}

export function LegalList({ children }) {
	return <ul className={styles.list}>{children}</ul>
}

export function LegalListPlain({ children }) {
	return <ul className={styles.listPlain}>{children}</ul>
}

export function LegalA({ href, children }) {
	return (
		<a href={href} className={styles.link}>
			{children}
		</a>
	)
}

export default LegalPage
