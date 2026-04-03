import React from "react"
import Link from "next/link"
import LegalPage, { LegalA } from "../LegalPage"
import { IVVI_APP_URL } from "../ivviAppUrl"
import styles from "../../Styles/LegalPage.module.css"

export default function IvviContent() {
	return (
		<LegalPage title="ivvi">
			<p>
				ivvi Notes is instant visual note-taking assistive technology: it turns lecture and meeting content into structured
				visual notes in real time, designed to support neurodiverse learners and anyone who benefits from mind maps and
				clear, visual structure.
			</p>
			<p>
				Whether you access ivvi through education, Access to Work, or as an individual, you get tools that work alongside
				how you think—so you can listen, capture, and review with less friction.
			</p>
			<p>
				<LegalA href={IVVI_APP_URL}>Try ivvi Notes</LegalA> or explore{" "}
				<Link href="/students" className={styles.link}>
					Students
				</Link>
				,{" "}
				<Link href="/schools" className={styles.link}>
					Schools
				</Link>
				, and{" "}
				<Link href="/pricing" className={styles.link}>
					Pricing
				</Link>{" "}
				on this site.
			</p>
		</LegalPage>
	)
}

