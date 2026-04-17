'use client'
import React from 'react'
import c from '../Styles/SchoolPricingForm.module.css'
import { useState } from 'react'

const initialFormInput = {
	name: '',
	email: '',
	message: '',
}

function SchoolPricingForm({ formAction = 'https://submit-form.com/2RJWKQIOQ' }) {
	const [formInput, setFormInput] = useState(initialFormInput)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState('')

	const handleInput = (event) => {
		const { name, value } = event.target

		setFormInput((prevState) => ({
			...prevState,
			[name]: value,
		}))
		setSubmitStatus('')
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setIsSubmitting(true)
		setSubmitStatus('')

		try {
			const payload = new URLSearchParams({
				name: formInput.name,
				email: formInput.email,
				message: formInput.message,
			})

			const response = await fetch(formAction, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					Accept: 'application/json',
				},
				body: payload.toString(),
			})

			if (!response.ok) {
				throw new Error('Request failed')
			}

			setSubmitStatus('Thanks. Your message has been sent.')
			setFormInput(initialFormInput)
		} catch {
			setSubmitStatus('Something went wrong. Please try again.')
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<section className={c.contactFormContainer}>
			<div className={c.contactFormSubContainer}>
				<div className={c.contactFormHeadlineContainer}>
					<h2 className={c.contactFormHeadline}>School Pricing</h2>
					<p className={c.contactFormSupportingText}>To discuss pricing for your school&apos;s needs, please get in touch.</p>
				</div>

				<div className={c.inputFormContainer}>
					<form className={c.contactForm} onSubmit={handleSubmit}>
						<input
							className={c.formInput}
							placeholder="Name*"
							name="name"
							value={formInput.name}
							type="text"
							required
							onChange={handleInput}
						/>
						<input
							className={c.formInput}
							placeholder="Email*"
							name="email"
							value={formInput.email}
							type="email"
							required
							onChange={handleInput}
						/>
						<textarea
							rows={1}
							className={c.formInput}
							id={c.textAreaInput}
							placeholder="How can we help?"
							name="message"
							value={formInput.message}
							required
							onChange={handleInput}
						/>

						<button className={c.submitButton} type="submit" disabled={isSubmitting}>
							{isSubmitting ? 'Submitting...' : 'Submit'}
						</button>
						{submitStatus ? (
							<p className={c.formStatus} aria-live="polite">
								{submitStatus}
							</p>
						) : null}
					</form>
				</div>
			</div>
		</section>
	)
}

export default SchoolPricingForm
