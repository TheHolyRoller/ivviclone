import React from 'react'
import sp from '../Styles/DSASteps.module.css'; 
import table from '../../public/images/table group.png'; 
import Image from 'next/image';
import cert from '../../public/images/cert.png'; 
import boy from '../../public/images/boy lp.png'; 
import lpt from '../../public/images/lap t.png' ; 
import grant from '../../public/images/grant.png'; 



function DSASteps() {
  return (
    <section className={sp.mainContainer}>


    <div className={sp.subContainer}>

        {/* Add in the headline here  */}

        <div className={sp.headline}>

        Here are the steps:

        </div>

        {/* Add in the grid container here  */}
        <ul className={sp.flexContainer}>

        <li className={sp.gridSubContainer}>

            {/* Add in the image container here  */}
            <Image src={table} alt="group discussion" className={sp.gridImage} />


             {/* Add in the Text Container here   */}
            
            <div className={sp.textContainer}>

                <div className={sp.gridHeadline}>

                {/* 1. Contact your university's Disabilities and Wellbeing Team. */}
                {/* 2. Find your dyslexia assessment. */}
                1. Contact your university's Disabilities and Wellbeing Team.

                </div>
                <p className={sp.gridParagraph}>

                This is a great first step. They are extremely helpful and can guide you through the process and the short form.

                </p>



            </div>

        </li>

        <li className={sp.gridSubContainer}>

{/* Add in the image container here  */}
<Image src={cert} alt="group discussion" className={sp.gridImage} />


 {/* Add in the Text Container here   */}

<div className={sp.textContainer}>

    <div className={sp.gridHeadline}>

    {/* 1. Contact your university's Disabilities and Wellbeing Team. */}
    {/* 3. Apply online. */}

    </div>
    <p className={sp.gridParagraph}>
    <strong style={{marginRight: '6px'}}>

    2. Find your dyslexia assessment. 
    </strong>

        Look for a PDF in your emails or locate your paper copy


    </p>



</div>

</li>


<li className={sp.gridSubContainer}>

{/* Add in the image container here  */}
<Image src={boy} alt="group discussion" className={sp.gridImage} />


 {/* Add in the Text Container here   */}

<div className={sp.textContainer}>
   
    <p className={sp.gridParagraph}>
    <strong style={{marginRight: '6px'}}>


    3. Apply online.
    </strong>
    {/* This is a great first step. They are extremely helpful and can guide you through the process and the short form. */}
    You can do this at the same time as your student finance application, or separately at any time. The application form can be found in your student portal or on the relevant DSA webpage for the country you are applying from. 


    </p>

    <button className={sp.button}>

        Check out the links here 


    </button>



</div>

</li>

<li className={sp.gridSubContainer}>

{/* Add in the image container here  */}
<Image src={lpt} alt="group discussion" className={sp.gridImage} />


 {/* Add in the Text Container here   */}

<div className={sp.textContainer}>

    <div className={sp.gridHeadline}>


    </div>
    <p className={sp.gridParagraph}>
    <strong style={{marginRight: '6px'}}>

    {/* 1. Contact your university's Disabilities and Wellbeing Team. */}
    4. Get a Needs Assessment.
    
    </strong>
    
    
    
    {/* This is a great first step. They are extremely helpful and can guide you through the process and the short form. */}
    You should hear from the student finance body within six weeks with a DSA1 letter and instructions on how to meet your needs assessor.


    </p>



</div>

</li>

<li className={sp.gridSubContainer}>

{/* Add in the image container here  */}
<Image src={grant} alt="group discussion" className={sp.gridImage} />


 {/* Add in the Text Container here   */}

<div className={sp.textContainer}>

   
    <p className={sp.gridParagraph}>


            <strong style={{marginRight: '6px'}}>
        5. The Award.

            </strong>

    {/* This is a great first step. They are extremely helpful and can guide you through the process and the short form. */}
    
    You will receive a letter (a DSA2 entitlement letter) listing what you will get, and be assigned a supplier who will be your main point of contact to deliver it to you.
    

    </p>



</div>

</li>

        </ul>

    </div>

    </section>
  )
}

export default DSASteps
