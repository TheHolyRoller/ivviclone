'use client'
import React from 'react'
import c from '../Styles/Query.module.css'
import Image from 'next/image'
import { useState } from 'react'
import darius from '../../public/images/darius.webp'

const initialFormInput = {
	name: '',
	email: '',
	mobile: '',
	message: '',
}

function Query({
	headline = 'Do you have any DSA-related questions?',
	formAction = 'https://submit-form.com/7BxKPIfwE',
}) {
	const [formInput, setFormInput] = useState(initialFormInput)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState('')

	const handleInput = (e) => {
		const { name, value } = e.target

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
				mobile: formInput.mobile,
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
				<h2 className={c.headline}>
					{headline}
				</h2>
				<div className={c.inputFormContainer}>
					<form className={c.contactForm} onSubmit={handleSubmit}>
						<Image src={darius} alt="People discussing study support" className={c.image} loading="lazy" />

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
						<input
							className={c.formInput}
							placeholder="Mobile"
							name="mobile"
							value={formInput.mobile}
							type="tel"
							onChange={handleInput}
						/>
						<textarea
							className={c.formInput}
							id={c.textAreaInput}
							placeholder="Please tell us what you would like to know"
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

export default Query
