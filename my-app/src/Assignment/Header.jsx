import React from 'react'
import logo from '../Assignment/logo.svg'

const Nav = ()=>{
    return(
        <div className="main">
            <ul><img src={logo} className="header" alt="Image"/></ul>
            <ul className="list">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}
export default Nav