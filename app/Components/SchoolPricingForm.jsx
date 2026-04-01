'use client'
import React from 'react'
import c from '../Styles/SchoolPricingForm.module.css'
import { useState } from 'react'

const initialFormInput = {
	name: '',
	email: '',
	message: ''
}

function SchoolPricingForm() {
	const [formInput, setFormInput] = useState(initialFormInput)
	const [isSubmitting, setIsSubmitting] = useState(false)

	const handleInput = (event) => {
		const { name, value } = event.target

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
					<h2 className={c.contactFormHeadline}>School Pricing</h2>
					<p className={c.contactFormSupportingText}>To discuss pricing for your school&apos;s needs, please get in touch.</p>
				</div>

				<div className={c.inputFormContainer}>
					<form className={c.contactForm} action='https://submit-form.com/YRsAOjssR' onSubmit={handleSubmit}>
						<input
							className={c.formInput}
							placeholder='Name*'
							name='name'
							value={formInput.name}
							type='text'
							required
							onChange={handleInput}
						/>
						<input
							className={c.formInput}
							placeholder='Email*'
							name='email'
							value={formInput.email}
							type='email'
							required
							onChange={handleInput}
						/>
						<textarea
							rows={1}
							className={c.formInput}
							id={c.textAreaInput}
							placeholder='How can we help?'
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

export default SchoolPricingForm