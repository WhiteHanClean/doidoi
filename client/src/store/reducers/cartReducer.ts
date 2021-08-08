import { IProduct } from './../types/types';
import {CartAction, CartActionTypes, ICartState} from "../types/types";

const getSavedCart = (): IProduct[] => {
    const savedCart = localStorage.getItem("marketplace.cart");
    const parsedCart = !!savedCart && JSON.parse(savedCart);
    if(Array.isArray(parsedCart)){
        return parsedCart
    }
    return [];
}

const initialState: ICartState = {
    items: getSavedCart()
}

export const cartReducer = (state: ICartState = initialState, action: CartAction): ICartState => {
    switch (action.type) {
        case CartActionTypes.CART_ADD_ITEM:{
            const items = [...state.items];
            items.push(action.payload);
            localStorage.setItem("marketplace.cart", JSON.stringify(items));
            return {...state, items};
        } 
        case CartActionTypes.CART_UPDATE_ITEM:{
            const items = state.items.map(item=>{
                if(item.id === action.payload.id){
                    return action.payload
                }
                return item;
            });
            localStorage.setItem("marketplace.cart", JSON.stringify(items));
            return {...state, items};
        }
        case CartActionTypes.CART_REMOVE_ITEM:{
            const items = state.items.filter(item=>item.id!==action.payload)
            localStorage.setItem("marketplace.cart", JSON.stringify(items));
            return {...state, items};
        }
        case CartActionTypes.CART_CLEAR:{
            localStorage.removeItem("marketplace.cart");
            return {...state, items: []};
        }
        default:
            return state
    }
}
