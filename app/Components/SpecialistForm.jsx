'use client'
import React from 'react'
import c from '../Styles/SpecialistForm.module.css'
import { useState } from 'react'
import {
	sanitizeAssessorContactInput,
	validateAssessorContact,
	hasFieldErrors,
} from '@/lib/assessorsContactForm'

const initialFormInput = {
	name: '',
	email: '',
	message: '',
}

const emptyFieldErrors = () => ({
	name: '',
	email: '',
	message: '',
	mobile: '',
})

const formAction = 'https://submit-form.com/5N19GNBUq'

function SpecialistForm() {
	const [formInput, setFormInput] = useState(initialFormInput)
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [fieldErrors, setFieldErrors] = useState(emptyFieldErrors)
	const [formMessage, setFormMessage] = useState('')

	const handleInput = (e) => {
		const { name, value } = e.target
		setFormInput((prevState) => ({
			...prevState,
			[name]: value,
		}))
		setFieldErrors((prev) => ({ ...prev, [name]: '' }))
		setFormMessage('')
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setFormMessage('')
		setFieldErrors(emptyFieldErrors())

		const sanitized = sanitizeAssessorContactInput(
			{ ...formInput, mobile: '' },
			{ includeMobile: false }
		)
		setFormInput({
			name: sanitized.name,
			email: sanitized.email,
			message: sanitized.message,
		})

		const errors = validateAssessorContact(sanitized, { mobileOptional: true })
		if (hasFieldErrors(errors)) {
			setFieldErrors(errors)
			setFormMessage('Please fix the highlighted fields.')
			return
		}

		setIsSubmitting(true)
		try {
			const payload = new URLSearchParams({
				name: sanitized.name,
				email: sanitized.email,
				message: sanitized.message,
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
				setFormMessage('Something went wrong. Please try again.')
				return
			}

			setFormInput(initialFormInput)
			setFormMessage('Thanks — you have been added to the list.')
		} catch {
			setFormMessage('Something went wrong. Please try again.')
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<section className={c.contactFormContainer}>
			<div className={c.contactFormSubContainer}>
				<div className={c.contactFormHeadlineContainer}>
					<h2 className={c.contactFormHeadline}>Dyslexia Specialist</h2>
					<p className={c.contactFormSupportingText}>Join our specialist email list and get ivvi updates.</p>
				</div>

				<div className={c.inputFormContainer}>
					<form className={c.contactForm} onSubmit={handleSubmit} noValidate>
						<input
							className={`${c.formInput} ${fieldErrors.name ? c.formInputError : ''}`}
							placeholder="Name*"
							name="name"
							value={formInput.name}
							type="text"
							autoComplete="name"
							aria-invalid={fieldErrors.name ? 'true' : 'false'}
							aria-describedby={fieldErrors.name ? 'specialist-name-error' : undefined}
							onChange={handleInput}
						/>
						{fieldErrors.name ? (
							<p id="specialist-name-error" className={c.fieldError} role="alert">
								{fieldErrors.name}
							</p>
						) : null}

						<input
							className={`${c.formInput} ${fieldErrors.email ? c.formInputError : ''}`}
							placeholder="Email*"
							name="email"
							value={formInput.email}
							type="email"
							autoComplete="email"
							inputMode="email"
							aria-invalid={fieldErrors.email ? 'true' : 'false'}
							aria-describedby={fieldErrors.email ? 'specialist-email-error' : undefined}
							onChange={handleInput}
						/>
						{fieldErrors.email ? (
							<p id="specialist-email-error" className={c.fieldError} role="alert">
								{fieldErrors.email}
							</p>
						) : null}

						<textarea
							className={`${c.formInput} ${fieldErrors.message ? c.formInputError : ''}`}
							id={c.textAreaInput}
							placeholder="Your role"
							name="message"
							value={formInput.message}
							aria-invalid={fieldErrors.message ? 'true' : 'false'}
							aria-describedby={fieldErrors.message ? 'specialist-message-error' : undefined}
							onChange={handleInput}
						/>
						{fieldErrors.message ? (
							<p id="specialist-message-error" className={c.fieldError} role="alert">
								{fieldErrors.message}
							</p>
						) : null}

						<button className={c.submitButton} type="submit" disabled={isSubmitting}>
							{isSubmitting ? 'Submitting...' : 'Add me to list'}
						</button>
						{formMessage ? (
							<p className={c.formStatus} aria-live="polite">
								{formMessage}
							</p>
						) : null}
					</form>
				</div>
			</div>
		</section>
	)
}

export default SpecialistForm
