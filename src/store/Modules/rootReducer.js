import { combineReducers } from 'redux';

import cart from './cart/reducer';
import lovedIt from './lovedIt/reducer';

export default combineReducers({
    cart,
    lovedIt,
});
