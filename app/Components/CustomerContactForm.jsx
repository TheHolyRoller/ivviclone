'use client'
import React from 'react'
import c from '../Styles/CustomerContactForm.module.css'; 
import {useState, useEffect } from 'react'; 
import support from '../../public/images/support.webp'; 
import Image from 'next/image';

function CustomerContactForm({
  formAction = "https://submit-form.com/DTcJ7Bccp",
}) {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("") 



  // Add in the global variables here 



  // Add in the function definitions here 


  // Add in useEffect hooks here 

  // Add in the useEffect hook here that will take the inputted values and submit them to the form spark api endpoint. 
  useEffect(() => {

      // Use this use Effect hook to keep track of state input variables 

      console.log("this is the updated state \n", formInput); 




  }, [formInput]); 


  // Add in the submitting useEffect here 
  useEffect(() => {


    console.log("updating the input variables"); 


  }, [formInput]);


  // Add in the event handlers here 

  const handleInput = (e) => {


    // Take the global state management here 

    const {name, value} = e.target; 
    console.log('this is the user input', name, value); 


    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }))
    setSubmitStatus("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("")

    try {
      const payload = new URLSearchParams({
        name: formInput.name,
        email: formInput.email,
        mobile: formInput.mobile,
        message: formInput.message,
      })

      const response = await fetch(formAction, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: payload.toString(),
      })

      if (!response.ok) {
        throw new Error("Request failed")
      }

      setSubmitStatus("Thanks. Your message has been sent.")
      setFormInput({
        name: "",
        email: "",
        mobile: "",
        message: "",
      })
    } catch (error) {
      console.error("failed to submit form! \n", error)
      setSubmitStatus("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }




  return (
    
    <section className={c.contactFormContainer}>

      {/* Add in the sub container here  */}

      {/* Add in the image  */}
    
      <div className={c.contactFormSubContainer}>
        
        {/* Add in the contact form headline section here  */}
        <div className={c.contactFormHeadlineContainer}>

          {/* Add in the main headline here  */}
          <h2 className={c.contactFormHeadline}>

          {/* Get in Touch */}
          Contact Us With Questions


          </h2>

          <div className={c.contactFormSupportingText}>

          {/* Email us with any questions. */}
          {/* Contact Us With Questions */}



          </div>

        </div>


        {/* add in the input section here  */}

        <div className={c.inputFormContainer}>


        <form className={c.contactForm} onSubmit={handleSubmit}>



          <input className={c.formInput} placeholder='Name*' name="name" value={formInput.name} type='text' required onChange={handleInput}  /> 

          <input className={c.formInput} placeholder="Email*" name="email" value={formInput.email} type="text" required onChange={handleInput} /> 
          <input className={c.formInput} placeholder="Mobile" name="mobile" value={formInput.mobile} type="text" required onChange={handleInput}/> 
          <textarea rows={4} className={`${c.formInput} ${c.textArea}`} placeholder="Please tell us what you would like to know" name="message" value={formInput.message} required onChange={handleInput}/>





        {/* Add in the submit button here  */}

        <div className={c.buttonContainer}>

        <button
          className={c.submitButton}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>

        </div>

        {submitStatus ? (
          <p className={c.formStatus} aria-live="polite">
            {submitStatus}
          </p>
        ) : null}

        </form>
        </div>

      </div>


    <Image src={support} alt="customer support" width={722} height={722} className={c.image} sizes="(max-width: 1023px) min(480px, 92vw), 722px" loading="lazy" /> 




    </section>

)
}

export default CustomerContactForm