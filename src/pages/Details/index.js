/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import Api from '../../services/api';
import * as ActionsCart from '../../store/Modules/cart/actions';

import {
    Container,
    ProductDetails,
    InfoProducts,
    ButtonsNav,
    DetailsContainer,
    SizeTable,
} from './styles';

class Details extends Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {
        tshirt: [],
        amount: [],
    };

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await Api.get(`/tshirts/${id}`);
        const amount = await Api.get(`/amount/${id}`);

        this.setState({ tshirt: response.data, amount: amount.data });
    }

    handleAddtoCart = (tshirt) => {
        const { dispatch, history } = this.props;

        if (!tshirt.tam) {
            toast.error('Escolha um tamanho');
            return;
        }
        history.push('/cart');

        dispatch(ActionsCart.addToCartRequest(tshirt));
    };

    handleChange = (event) => {
        const { tshirt } = this.state;
        const data = { ...tshirt, tam: event.target.value };

        this.setState({ tshirt: data });
    };

    render() {
        const { tshirt, amount } = this.state;

        return (
            <>
                <DetailsContainer>
                    <Container>
                        <div>
                            <img src={tshirt.image} alt={tshirt.title} />
                        </div>
                        <ProductDetails>
                            <div>
                                <span>CÓD: {tshirt.cod}</span>
                                <strong>{tshirt.title}</strong>
                                <p>{tshirt.description}</p>
                            </div>
                            <strong>R$ {tshirt.price}</strong>
                            <select onChange={this.handleChange}>
                                <option value="default" disabled selected>
                                    Escolha um tamanho
                                </option>
                                {amount.p === 0 ? (
                                    <option value="p" disabled>
                                        TAM: P
                                    </option>
                                ) : (
                                    <option value="p">TAM: P</option>
                                )}
                                {amount.m === 0 ? (
                                    <option value="m" disabled>
                                        TAM: M
                                    </option>
                                ) : (
                                    <option value="m">TAM: M</option>
                                )}
                                {amount.get === 0 ? (
                                    <option value="g" disabled>
                                        TAM: G
                                    </option>
                                ) : (
                                    <option value="g">TAM: G</option>
                                )}
                                {amount.gg === 0 ? (
                                    <option value="gg" disabled>
                                        TAM: GG
                                    </option>
                                ) : (
                                    <option value="gg">TAM: GG</option>
                                )}
                            </select>
                        </ProductDetails>
                    </Container>
                    <ButtonsNav>
                        <div>
                            <Link to="/">
                                <IoIosArrowBack size={20} color="#fff" />
                                CONTINUAR COMPRANDO
                            </Link>
                            <button
                                onClick={() => this.handleAddtoCart(tshirt)}
                                type="button"
                                to="/cart"
                            >
                                COLOCAR NO CARRINHO
                                <IoIosArrowForward size={20} color="#fff" />
                            </button>
                        </div>
                    </ButtonsNav>
                </DetailsContainer>
                <InfoProducts>
                    <strong>Medidas</strong>
                    <div>
                        <SizeTable>
                            <thead>
                                <tr>
                                    <th />
                                    <th> Altura </th>
                                    <th> Largura </th>
                                    <th> Manga </th>
                                    <th> Circunfência </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> P </td>
                                    <td> 68 </td>
                                    <td> 49 </td>
                                    <td> 18 </td>
                                    <td> 36 </td>
                                </tr>
                                <tr>
                                    <td> M </td>
                                    <td> 70 </td>
                                    <td> 52 </td>
                                    <td> 19 </td>
                                    <td> 38 </td>
                                </tr>
                                <tr>
                                    <td> G </td>
                                    <td> 73 </td>
                                    <td> 55 </td>
                                    <td> 20 </td>
                                    <td> 40 </td>
                                </tr>
                                <tr>
                                    <td> GG </td>
                                    <td> 76 </td>
                                    <td> 58 </td>
                                    <td> 21 </td>
                                    <td> 42 </td>
                                </tr>
                            </tbody>
                        </SizeTable>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Neque quibusdam architecto voluptates autem
                            nostrum quia laudantium odio expedita quo
                            repudiandae, nulla esse a, totam, iure ducimus aut
                            vitae animi quis?
                        </p>
                    </div>
                </InfoProducts>
            </>
        );
    }
}

export default connect()(Details);
