import styles from "../Styles/KeyStatistics.module.css"

const KEY_STATS = [
	"BETT Award Winner 2026 — SEND and Inclusion Resources & Services category",
	"First AI-native product to win Bett SEND and Inclusion Resources & Services Award",
	"First Scottish company to win Bett SEND and Inclusion Award",
	"One of only 2 DSA-approved products (out of ~95) to ever win a Bett award",
	"University of Edinburgh AI accelerator company",
	"UK distribution partner: Aventido",
	"Mission: Help 1 million students with dyslexia learn to mind map by 2030",
]

function KeyStatistics() {
	return (
		
		<section className={styles.section}>
			<div className={styles.inner}>
				<h2 className={styles.heading}>ivvi Key Statistics</h2>
				<ul className={styles.list}>
					{KEY_STATS.map((item) => (
						<li key={item} className={styles.listItem}>
							{item}
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default KeyStatistics
