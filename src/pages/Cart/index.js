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
import { Container, ProductCart, ButtonsNav } from './styles';

function Cart({ cartTShirts, dispatch }) {
    return (
        <>
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
                                        <button type="button">
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
                                        <button type="button">
                                            <IoMdAddCircle
                                                size={20}
                                                color="#E73C7E"
                                            />
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <strong>R$ 299,90</strong>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        onClick={() =>
                                            dispatch({
                                                type: 'REMOVE_TSHIRT_TO_CART',
                                                id: tshirt.id,
                                            })
                                        }
                                    >
                                        <IoIosTrash size={24} color="#E73C7E" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </ProductCart>
                <ButtonsNav>
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
        </>
    );
}

export default connect((state) => ({
    cartTShirts: state.cart,
}))(Cart);
