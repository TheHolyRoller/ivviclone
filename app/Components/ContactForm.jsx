'use client'
import React from 'react'
import c from '../Styles/ContactForm.module.css'; 

import {useState, useEffect } from 'react'; 





function ContactForm() {


  const [formInput, setFormInput] = useState({

    name: "", 
    email: "", 
    mobile: "", 
    message: ""


  }); 

  const [isSubmitting, setIsSubmitting] = useState(false); 



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


    setFormInput(prevState => ({

      ...prevState,
      [name]: value 


    }))
    

  }


  const handleSubmit = () => {


        try{


          console.log('this is the final state \n', formInput); 



        }
        catch(error){


          console.error("failed to submit form! \n", error); 


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


        <form className={c.contactForm} action="https://submit-form.com/YRsAOjssR" >



          <input className={c.formInput} placeholder='Name*' name="name" value={formInput.name} type='text' required onChange={handleInput}  /> 

          <input className={c.formInput} placeholder="Email*" name="email" value={formInput.email} type="text" required onChange={handleInput} /> 
          <input className={c.formInput} placeholder="Mobile" name="mobile" value={formInput.mobile} type="text" required onChange={handleInput}/> 
          <textarea rows={1} className={c.formInput} id={c.textAreaInput} placeholder="Please tell us what you want to know" name="message" value={formInput.message} type="text" required onChange={handleInput}/>





        {/* Add in the submit button here  */}

        <button className={c.submitButton} type='submit'>

          Submit 

        </button>
        </form>
        </div>

      </div>
    </section>

)
}

export default ContactForm