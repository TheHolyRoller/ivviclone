'use client'; 
import React from 'react'

import '../Styles/Hamburger.css'; 
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ivvi from '../../public/icons/ivvi.svg'; 




function Hamburger() {


    const [isChecked, setIsChecked] = useState(true);


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
    <header className='hamburgerIconContainer' >
        <label htmlFor='menuToggle' className='spanLabel'>
              <button className='hamburgerIconButtonIconContainer'>

            <Image className='logoIconImage'  src={ivvi} alt='ivvi' quality={100} loading='lazy' height={30} width={30}/> 

             </button>
        <nav className='hamburgerIconNav' onClick={() => handleClicked} style={{}} >

        {/* Add in the icon container here */}
        
      

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

            <Link className='hamburgerSectionLink'  href='/assesors'>
            For Assessors 
            </Link>

        </li>





        <li className='hamburgerMenuListItem'>

            <Link className='hamburgerSectionLink'  href='/training'>
            Training 
            </Link>

        </li>




        <li>

            <label className='hamburgerSectionLabel' >
            Resources
        </label>
            <ul className='hamburgerResourceNestedList'>
                <li className='hamburgerResourceNestedListItem' id='hamburgerSeeElement' >

                    <Link className='hamburgerNestedListLink' href='/demo'>
                    See ivvi in Action 
                    </Link>
                    
                    
                    </li>
                    <li className='hamburgerResourceNestedListItem'>

                    <Link className='hamburgerNestedListLink' href='/guide'>
                    
                    Guide to the DSA for Dyslexia 

                    </Link>
                    
                    
                    </li>
                    <li className='hamburgerResourceNestedListItem'>

                    <Link className='hamburgerNestedListLink' href='/demo'>
                    Customer Support 
                    </Link>
                    
                    
                    </li>
                    <li className='hamburgerResourceNestedListItem'>

                    <Link className='hamburgerNestedListLink' href='/demo'>
                    Resource page 
                    </Link>
                    
                    
                    </li>
                    <li className='hamburgerResourceNestedListItem'>

                    <Link className='hamburgerNestedListLink' href='/demo'>
                    Access to work 
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

                    <Link className='hamburgerAboutNestListLink' href="/team">
                    
                        Contact Us 
                    
                    </Link>



                </li>
                <li className='hamburgerAboutNestedListItem'>

                    <Link className='hamburgerAboutNestListLink' href="/team">
                    
                        News and Events 
                    
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
        <Link className='hamburgerOpenIvviLink' href='/ivvi'>
            Open ivvi 
        </Link>
        </li>
        </ul>
    </aside>
        </header>
    </>


  )
}

export default Hamburger