'use client'

import React, { useState } from 'react'
import f from '../Styles/Footer.module.css'; 

// Import the social icons here 
import X from '../../public/icons/X.svg'; 
import podcast from '../../public/icons/podcast.svg'; 
import TikTok from '../../public/icons/TikTok.svg'; 
import LinkedIn from '../../public/icons/linkedIn.svg'; 
import bettAwards from '../../public/images/bett_awards.webp';


import Image from 'next/image';
import Link from 'next/link';


function Footer() {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText('0131 3928358')
      setIsCopied(true)
      window.setTimeout(() => setIsCopied(false), 1500)
    } catch {
      setIsCopied(false)
    }
  }
  

  return (

    <footer className={f.Footer}>

    <section className={f.footerSubContainer}>

      <div className={f.footerAwardSection}>
        <Image
          className={f.footerAwardImage}
          src={bettAwards}
          alt="BETT Awards 2026 winner"
          priority
          sizes="(max-width: 750px) 240px, 320px"
        />
      </div>

      {/* Add in the first text section here  */}
      <div className={f.footerTitleSection}>

      © 2025 ivvi Assistant Ltd, SC700422 , 5 South Gyle Crescent Lane, Edinburgh, EH12 9EG

    
      </div>

      {/* Add in the social section here */}
      <div className={f.footerSocialSection}>

        {/* Add in the social Icon list here */}

        <ul className={f.footerSocialList}>

          <li className={f.footerSocialListItem}>
            <a href="https://x.com/DariusNmN?t=RBK8xsDJ_2NT-u5MhhazBQ&s=09" target="_blank" rel="noopener noreferrer" aria-label="Visit ivvi on X">
              <Image className={f.footerSocialIcon} src={X} alt="x" height={50} width={50} loading="lazy"/> 
            </a>
           </li>
           <li className={f.footerSocialListItem}>
            <a href="https://www.linkedin.com/in/darius-namdaran/" target="_blank" rel="noopener noreferrer" aria-label="Visit Darius on LinkedIn">
              <Image className={f.footerSocialIcon} src={LinkedIn} alt="LinkedIn" height={50} width={50} loading="lazy"/> 
            </a>
           </li>
           <li className={f.footerSocialListItem}>
            <a href="https://www.tiktok.com/@dyslexiaproductivity" target="_blank" rel="noopener noreferrer" aria-label="Visit ivvi on TikTok">
              <Image className={f.footerSocialIcon} src={TikTok} alt="TikTok" height={50} width={50} loading="lazy"/> 
            </a>
       </li>
       <li className={f.footerSocialListItem}>
          <a href="https://podcasts.apple.com/gb/podcast/dyslexia-explored/id1387645599" target="_blank" rel="noopener noreferrer" aria-label="Listen to Dyslexia Explored podcast">
            <Image className={f.footerSocialIcon} src={podcast} alt="Podcast" height={50} width={50} loading="lazy"/> 
          </a>
       </li>


        </ul>

      </div>


      <div className={f.footerLegalSection}>

        <ul className={f.footerLegalList}>

          <li className={f.footerLegalListItem}>

            <div className={f.footerLegalButton} >

            <Link href='/privacy'  className={f.footerLegalLink}>

            Privacy Policy 

            </Link>
            </div>

          </li>
           <li className={f.footerLegalListItem}>

            <div className={f.footerLegalButton} >
            <Link href='/agreement'  className={f.footerLegalLink}>

            Service Agreement 

            </Link>
            </div>

          </li>
           <li className={f.footerLegalListItem}>

            <div className={f.footerLegalButton} >

            <Link href='/accessibility'  className={f.footerLegalLink}>

            Accessibility Statement 

            </Link>

            </div>

          </li>
           <li className={f.footerLegalListItem}>

            <div className={f.footerLegalButton} >

            <Link href='/cookies'  className={f.footerLegalLink}>

            Cookie Preferences

            </Link> 

            </div>

          </li>

        </ul>

      </div>

      <div className={f.footerPhoneSection}>
        <button type="button" className={f.desktopPhoneButton} onClick={handleCopyPhone}>
          {isCopied ? 'Copied: 0131 3928358' : 'tel: 0131 3928358'}
        </button>
        <a className={f.mobilePhoneLink} href="tel:+441313928358">
          tel: 0131 3928358
        </a>

      </div>



    </section>


    </footer>


)
}

export default Footer