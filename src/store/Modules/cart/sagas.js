import { call, put, all, takeLatest, select } from 'redux-saga/effects';

import Api from '../../../services/api';

import * as ActionsCart from './actions';

function* addToCart({ tshirt }) {
    const productExist = yield select((state) =>
        state.cart.find((p) => p.id === tshirt.id)
    );

    const amountAPI = yield call(Api.get, `/amount/${tshirt.id}`);

    const stockTam = amountAPI.data[tshirt.tam];
    const currentAmount = productExist ? productExist.amount + 1 : 0;

    if (currentAmount > stockTam) {
        console.tron.warn('Quantidade solicitada fora do estoque');
        return;
    }

    yield put(ActionsCart.addToCartSuccess(tshirt));
}

function* updateAmount({ id, tam, amount }) {
    if (amount <= 0) return;

    const amountAPI = yield call(Api.get, `/amount/${id}`);

    const stockTam = amountAPI.data[tam];

    if (amount > stockTam) {
        alert('Quantidade solicitada fora do estoque');
        return;
    }
    yield put(ActionsCart.updateAmountSuccess(id, tam, amount));
}

export default all([
    takeLatest('UPDATE_TSHIRT_AMOUNT_REQUEST', updateAmount),
    takeLatest('ADD_TSHIRT_TO_CART_REQUEST', addToCart),
]);
