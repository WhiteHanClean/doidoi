import React, { ReactElement, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/download.png'
import './blackLine.css'
import {useActions} from '../../hooks/useActions'

import { useTypeSelector } from "../../hooks/useTypeSelector";
import NavbarCart from './NavbarCart'

export default function BlackLine(): ReactElement {

    const { currentUser } = useTypeSelector((state) => state.user);
    console.log(currentUser)
    const {signOut} = useActions()

    useEffect(() => {
        
    }, [currentUser])

    return (
        <div>
            <div className="header">
                <div className="container">
                    <div className="header_content">
                        <div className="logo">
                            <Link to="/" >
                                <img style={{width: '120px'}} src={Logo} alt="SALT SURF" />
                            </Link>
                        </div>
                        
                        <div className="nav">
                            <ul>
                                <li className="name-nav"> <Link style={{color: 'white', fontSize:"15px", textDecoration: 'none'}} to="/" > Главная </Link></li>
                                <li className="name-nav"> <Link style={{color: 'white', fontSize:"15px", textDecoration: 'none'}} to="/about" > О нас </Link></li>
                                <li className="name-nav"> <Link style={{color: 'white', fontSize:"15px", textDecoration: 'none'}} to="/lookbook" > Обзор </Link></li>
                                <li className="name-nav"> <Link style={{color: 'white', fontSize:"15px", textDecoration: 'none'}} to="/contact" > Контакты </Link></li>
                                <li className="name-nav">
                                    <Link style={{color: 'white', fontSize:"15px", textDecoration: 'none'}} to="/cart" >
                                        <NavbarCart/>
                                    </Link>
                                </li>
                                {currentUser ? <li onClick={signOut}>LOG OUT</li> : <li> <Link style={{color: '#fff', textDecoration: 'none'}} to="/login" > LOGIN </Link> </li>}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
