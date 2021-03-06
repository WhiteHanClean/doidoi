import {OneItemAction, OneItemActionTypes, OneItemState} from "../types/types";

const initialState: OneItemState = {
    item: null,
    loading: false,
    error: null  
}

export const oneItemReducer = (state = initialState, action: OneItemAction): OneItemState => {
    switch (action.type) {
        case OneItemActionTypes.FETCH_ONE_ITEM:
            return {loading: true, error: null, item: null}
        case OneItemActionTypes.FETCH_ONE_ITEM_SUCCESS:
            return {loading: false, error: null, item: action.payload}
        case OneItemActionTypes.FETCH_ONE_ITEM_ERROR:
            return {loading: false, error: action.payload, item:null}
        default:
            return state
    }
}
