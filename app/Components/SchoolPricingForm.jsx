'use client'
import React from 'react'
import c from '../Styles/SchoolPricingForm.module.css'; 

import {useState, useEffect } from 'react'; 



function SchoolPricingForm() {


  const [formInput, setFormInput] = useState({

    name: "", 
    email: "", 
    mobile: "", 
    message: ""


  }); 


  const [isSubmitting, setIsSubmitting] = useState(false); 


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

          {/* Get in Touch */}
          {/* Request Assessor Resources */}
          {/* Dyslexia Specialist */}



          </h5>

          <div className={c.contactFormSupportingText}>

          {/* Email us with any questions. */}
          {/* We can send you a range of Free resources: */}
          {/* Join our dyslexia specialist email list and get updates on ivvi related news  */}
          To discuss pricing for your school's needs, please get in touch



          </div>



        </div>


        {/* add in the input section here  */}

        <div className={c.inputFormContainer}>


        <form className={c.contactForm} action="https://submit-form.com/YRsAOjssR" >



          <input className={c.formInput} placeholder='Name*' name="name" value={formInput.name} type='text' required onChange={handleInput}  /> 
          <input className={c.formInput} placeholder="Email*" name="email" value={formInput.email} type="text" required onChange={handleInput} /> 
          <textarea rows={1} className={c.formInput} id={c.textAreaInput} placeholder="How can we help?" name="message" value={formInput.message} type="text" required onChange={handleInput}/>


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

export default SchoolPricingForm; 