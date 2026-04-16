'use client'
import React from 'react'
import c from '../Styles/ContactForm.module.css'; 

import {useState } from 'react'; 





function ContactForm({ formAction = "https://submit-form.com/YRsAOjssR" }) {


  const [formInput, setFormInput] = useState({

    name: "", 
    email: "", 
    mobile: "", 
    message: ""


  }); 

  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [submitStatus, setSubmitStatus] = useState("");
  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });



  // Add in the global variables here 



  // Add in the function definitions here 


  // Add in the event handlers here 

  const handleInput = (e) => {


    // Take the global state management here 

    const {name, value} = e.target; 


    setFormInput(prevState => ({

      ...prevState,
      [name]: value 


    }));
    setSubmitStatus("");

  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      const payload = new URLSearchParams({
        name: formInput.name,
        email: formInput.email,
        mobile: formInput.mobile,
        message: formInput.message,
      });

      const response = await fetch(formAction, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
        body: payload.toString(),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setSubmitStatus("Thanks. Your message has been sent.");
      setFormInput({
        name: "",
        email: "",
        mobile: "",
        message: "",
      });
    } catch (error) {
      console.error("failed to submit form! \n", error);
      setSubmitStatus("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }




  return (
    
    <section className={c.contactFormContainer}>

      {/* Add in the sub container here  */}
    
      <div className={c.contactFormSubContainer}>
        
        {/* Add in the contact form headline section here  */}
        <div className={c.contactFormHeadlineContainer}>

          {/* Add in the main headline here  */}
          <h5 className={c.contactFormHeadline}>

          Get in Touch


          </h5>

          <div className={c.contactFormSupportingText}>

          Email us with any questions.



          </div>

        </div>


        {/* add in the input section here  */}

        <div className={c.inputFormContainer}>


        <form className={c.contactForm} onSubmit={handleSubmit}>



          <input className={c.formInput} placeholder='Name*' name="name" value={formInput.name} type='text' required onChange={handleInput}  /> 

          <input className={c.formInput} placeholder="Email*" name="email" value={formInput.email} type="text" required onChange={handleInput} /> 
          <input className={c.formInput} placeholder="Mobile" name="mobile" value={formInput.mobile} type="text" onChange={handleInput}/> 
          <textarea rows={1} className={c.formInput} id={c.textAreaInput} placeholder="Please tell us what you want to know" name="message" value={formInput.message} type="text" required onChange={handleInput}/>





        {/* Add in the submit button here  */}

        <button className={c.submitButton} type='submit' disabled={isSubmitting}>

          {isSubmitting ? "Submitting..." : "Submit"}

        </button>
        {submitStatus && (
          <p aria-live="polite" style={{ marginTop: "0.75rem" }}>
            {submitStatus}
          </p>
        )}
        </form>
        </div>

      </div>
    </section>

)
}

export default ContactForm