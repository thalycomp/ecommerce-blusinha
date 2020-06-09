import produce from 'immer';

export default function lovedIt(state = [], action) {
    switch (action.type) {
        case 'ADD_LOVED_IT':
            return produce(state, (draft) => {
                const lovedAlreadySelected = draft.findIndex(
                    (t) => t.id === action.lovedIt.id
                );
                // o usuário já selecionou, e agora quer remover da lista
                if (lovedAlreadySelected !== -1) {
                    draft.splice(lovedAlreadySelected, 1);
                } else {
                    // adicionar
                    draft.push({
                        ...action.lovedIt,
                    });
                }
            });
        case 'REMOVE_LOVED_IT':
            return produce(state, (draft) => {
                const lovedAlreadySelected = draft.findIndex(
                    (t) => t.id === action.lovedIt.id
                );
                // o usuário já selecionou, e agora quer remover da lista
                if (lovedAlreadySelected !== -1) {
                    draft.splice(lovedAlreadySelected, 1);
                }
            });
        default:
            return state;
    }
}
