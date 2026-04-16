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
	message: ''
}

function Query({
	headline = "Do you have any DSA-related questions?"
}) {
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
				<h2
					style={{
						textAlign: "center",
						margin: "0 auto 1.25rem",
						maxWidth: "28ch",
						color: "#013699",
					}}
				>
					{headline}
				</h2>
				<div className={c.inputFormContainer}>
					<form className={c.contactForm} action='https://submit-form.com/YRsAOjssR' onSubmit={handleSubmit}>
						<Image src={darius} alt='People discussing study support' className={c.image} loading="lazy" />

						<input className={c.formInput} placeholder='Name*' name='name' value={formInput.name} type='text' required onChange={handleInput} />
						<input className={c.formInput} placeholder='Email*' name='email' value={formInput.email} type='email' required onChange={handleInput} />
						<input className={c.formInput} placeholder='Mobile' name='mobile' value={formInput.mobile} type='tel' onChange={handleInput} />
						<textarea className={c.formInput} id={c.textAreaInput} placeholder='Please tell us what you would like to know' name='message' value={formInput.message} required onChange={handleInput} />

						<button className={c.submitButton} type='submit' disabled={isSubmitting}>
							{isSubmitting ? 'Submitting...' : 'Submit'}
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default Query