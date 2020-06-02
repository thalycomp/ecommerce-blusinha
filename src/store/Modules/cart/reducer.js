import produce from 'immer';

import { toast } from 'react-toastify';

export default function cart(state = [], action) {
    switch (action.type) {
        case 'ADD_TSHIRT_TO_CART_SUCCESS':
            return produce(state, (draft) => {
                const tshirtIndex = draft.findIndex(
                    (t) => t.id === action.tshirt.id
                );

                if (tshirtIndex >= 0) {
                    const tamIsCheck = draft.find(
                        (t) => t.tam === action.tshirt.tam
                    );
                    if (!tamIsCheck) {
                        draft.push({
                            ...action.tshirt,
                            amount: 1,
                        });
                    } else {
                        draft[tshirtIndex].amount += 1;
                    }
                } else {
                    draft.push({
                        ...action.tshirt,
                        amount: 1,
                    });
                }
            });

        case 'REMOVE_TSHIRT_TO_CART':
            return produce(state, (draft) => {
                const tshirtIndex = draft.findIndex((t) => t.id === action.id);

                if (tshirtIndex >= 0) {
                    draft.splice(tshirtIndex, 1);
                    toast.success('Produto retirado do carrinho');
                }
            });

        case 'UPDATE_TSHIRT_AMOUNT_SUCCESS':
            return produce(state, (draft) => {
                const tshirtIndex = draft.findIndex(
                    (t) => t.id === action.id && t.tam === action.tam
                );

                if (tshirtIndex >= 0) {
                    draft[tshirtIndex].amount = Number(action.amount);
                }
            });

        default:
            return state;
    }
}
