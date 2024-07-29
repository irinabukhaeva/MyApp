import React from 'react'
import LogoICon from '../Icons/LogoIcon/LogoICon'
import { NavLink } from 'react-router-dom'
import style from "./Menu.module.scss"

export default function Menu() {
  return (
    
    <nav className={style.nav}>
        <NavLink to="/" className={style.navlink}><LogoICon/></NavLink>
        <NavLink to="/game" className={style.game}>Играть</NavLink>
    </nav>
      

  )
}
