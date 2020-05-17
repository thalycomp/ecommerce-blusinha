import React from 'react';

function Cart(props) {
    return(
        <>
        <input type="checkbox"
            name={props.name}
            value={props.value}
            checked={props.checked}
        /><label>{props.label}</label>
        </>
    );
}

export default Cart;
