import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Api from '../../services/api';
import {
    Container,
    ProductDetails,
    InfoProducts,
    ButtonsNav,
    DetailsContainer,
    SizeTable,
} from './styles';

export default class Details extends Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {
        tshirt: {},
    };

    async componentDidMount() {
        const { id } = this.props.match.params;

        console.log(id);
        const response = await Api.get(`/tshirts/${id}`);


        this.setState({ tshirt: response.data });
    }

    render() {
        const { tshirt } = this.state;

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
                            <div>
                                <input
                                    type="checkbox"
                                    id="tamP"
                                    name="tamP"
                                    value="tamP"
                                />
                                <label htmlFor="tamP"> P </label>

                                <input
                                    type="checkbox"
                                    id="tamM"
                                    name="tamM"
                                    value="tamM"
                                />
                                <label htmlFor="tamM"> M </label>

                                <input
                                    type="checkbox"
                                    id="tamG"
                                    name="tamG"
                                    value="tamG"
                                />
                                <label htmlFor="tamG"> G </label>

                                <input
                                    type="checkbox"
                                    id="tamGG"
                                    name="tamGG"
                                    value="tamGG"
                                />
                                <label htmlFor="tamGG"> GG </label>
                            </div>
                        </ProductDetails>
                    </Container>
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
