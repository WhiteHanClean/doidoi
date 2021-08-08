import { CartActionTypes, CartAddItemAction, CartClearAction, CartRemoveItemAction, CartUpdateItemAction, IProduct } from './../types/types';

export const addToCart = (item: IProduct): CartAddItemAction => {
    return {
        type: CartActionTypes.CART_ADD_ITEM,
        payload: item
    }
};

export const removeItemFromCart = (id: IProduct["id"]): CartRemoveItemAction => {
    return {
        type: CartActionTypes.CART_REMOVE_ITEM,
        payload: id
    }
};

export const updateItemFromCart = (item: IProduct): CartUpdateItemAction => {
    return {
        type: CartActionTypes.CART_UPDATE_ITEM,
        payload: item
    }
};

export const clearCart = (item: IProduct): CartClearAction => {
    return {
        type: CartActionTypes.CART_CLEAR,
    }
};