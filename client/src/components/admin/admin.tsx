import React, { ReactElement } from 'react'
import './admin.css'
import { Link } from 'react-router-dom'
export default function AdminPanel(): ReactElement {
    return (
        <div className="container">
            <img className="admin" alt="admin" src="https://орфографика.рф/800/600/https/sun1-30.userapi.com/c850524/v850524438/157ab4/VsPWZfHfBUM.jpg" />
            <div className="buttons">
                <div className="panel">
                    <div className="button button_lookBook">
                        <Link style={{ textDecoration: 'none', color: '#fff' }} to='/adminLookBook'>
                            Обзор сайта
                        </Link>
                    </div>
                    <br />
                    <div className="button button_shop">
                        <Link style={{ textDecoration: 'none', color: '#fff' }} to='/adminShop'>
                            Товары
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
