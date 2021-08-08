import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

export default function Footer(): ReactElement {
    return (
        <div>
            <div className="footer">
                <div className="container">
                <div className="hrFooter"> </div>
                    <div className="footer_content">
                        <ul>
                            <li> <Link style={{color:'black', textDecoration: 'none'}} to='/customer'>   Правила
приобретения товаров
в торговой площадке «DoiDoi.shop»</Link> </li>
                            <li> <Link style={{color:'black', textDecoration: 'none'}} to='contact'> CONTACT </Link> </li>
                            <li> 2021 DOI DOI SHOP </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
