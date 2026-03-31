import React from 'react'
import v from '../Styles/LeadMagnet.module.css'; 
import Link from 'next/link';
import Image from 'next/image';
import background from '../../public/images/lead.png'; 


function LeadMagnet() {
  return (

    <section className={v.hero}>

    <section className={v.heroContentContainer} >

    <div className={v.heroTextContainer}>

      
      <div className={v.headerContainer}>

        <h1 className={v.heroMainHeader}>

        {/* Introducing ivvi Notes */}
        {/* ivvi Notes in Action */}
        Download our free ivvi Guide to applying for the Disabled Students' Allowance   

        </h1>
        


      </div>


    </div>

    <div className={v.heroLaptopImageContainer}>

    {/* TO DO Add in a white background here  */}
    
    <Image  className={v.leadMagnetImg} src={background} alt="laptop desk background" />



    </div>

      <div className={v.buttonContainer}>


    
        <button className={v.heroCTAButton}>
          <Link className={v.heroCTALink}  href='/ivvi' alt='ivvi'>

            Download PDF here 

          </Link>

        </button>

      </div>

    </section>
    </section>


)
}

export default LeadMagnet