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

function Cart({ cartTShirts }) {
    console.log( cartTShirts );

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
                        <tr>
                            <td>
                                <img
                                    src="https://t-static.dafiti.com.br/Ubg3fw2vDGCPyWHG0SbSfhNBrQA=/fit-in/427x620/static.dafiti.com.br/p/fatal-camiseta-fatal-logo-preta-2837-7570015-1-product.jpg"
                                    alt="Blusa preta"
                                />
                            </td>
                            <td>
                                <span>CÓD: 1234</span>
                                <strong>Blusa muito confortável</strong>
                                <p>
                                    Blusa básica da marca Derifante feita 100%
                                    de algodão. lorem
                                </p>
                                <span>TAM: M</span>
                            </td>
                            <td>
                                <strong>R$ 59,99</strong>
                            </td>
                            <td>
                                <div>
                                    <button type="button">
                                        <IoMdRemoveCircle
                                            size={20}
                                            color="#E73C7E"
                                        />
                                    </button>
                                    <input type="number" readOnly />
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
                                <IoIosTrash size={24} color="#E73C7E" />
                            </td>
                        </tr>
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

export default connect(state => ({
    cartTShirts: state.cart,
}))(Cart);
