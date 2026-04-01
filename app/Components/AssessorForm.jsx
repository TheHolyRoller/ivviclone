'use client'
import React from 'react'
import c from '../Styles/AssessorForm.module.css'
import { useState } from 'react'

const resources = ['DSA Assessors Guide', 'Free Demo Licence (3 years)', 'One-to-one Training', 'Training Newsletter']
const initialFormInput = {
	name: '',
	email: '',
	mobile: '',
	message: ''
}

function AssessorForm() {
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
					<form className={c.contactForm} action='https://submit-form.com/YRsAOjssR' onSubmit={handleSubmit}>
						<input className={c.formInput} placeholder='Name*' name='name' value={formInput.name} type='text' required onChange={handleInput} />
						<input className={c.formInput} placeholder='Email*' name='email' value={formInput.email} type='email' required onChange={handleInput} />
						<textarea className={c.formInput} id={c.textAreaInput} placeholder='Your role' name='message' value={formInput.message} required onChange={handleInput} />
						<input className={c.formInput} placeholder='Mobile' name='mobile' value={formInput.mobile} type='tel' onChange={handleInput} />

						<button className={c.submitButton} type='submit' disabled={isSubmitting}>
							{isSubmitting ? 'Submitting...' : 'Submit'}
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default AssessorForm