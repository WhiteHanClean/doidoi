import React, { ReactElement } from 'react'
import {useActions} from '../../hooks/useActions'
import {REACT_API} from '../../constants'
import { useParams } from 'react-router'
import './ItemDetails.css'
import { useTypeSelector } from '../../hooks/useTypeSelector'
import { useEffect } from 'react'

export default function ItemDetails(): ReactElement {
    const {item, error, loading} = useTypeSelector(state => state.oneItem)
    const {getOneItem} = useActions()
    const { id } = useParams<{id: string}>()
    
    useEffect(() => {
        getOneItem(parseInt(id))
    }, [id, getOneItem])

    if (loading || !item) {
        return <h3 className ="look-loading">Идет загрузка...</h3>
    }
    if (error) {
        return <h3>{error}</h3>
    }
    return (
        <div className="container">
            <div className="details_content">
                <div className="details_left">
                    <img src={REACT_API + item.img} alt="" />
                </div>
                
                <div className="details_right">
                    <div className="details_name">
                        {item.name}
                    </div>
                    <div className="details_descrOne">
                        {item.descrOne}
                    </div>details_price
                    <div className="details_descrTwo">
                        {item.descrTwo}
                        
                    </div>
                    <div className="details_price">
                        <strong>${item.price}.00</strong>
                    </div>
                    <div className="button add_to_cart">
                        add to cart
                    </div>
                </div>
                
            </div>
        </div>
    );
}