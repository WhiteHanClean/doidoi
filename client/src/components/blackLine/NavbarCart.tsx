import {FunctionComponent} from 'react'
import { useSelector } from 'react-redux'
import cartSvg from '../../assets/cart.svg'
import { RootState } from '../../store/reducers'
import classes from './NavbarCart.module.css'

const NavbarCart: FunctionComponent = () => {
    const cartCount = useSelector((state: RootState) => state.cart.items.length);

    return (
        <div className={classes.cartBtn}>
            {!!cartCount && 
                <span className={classes.cartCount}>{cartCount}</span>
            }
            <img className={classes.cartIcon} width={20} src={cartSvg} alt="cart"/>
        </div>
    )
}

export default NavbarCart
