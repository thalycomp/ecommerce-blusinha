import produce from 'immer';

export default function cart(state = [], action) {
    switch (action.type) {
        case 'ADD_TSHIRT_TO_CART':
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
                }
            });

        case 'UPDATE_TSHIRT_AMOUNT':
            return produce(state, (draft) => {
                const tshirtIndex = draft.findIndex((t) => t.id === action.id);

                if (tshirtIndex >= 0) {
                    draft.splice(tshirtIndex, 1);
                }
            });

        default:
            return state;
    }
}
