import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import {
    IoMdRemoveCircle,
    IoMdAddCircle,
    IoIosTrash,
    IoIosArrowBack,
    IoIosArrowForward,
} from 'react-icons/io';
import * as ActionsCart from '../../store/Modules/cart/actions';

import { Container, ProductCart, ButtonsNav, CartVazio } from './styles';

function Cart({ cartTShirts, total, dispatch }) {
    function increment(tshirt) {
        dispatch(
            ActionsCart.updateAmount(tshirt.id, tshirt.tam, tshirt.amount + 1)
        );
    }

    function decrement(tshirt) {
        dispatch(
            ActionsCart.updateAmount(tshirt.id, tshirt.tam, tshirt.amount - 1)
        );
    }

    return (
        <>
            {cartTShirts.length === 0 ? (
                <CartVazio> Seu carrinho de compras está vazio :( </CartVazio>
            ) : (
                <Container>
                    <ProductCart>
                        <thead>
                            <tr>
                                <th />
                                <th>PRODUTO</th>
                                <th>VALOR</th>
                                <th>QTD</th>
                                <th>SUBTOTAL</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {cartTShirts.map((tshirt) => (
                                <tr key={tshirt.id}>
                                    <td>
                                        <img
                                            src={tshirt.image}
                                            alt={tshirt.title}
                                        />
                                    </td>
                                    <td>
                                        <span>CÓD: {tshirt.cod}</span>
                                        <strong>{tshirt.title}</strong>
                                        <p>{tshirt.description}</p>
                                        <span>TAM: {tshirt.tam}</span>
                                    </td>
                                    <td>
                                        <strong>R$ {tshirt.price}</strong>
                                    </td>
                                    <td>
                                        <div>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    decrement(tshirt)
                                                }
                                            >
                                                <IoMdRemoveCircle
                                                    size={20}
                                                    color="#E73C7E"
                                                />
                                            </button>
                                            <input
                                                type="number"
                                                value={tshirt.amount}
                                                readOnly
                                            />
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    increment(tshirt)
                                                }
                                            >
                                                <IoMdAddCircle
                                                    size={20}
                                                    color="#E73C7E"
                                                />
                                            </button>
                                        </div>
                                    </td>
                                    <td>
                                        <strong>R$ {tshirt.subtotal}</strong>
                                    </td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={() =>
                                                dispatch(
                                                    ActionsCart.removeToCart(
                                                        tshirt
                                                    )
                                                )
                                            }
                                        >
                                            <IoIosTrash
                                                size={24}
                                                color="#E73C7E"
                                            />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </ProductCart>
                    <ButtonsNav>
                        <strong>TOTAL: R$ {total.toFixed(2)}</strong>
                        <div>
                            <Link to="/">
                                <IoIosArrowBack size={20} color="#fff" />
                                CONTINUAR COMPRANDO
                            </Link>
                            <button type="button" to="/cart">
                                FINALIZAR COMPRA
                                <IoIosArrowForward size={20} color="#fff" />
                            </button>
                        </div>
                    </ButtonsNav>
                </Container>
            )}
        </>
    );
}

export default connect((state) => ({
    cartTShirts: state.cart.map((tshirt) => ({
        ...tshirt,
        subtotal: (tshirt.price * tshirt.amount).toFixed(2),
    })),
    total: state.cart.reduce((total, tshirt) => {
        return total + tshirt.price * tshirt.amount;
    }, 0),
}))(Cart);
