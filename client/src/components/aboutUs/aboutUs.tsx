import React, { ReactElement } from 'react'
import './aboutUs.css'


export default function AboutUs(): ReactElement {


    return (
        <div>
            <div className="about">
                <div className="container">
                    <div className="about_content">
                        <div className="about_content_left">
                            <img src="https://doidoishop.s3.amazonaws.com/media/public/%3Csrc.storage_backends.PublicMediaStorage%20object%20at%200x7fa2e389ceb0%3E/%D1%80%D0%B5%D0%BA%D0%BB%D0%B0%D0%BC%D0%B0_%D1%80%D1%83%D1%81%D1%81.png" alt="" />
                        </div>

                        <div className="about_content_right">
                            <div className="about_title">
                                <h3> C нами удобно!
                         Не переплачивайте за комфорт</h3>
                            </div>
                            <div className="about_descr">
                                <div>
                                    Комбинируйте заказы из товаров разных категорий и продавцов, не переплачивая за доставку.

                                    Кроме того вы можете позволить себе необходимую покупку или подарок уже сейчас,

а выплачивать его стоимость в течение нескольких месяцев равными суммами без переплат.                                </div><br />

                                <div>
                                DoiDoi.shop, наша миссия состоит в том, чтобы сделать его легким для ведения бизнеса в любом месте.
Мы делаем это, предоставляя продавцам инструменты, необходимые для охвата глобальной аудитории их продуктов, и помогая покупателям быстро и эффективно находить продукты и продавцов.                                </div><br />

            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
