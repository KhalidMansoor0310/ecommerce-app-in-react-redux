export const addToCart = (itemID) => {
    return {
        type: 'ADD_TO_CART',
        payload: {
            id:itemID
        }
    }
}
export const removeFromCart = (itemID) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: {
            id:itemID
        }
    }
}
export const adjustQuantity = (itemID, value) => {
    return {
        type: 'ADJUST_QUANTITY',
        payload: {
            id:itemID,
            qty:value
        }
    }
}
export const loadCurrentItems = (item) => {
    return {
        type: 'LOAD_CURRENT_ITEMS',
        payload:item
    }
}
