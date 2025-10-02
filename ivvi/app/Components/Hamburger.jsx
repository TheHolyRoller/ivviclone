import React from 'react'

import '../Styles/Hamburger.css'; 


function Hamburger() {
  return (

    <>
    <header className='hamburgerIconContainer' >
        <nav className='hamburgerIconNav' >
        <input id="menuToggle" className='checkBox'  type='checkbox'></input>


        <label htmlFor='menuToggle' className='spanLabel' >

        <span className='hamburgerBar' id='firstBar'></span>
        <span className='hamburgerBar' id='secondBar'></span>
        <span className='hamburgerBar' id='thirdBar'></span>
        </label>

        </nav>
        </header>


    <aside className='hamburgerMenu'>

        <ul className='hamburgerMenuList'>

        <li className='hamburgerMenuListItem'>



        </li>

        </ul>

    </aside>

    </>


  )
}

export default Hamburger