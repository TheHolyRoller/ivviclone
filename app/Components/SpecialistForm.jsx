'use client'
import React from 'react'
import c from '../Styles/SpecialistForm.module.css'
import { useState } from 'react'

const initialFormInput = {
	name: '',
	email: '',
	mobile: '',
	message: ''
}

function SpecialistForm() {
	const [formInput, setFormInput] = useState(initialFormInput)

	const [isSubmitting, setIsSubmitting] = useState(false)

	const handleInput = (e) => {
		const { name, value } = e.target

		setFormInput((prevState) => ({
			...prevState,
			[name]: value
		}))
	}

	const handleSubmit = () => {
		setIsSubmitting(true)

		setTimeout(() => {
			setFormInput(initialFormInput)
			setIsSubmitting(false)
		}, 900)
	}

	return (
		<section className={c.contactFormContainer}>
			<div className={c.contactFormSubContainer}>
				<div className={c.contactFormHeadlineContainer}>
					<h2 className={c.contactFormHeadline}>Dyslexia Specialist</h2>
					<p className={c.contactFormSupportingText}>Join our specialist email list and get ivvi updates.</p>
				</div>

				<div className={c.inputFormContainer}>
					<form className={c.contactForm} action='https://submit-form.com/YRsAOjssR' onSubmit={handleSubmit}>
						<input className={c.formInput} placeholder='Name*' name='name' value={formInput.name} type='text' required onChange={handleInput} />
						<input className={c.formInput} placeholder='Email*' name='email' value={formInput.email} type='email' required onChange={handleInput} />
						<textarea className={c.formInput} id={c.textAreaInput} placeholder='Your role' name='message' value={formInput.message} required onChange={handleInput} />

						<button className={c.submitButton} type='submit' disabled={isSubmitting}>
							{isSubmitting ? 'Submitting...' : 'Add me to list'}
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default SpecialistForm