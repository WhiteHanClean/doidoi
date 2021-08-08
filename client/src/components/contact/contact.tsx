import React, { ReactElement } from 'react'
import './contact.css'

export default function Contact(): ReactElement {
    return (
        <div>
            <div className="contacts">
                <div className="container">
                
                    <div className="first_contact flex">
                        <div className="first_contacts_title mt10">
                            <strong>Контакты</strong>
                        </div>
                        <div className="first_contacts_descr mt10">
                            DoiDoi company
 <br /> questions you may have. Send us an email<br /> and we'll get back to you as quickly as we <br /> can.  Follow us on social media (especially <br /> Instagram) for the most up to date <br /> happenings.
                            <br />
                            Press and marketing inquiries alike can best <br /> be answered via info@saltsurf.com
                        </div>
                        <div className="first_contact_general mt10">
                            <strong>email</strong> - doidoishop@mail.ru
                            <br />
                            <strong>ИНН</strong> - 02904202110374
                        </div>
                    </div>
                    <div className="hr"> </div>

                    <div className="second_contact flex">
                       
                        <div className="second_contacts_descr mt10">
                     Мы вам откроем интернет магазин в нашей платформе  <br/>для этого позвоните нам или зарегистрируйтесь и оставьте заявку <br /> на открытие вашего магазина. Начните сейчас - пока это бесплатно!
                        </div>
                        <div className="second_contact_general mt10">
                            <strong>DOI DOI</strong> - <br /> doidoi@dordoiplaza.com
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
