export function addToCartRequest(tshirt) {
    return {
        type: 'ADD_TSHIRT_TO_CART_REQUEST',
        tshirt,
    };
}

export function addToCartSuccess(tshirt) {
    return {
        type: 'ADD_TSHIRT_TO_CART_SUCCESS',
        tshirt,
    };
}

export function removeToCart(tshirt) {
    return {
        type: 'REMOVE_TSHIRT_TO_CART',
        id: tshirt.id,
    };
}

export function updateAmountRequest(id, tam, amount) {
    return {
        type: 'UPDATE_TSHIRT_AMOUNT_REQUEST',
        id,
        tam,
        amount,
    };
}

export function updateAmountSuccess(id, tam, amount) {
    return {
        type: 'UPDATE_TSHIRT_AMOUNT_SUCCESS',
        id,
        tam,
        amount,
    };
}
