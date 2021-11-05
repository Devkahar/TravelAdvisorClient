import { Typography } from '@mui/material'
import React from 'react'
import "./style.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
const Header = () => {
    return (
        <header>
            <nav className="nav-wrapper d-flex p-1">
                <ul className="nav-container d-flex">
                    <li><Typography variant="h4" >Travel Advisor</Typography></li>
                    <li>
                        <div className="">
                        </div>
                        <input type="text" className="search-box" placeholder="Search Cities, cool places..."/>

                    </li>
                    <li></li>
                    <li></li>
                </ul>
                <ul className="nav-container d-flex">
                    <li><Typography variant="p" >LogIn</Typography></li>
                    <li><Typography variant="p" >Sign Up</Typography></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;