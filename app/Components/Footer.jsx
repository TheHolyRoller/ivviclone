import React from 'react'
import f from '../Styles/Footer.module.css'; 

// Import the social icons here 
import X from '../../public/icons/X.svg'; 
import podcast from '../../public/icons/podcast.svg'; 
import TikTok from '../../public/icons/TikTok.svg'; 
import LinkedIn from '../../public/icons/linkedIn.svg'; 


import Image from 'next/image';
import Link from 'next/link';



function Footer() {
  return (

    <footer className={f.Footer}>

        {/* Add in the footer sub container here  */}
    <section className={f.footerSubContainer}>

      {/* Add in the first text section here  */}
      <div className={f.footerTitleSection}>

      © 2025 ivvi Assistant Ltd, SC700422 , 5 South Gyle Crescent Lane, Edinburgh, EH12 9EG

    
      </div>

      {/* Add in the social section here */}
      <div className={f.footerSocialSection}>

        {/* Add in the social Icon list here */}

        <ul className={f.footerSocialList}>

          <li className={f.footerSocialListItem}>
          
              <Image className={f.footerSocialIcon} src={X} alt="x" height={50} width={50} loading="lazy"/> 
          
           </li>
           <li className={f.footerSocialListItem}>
          
              <Image className={f.footerSocialIcon} src={LinkedIn} alt="x" height={50} width={50} loading="lazy"/> 
          
           </li>
           <li className={f.footerSocialListItem}>
          
          <Image className={f.footerSocialIcon} src={TikTok} alt="x" height={50} width={50} loading="lazy"/> 
      
       </li>
       <li className={f.footerSocialListItem}>
          
          <Image className={f.footerSocialIcon} src={podcast} alt="x" height={50} width={50} loading="lazy"/> 
      
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

          <li className={f.footerLegalListItem}>

            <div className={f.footerLegalButton}>

            <Link href="/login" className={f.footerLegalLink}>

            Login

            </Link>

            </div>

          </li>

          <li className={f.footerLegalListItem} id={f.footerLastItem}>

            <div className={f.footerLegalButton}>

            <Link href="/ivvi" className={f.footerLegalLink}>

            ivvi

            </Link>

            </div>

          </li>



        </ul>

      </div>

      <div className={f.footerPhoneSection}>

          tel: 0131 3928358


      </div>



    </section>


    </footer>


)
}

export default Footer