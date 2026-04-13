import Image from "next/image"
import styles from "../Styles/PreApprovedQuotes.module.css"
import dariusDark from "../../public/images/darius_dark.webp"
import joLeft from "../../public/images/jo_left.webp"

function PreApprovedQuotes() {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<h2 className={styles.heading}>Pre-approved Quotes</h2>

				<div className={styles.quoteRow}>
					<div className={styles.avatarWrap}>
						<Image src={dariusDark} alt="Darius portrait" className={styles.avatar} sizes="185px" loading="lazy" quality={100} />
					</div>
					<div className={styles.quoteCopy}>
						<h3 className={styles.name}>Darius Namdaran, CEO:</h3>
						<p className={styles.quoteText}>
							"For anyone who&apos;s ever been told their visual, dyslexic brain is a weakness: It&apos;s not. It&apos;s different. And different is exactly what education
							needs."
						</p>
						<p className={styles.quoteText}>
							"We don&apos;t use AI to give students the answers, we use it to help them think. ivvi is a filtering tool, not a summarisation tool."
						</p>
					</div>

					
				</div>

				<div className={styles.quoteRow}>
					<div className={styles.avatarWrap}>
						<Image src={joLeft} alt="Jo portrait" className={styles.avatar} sizes="185px" loading="lazy" quality={100} />
					</div>
					<div className={styles.quoteCopy}>
						<h3 className={styles.name}>Jo Lee, COO:</h3>
						<p className={styles.quoteText}>
							"The journey to ivvi began with teaching our dyslexic daughter how to mind map so that she could pass her exams. The mission is to see every student with dyslexia
							equipped with the tools that they need to succeed in their studies."
						</p>
						<p className={styles.quoteText}>
							"One year ago, we were working hard to get our first sale over the line and now students at universities across the UK are being recommended ivvi Notes every day
							through their Disabled Students&apos; Allowance. That&apos;s quite a transformation."
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default PreApprovedQuotes
