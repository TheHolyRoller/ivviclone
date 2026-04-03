import React from 'react'

import n from '../Styles/Navbar.module.css'; 
import Logo from '../../public/icons/ivvi.svg'; 


import Image from 'next/image';
import Link from 'next/link';



function Navbar() {
  return (

    <nav className={n.navbar}> 

      <div className={n.LogoContainer}>

      <Image
        src={Logo}
        alt="ivvi"
        width={214}
        height={92}
        priority
        className={n.navLogo}
        sizes="140px"
      />


      </div>


      {/* Add in the button section container here  */}
      <article className={n.navigationContainer}>

            {/* Add in the list here  */}
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
              
              href="/students" alt="https://www.ivvi.app/">

                For Assessors 

              </Link>


            </li>

              
            <li className={n.navigationListItem}>

              <Link
                className={n.navLink}
              
               href="/students" alt="https://www.ivvi.app/">

                Training 

              </Link>


            </li>
              
            
            <li className={n.navigationListItem}>

              <Link 
                className={n.navLink}
                id={n.resourceDropDown}
              href="/students" alt="https://www.ivvi.app/">

                Resources

              </Link>


            </li>
              
            <li className={n.navigationListItem}>

              <Link 
                className={n.navLink}
              href="/students" alt="https://www.ivvi.app/">

                Pricing 

              </Link>


              </li> 


              
            <li className={n.navigationListItem}>

              <Link
                className={n.navLink}
                id={n.teamDropdown}
               href="/students" alt="https://www.ivvi.app/"
               >

                About Us 

              </Link>


            </li>


            
            <li className={n.navigationListItem} id={n.login} >

              <Link   
                className={n.navLink}
                href="/students" alt="https://www.ivvi.app/">

                Log in 

              </Link>


            </li>



            
            <li className={n.navigationListItem} id={n.cta}  >

              <Link className={n.navLink}  href="/students" alt="https://www.ivvi.app/">


                Open ivvi 

              </Link>


            </li>


        </ul>
      </article>
    </nav>

)
}

export default Navbar