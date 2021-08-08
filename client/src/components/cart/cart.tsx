import React, { ReactElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/reducers'
// import { Link } from 'react-router-dom'
import classes from './cart.module.css'

import { REACT_API } from '../../constants'
import { removeItemFromCart, updateItemFromCart } from '../../store/actionCreator/cart'
import { IProduct } from '../../store/types/types'

export default function Cart(): ReactElement {

    const dispatch = useDispatch()
    const cart = useSelector((state: RootState) => state.cart.items)

    console.log(cart)


    const handleDelte = (id: number) => {
        dispatch(removeItemFromCart(id))
    }

    const decr = (item:IProduct) => {
        const copy = {...item}
        copy.count = copy.count ? copy.count-1 : 1;
        dispatch(updateItemFromCart(copy))
    }
    const incr = (item:IProduct) => {
        const copy = {...item}
        copy.count = copy.count ? copy.count+1 : 2;
        dispatch(updateItemFromCart(copy))
    }

    const summ = cart.reduce((prev, current) => {
        return prev + current.price * (current?.count ? current.count : 1);
    }, 0);

    return (
        <div className="container">
            <div className={classes.productsList}>
                {cart.map(item => (
                    <div key={item.id} className={classes.productCard}>
                        <img className={classes.productImg} src={REACT_API + item.img} alt={item.name} />
                        <div className={classes.productTitle}>{item.name}</div>
                        <div className={classes.productPrice}>{item.price}$</div>
                        <div className={classes.productPrice}>
                            <button className={classes.cartBtn} onClick={()=> decr(item) }>-</button>
                              {item.count || 1}шт
                            <button  className={classes.cartBtn} onClick={()=> incr(item)}>+</button>
                        </div>
                        <div className={classes.productPrice}>{item.price * (item?.count ? item.count : 1)}$</div>
                        <button className={classes.deleteBtn} onClick={() => handleDelte(item.id)}>X</button>
                    </div>
                ))}
                <div className={classes.productCard}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div>Итого: {summ}</div>
                </div>
            </div>
        </div>
    )
}