import React from 'react'
import c from '../Styles/ContactForm.module.css'; 

import {useState, useEffect } from 'react'; 

// Add in the form spark creds & imports here 




function ContactForm() {


  // Add in the state management here 



  // Add in the global variables here 


  // Add in the function definitions here 


  // Add in useEffect hooks here 


  // Add in the event handlers here 

  const handleInput = () => {


    // Take the global state management here 
    




  }


  const onSubmit = () => {







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


        <form className={c.contactForm} onSubmit={handleSubmit} >



          {/* Add in the input fields here  */}     


          {/* Add in the on change event handler here  */}
          <input className={c.formInput} placeholder='Name*' type='text' required onChange={handleInput}  /> 







        {/* Add in the submit button here  */}

        <button type='submit'>

          Submit 


        </button>






        </form>







        </div>



      </div>
    </section>

)
}

export default ContactForm