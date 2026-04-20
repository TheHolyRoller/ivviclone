import React from 'react'
import cm from '../Styles/CustomerSupport.module.css'

export const metadata = {
	title: "ivvi customer support — help, FAQs and accounts | ivvi",
	description:
		"ivvi customer support: help with ivvi Notes, accounts and billing. Find answers in our FAQs or contact ivvi Assistant Ltd.",
	alternates: {
		canonical: "/customersupport",
	},
  
}
import SupportHero from '../Components/SupportHero'
import CustomerContactForm from '../Components/CustomerContactForm'
import FAQ from '../Components/FAQ'


function page() {
  return (
    <div className={cm.mainContainer} >
        
      <SupportHero/> 
      <CustomerContactForm formAction="https://submit-form.com/DTcJ7Bccp" />
      <FAQ/> 

    </div>
  )
}

export default page