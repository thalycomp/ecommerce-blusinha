export function addToCart(tshirt) {
    return {
        type: 'ADD_TSHIRT_TO_CART',
        tshirt,
    };
}

export function removeToCart(tshirt) {
    return {
        type: 'REMOVE_TSHIRT_TO_CART',
        id: tshirt.id,
    };
}

export function updateAmount(id, tam, amount) {
    return {
        type: 'UPDATE_TSHIRT_AMOUNT',
        id,
        amount,
        tam,
    };
}
