"use client"

import { useState } from "react"
import styles from "../Styles/ContactElement.module.css"

const INITIAL_FORM = {
	name: "",
	email: "",
	mobile: "",
	message: ""
}

function ContactElement({
	title = "Contact us",
	subtitle = "Kindly fill out the form below to send us a message",
	imageSrc = "/images/contact%20image.png",
	imageAlt = "Support advisor with a headset"
}) {
	const [formInput, setFormInput] = useState(INITIAL_FORM)
	const [submitted, setSubmitted] = useState(false)
	const [isSubmitting, setIsSubmitting] = useState(false)

	const handleInput = (event) => {
		const { name, value } = event.target

		setFormInput((prevState) => ({
			...prevState,
			[name]: value
		}))
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		setIsSubmitting(true)
		setSubmitted(true)
		setFormInput(INITIAL_FORM)
		setIsSubmitting(false)
	}

	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<div className={styles.formBlock}>
					<h1 className={styles.heading}>{title}</h1>
					<p className={styles.bodyCopy}>{subtitle}</p>

					<form className={styles.form} onSubmit={handleSubmit}>
						<input
							className={styles.formInput}
							placeholder="Name*"
							name="name"
							value={formInput.name}
							type="text"
							required
							onChange={handleInput}
							aria-label="Name"
						/>

						<input
							className={styles.formInput}
							placeholder="Email*"
							name="email"
							value={formInput.email}
							type="email"
							required
							onChange={handleInput}
							aria-label="Email"
						/>

						<input
							className={styles.formInput}
							placeholder="Mobile"
							name="mobile"
							value={formInput.mobile}
							type="tel"
							onChange={handleInput}
							aria-label="Mobile"
						/>

						<textarea
							className={styles.formInput}
							id={styles.textAreaInput}
							placeholder="Please tell us what do you want to know:"
							name="message"
							value={formInput.message}
							required
							onChange={handleInput}
							aria-label="Message"
						/>

						<button className={styles.submitButton} type="submit" disabled={isSubmitting}>
							{isSubmitting ? "Submitting..." : "Submit"}
						</button>
					</form>

					{submitted && <p className={styles.successText}>Thanks, we will get back to you shortly.</p>}
				</div>

				<div className={styles.imageWrap}>
					<img className={styles.contactImage} src={imageSrc} alt={imageAlt} loading="lazy" />
				</div>
			</div>
		</section>
	)
}

export default ContactElement
