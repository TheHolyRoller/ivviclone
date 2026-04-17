'use client'
import React from 'react'
import c from '../Styles/AssessorForm.module.css'
import { useState } from 'react'
import {
	sanitizeAssessorContactInput,
	validateAssessorContact,
	hasFieldErrors,
} from '@/lib/assessorsContactForm'

const resources = ['DSA Assessors Guide', 'Free Demo Licence (3 years)', 'One-to-one Training', 'Training Newsletter']

const initialFormInput = {
	name: '',
	email: '',
	mobile: '',
	message: '',
}

const emptyFieldErrors = () => ({
	name: '',
	email: '',
	message: '',
	mobile: '',
})

const formAction = '/api/contact/assessors'

function AssessorForm() {
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

		const sanitized = sanitizeAssessorContactInput(formInput, { includeMobile: true })
		setFormInput(sanitized)

		const errors = validateAssessorContact(sanitized, { mobileOptional: true })
		if (hasFieldErrors(errors)) {
			setFieldErrors(errors)
			setFormMessage('Please fix the highlighted fields.')
			return
		}

		setIsSubmitting(true)
		try {
			const response = await fetch(formAction, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify({
					formKind: 'assessor-resources',
					...sanitized,
				}),
			})

			const data = await response.json().catch(() => ({}))

			if (!response.ok) {
				if (data.errors && typeof data.errors === 'object') {
					setFieldErrors((prev) => ({ ...prev, ...data.errors }))
				}
				setFormMessage(data.message || 'Something went wrong. Please try again.')
				return
			}

			setFormInput(initialFormInput)
			setFormMessage(data.message || 'Thanks — we have received your request.')
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
					<h2 className={c.contactFormHeadline}>Request Assessor Resources</h2>
					<p className={c.contactFormSupportingText}>We can send you a free resource pack:</p>

					<ul className={c.list}>
						{resources.map((resource) => (
							<li className={c.listItem} key={resource}>
								{resource}
							</li>
						))}
					</ul>
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
							aria-describedby={fieldErrors.name ? 'assessor-name-error' : undefined}
							onChange={handleInput}
						/>
						{fieldErrors.name ? (
							<p id="assessor-name-error" className={c.fieldError} role="alert">
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
							aria-describedby={fieldErrors.email ? 'assessor-email-error' : undefined}
							onChange={handleInput}
						/>
						{fieldErrors.email ? (
							<p id="assessor-email-error" className={c.fieldError} role="alert">
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
							aria-describedby={fieldErrors.message ? 'assessor-message-error' : undefined}
							onChange={handleInput}
						/>
						{fieldErrors.message ? (
							<p id="assessor-message-error" className={c.fieldError} role="alert">
								{fieldErrors.message}
							</p>
						) : null}

						<input
							className={`${c.formInput} ${fieldErrors.mobile ? c.formInputError : ''}`}
							placeholder="Mobile"
							name="mobile"
							value={formInput.mobile}
							type="tel"
							autoComplete="tel"
							inputMode="tel"
							aria-invalid={fieldErrors.mobile ? 'true' : 'false'}
							aria-describedby={fieldErrors.mobile ? 'assessor-mobile-error' : undefined}
							onChange={handleInput}
						/>
						{fieldErrors.mobile ? (
							<p id="assessor-mobile-error" className={c.fieldError} role="alert">
								{fieldErrors.mobile}
							</p>
						) : null}

						<button className={c.submitButton} type="submit" disabled={isSubmitting}>
							{isSubmitting ? 'Submitting...' : 'Submit'}
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

export default AssessorForm
