'use client'
import React from 'react'
import c from '../Styles/ContactForm.module.css'
import { useState } from 'react'

const initialFormInput = {
	name: '',
	email: '',
	mobile: '',
	message: ''
}

function ContactForm() {
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
					<h2 className={c.contactFormHeadline}>Get in Touch</h2>
					<p className={c.contactFormSupportingText}>Email us with any questions.</p>
				</div>

				<div className={c.inputFormContainer}>
					<form className={c.contactForm} action='https://submit-form.com/YRsAOjssR' onSubmit={handleSubmit}>
						<input className={c.formInput} placeholder='Name*' name='name' value={formInput.name} type='text' required onChange={handleInput} />
						<input className={c.formInput} placeholder='Email*' name='email' value={formInput.email} type='email' required onChange={handleInput} />
						<input className={c.formInput} placeholder='Mobile' name='mobile' value={formInput.mobile} type='tel' required onChange={handleInput} />
						<textarea
							rows={1}
							className={c.formInput}
							id={c.textAreaInput}
							placeholder='Please tell us what you would like to know'
							name='message'
							value={formInput.message}
							required
							onChange={handleInput}
						/>

						<button className={c.submitButton} type='submit' disabled={isSubmitting}>
							{isSubmitting ? 'Submitting...' : 'Submit'}
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default ContactForm