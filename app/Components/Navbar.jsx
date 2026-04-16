import React from 'react'

import n from '../Styles/Navbar.module.css'; 
import Logo from '../../public/icons/ivvi.svg'; 


import Image from 'next/image';
import Link from 'next/link';
import { IVVI_APP_URL } from './ivviAppUrl';



function Navbar() {
  return (

    <nav className={n.navbar}> 

      <div className={n.LogoContainer}>
      <Link href="/" aria-label="Go to homepage">
        <Image
          src={Logo}
          alt="ivvi"
          width={214}
          height={92}
          priority
          className={n.navLogo}
          sizes="140px"
        />
      </Link>
      </div>


      <article className={n.navigationContainer}>

        <ul className={n.navigationButtonList}>

            <li className={n.navigationListItem}>

              <Link
                className={n.navLink}
              
               href="/students" alt="https://www.ivvi.app/">

                For Students

              </Link>


            </li>
            
            <li className={n.navigationListItem}>

              <Link 
                className={n.navLink}
              
              href="/assessors" alt="https://www.ivvi.app/">

                For Assessors 

              </Link>


            </li>

              
            <li className={n.navigationListItem}>

              <Link
                className={n.navLink}
              
               href="/schools" alt="https://www.ivvi.app/">

                For Schools

              </Link>


            </li>
              
            
            <li
              className={`${n.navigationListItem} ${n.navDropdown}`}
            >
              <button
                type="button"
                className={`${n.navLink} ${n.dropdownTrigger}`}
                aria-haspopup="true"
              >
                Resources
              </button>

              <ul className={n.dropdownMenu} role="list">
                <li className={n.dropdownMenuItem}>
                  <Link className={n.dropdownMenuLink} href="/action">
                    See ivvi in Action
                  </Link>
                </li>
                <li className={n.dropdownMenuItem}>
                  <Link className={n.dropdownMenuLink} href="/dsa">
                    Guide to the DSA for Dyslexia
                  </Link>
                </li>
                <li className={n.dropdownMenuItem}>
                  <Link className={n.dropdownMenuLink} href="/customersupport">
                    Customer Support
                  </Link>
                </li>
                <li className={n.dropdownMenuItem}>
                  <Link className={n.dropdownMenuLink} href="/resources">
                    Resources Page
                  </Link>
                </li>
                <li className={n.dropdownMenuItem}>
                  <Link className={n.dropdownMenuLink} href="/accesstowork">
                    Access to Work
                  </Link>
                </li>
              </ul>
            </li>
              
            <li className={n.navigationListItem}>

              <Link 
                className={n.navLink}
              href="/pricing" alt="https://www.ivvi.app/">

                Pricing 

              </Link>


              </li> 


              
            <li
              className={`${n.navigationListItem} ${n.navDropdown}`}
            >
              <button
                type="button"
                className={`${n.navLink} ${n.dropdownTrigger}`}
                aria-haspopup="true"
              >
                About Us
              </button>

              <ul className={n.dropdownMenu} role="list">
                <li className={n.dropdownMenuItem}>
                  <Link className={n.dropdownMenuLink} href="/team">
                    The Team
                  </Link>
                </li>
                <li className={n.dropdownMenuItem}>
                  <Link className={n.dropdownMenuLink} href="/contact">
                    Contact Us
                  </Link>
                </li>
                <li className={n.dropdownMenuItem}>
                  <Link className={n.dropdownMenuLink} href="/blog">
                    Our Blog
                  </Link>
                </li>
                <li className={n.dropdownMenuItem}>
                  <Link className={n.dropdownMenuLink} href="/pressrelease">
                    Press Release
                  </Link>
                </li>
              </ul>
            </li>


            
            <li className={n.navigationListItem} id={n.login} >

              <Link   
                className={n.navLink}
                href="https://ivvi.dev/login"
                target="_blank"
                rel="noopener noreferrer">

                Log in 

              </Link>


            </li>



            
            <li className={n.navigationListItem} id={n.cta}  >

              <Link
                className={n.navLink}
                href={IVVI_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open ivvi
              </Link>


            </li>


        </ul>
      </article>
    </nav>

)
}

export default Navbar