'use client'; 
import React from 'react'

import '../Styles/Hamburger.css'; 
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { IVVI_APP_URL } from './ivviAppUrl';
import Image from 'next/image';
import ivvi from '../../public/icons/ivvi.svg'; 




function Hamburger() {

    const [isChecked, setIsChecked] = useState(false);


    const handleClicked = () => {

        console.log('this is the handle clicked function'); 
        setIsChecked(!isChecked); 
        console.log('this is the value of the is checked state variable \n', isChecked); 

    }


    useEffect(() => {

        console.log('this is the updated is checked state variable \n', isChecked); 

    }, [isChecked]); 





  return (

    <>
    <div className='hamburgerNav' >

    <header className='hamburgerIconContainer' >
        <label htmlFor='menuToggle' className='spanLabel'>
              <button className='hamburgerIconButtonIconContainer'>

            <Image
              className="logoIconImage"
              src={ivvi}
              alt="ivvi"
              width={214}
              height={92}
              priority
              sizes="53px"
            />

             </button>
        <nav className='hamburgerIconNav' onClick={() => handleClicked} style={{}} >


        <input id="menuToggle" className='checkBox'  type='checkbox' defaultChecked={isChecked}></input>

        <span className='hamburgerBar' id='firstBar'></span>
        <span className='hamburgerBar' id='secondBar'></span>
        <span className='hamburgerBar' id='thirdBar'></span>

        
        </nav>
        </label>
    <aside className='hamburgerMenu' style={{}} >

        <ul className='hamburgerMenuList'>
        
           <li className='hamburgerMenuListItem'>

            <Link className='hamburgerSectionLink'  href='/students'>
            For Students  
            </Link>
        </li>
           <li className='hamburgerMenuListItem'>

            <Link className='hamburgerSectionLink'  href='/assessors'>
            For Assessors 
            </Link>

        </li>





        <li className='hamburgerMenuListItem'>

            <Link className='hamburgerSectionLink'  href='/schools'>
            For Schools 
            </Link>

        </li>




        <li>

            <label className='hamburgerSectionLabel' >
            Resources
        </label>
            <ul className='hamburgerResourceNestedList'>
                <li className='hamburgerResourceNestedListItem' id='hamburgerSeeElement' >

                    <Link className='hamburgerNestedListLink' href='/action'>
                    See ivvi in Action 
                    </Link>
                    
                    
                    </li>
                    <li className='hamburgerResourceNestedListItem'>

                    <Link className='hamburgerNestedListLink' href='/dsa'>
                    
                    Guide to the DSA for Dyslexia 

                    </Link>
                    
                    
                    </li>
                    <li className='hamburgerResourceNestedListItem'>

                    <Link className='hamburgerNestedListLink' href='/customersupport'>
                    Customer Support 
                    </Link>
                    
                    
                    </li>
                    <li className='hamburgerResourceNestedListItem'>

                    <Link className='hamburgerNestedListLink' href='/resources'>
                    Resources Page 
                    </Link>
                    
                    
                    </li>
                    <li className='hamburgerResourceNestedListItem'>

                    <Link className='hamburgerNestedListLink' href='/accesstowork'>
                    Access to Work 
                    </Link>
                    
                    
                    </li>



                    
            </ul>



            
        </li>


        <li className='hamburgerSectionListItem'>

        <Link className='hamburgerSectionLink' href='/pricing'>
        Pricing 
        </Link>

        </li>

        <li className='hamburgerSectionListItem'>

            <label className='hamburgerAboutLabel'>

                About Us 
            </label>

            <ul className='hamburgerAboutNestedList'>


                <li className='hamburgerAboutNestedListItem'>

                    <Link className='hamburgerAboutNestListLink' href="/team">
                    
                        The Team 
                    
                    </Link>



                </li>
                <li className='hamburgerAboutNestedListItem'>

                    <Link className='hamburgerAboutNestListLink' href="/contact">
                    
                        Contact Us 
                    
                    </Link>



                </li>
                <li className='hamburgerAboutNestedListItem'>

                    <Link className='hamburgerAboutNestListLink' href="/blog">
                    
                        Our Blog 
                    
                    </Link>



                </li>
                <li className='hamburgerAboutNestedListItem'>

                    <Link className='hamburgerAboutNestListLink' href="/pressrelease">
                    
                        Press Release 
                    
                    </Link>



                </li>


            </ul>




        </li>


        <li className='hamburgerSectionListItem' >

            <Link className='hamburgerLoginLink' href='/login'>
            
            Log in 
            
            </Link>

        </li>


        <li className='hamburgerSectionListItem' id='ivviCTA'>
        <Link className='hamburgerOpenIvviLink' href={IVVI_APP_URL} target='_blank' rel='noopener noreferrer'>
            Open ivvi 
        </Link>
        </li>
        </ul>
    </aside>
        </header>
    </div>
    </>


  )
}

export default Hamburger