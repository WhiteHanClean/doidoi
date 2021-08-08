import React, { SyntheticEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { REACT_API } from '../../constants'
import { addToCart, removeItemFromCart } from '../../store/actionCreator/cart'
import { RootState } from '../../store/reducers'
import { IProduct } from '../../store/types/types'
import classes from './ProductsList.module.css'

interface Props {
    data: IProduct
}

const ProductCard: React.FC<Props> = ({ data }) => {
    const dispatch = useDispatch()
    const isInCart = useSelector((state: RootState) => {
        return !!state.cart.items.find(item=>item.id===data.id)
    })
    const handleCart = (e: SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (isInCart) dispatch(removeItemFromCart(data.id))
        else dispatch(addToCart(data));
    }

    return (
        <div className={classes.productCard}>
            <img className={classes.productImg} src={REACT_API + data.img} alt={data.name}/>
            <div className={classes.productTitle}>{data.name}</div>
            <div className={classes.productPrice}>{data.price}$</div>
            <button onClick={handleCart} className={classes.productBtn}>
                { isInCart ? "Убрать из корзины" : "Добавить в корзину" }
            </button>
        </div>
    )
}

export default ProductCard
