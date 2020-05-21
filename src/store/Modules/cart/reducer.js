export default function cart(state = [], action) {
    console.log(action);
    console.log(state);
    switch (action.type) {
        case 'ADD_TSHIRT_TO_CART':
            return [...state, action.tshirt];

        default:
            return state;
    }
}
