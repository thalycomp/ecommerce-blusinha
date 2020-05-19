import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import {
    Container,
    ProductDetails,
    InfoProducts,
    ButtonsNav,
    DetailsContainer,
    SizeTable,
} from './styles';

function Details() {
    return (
        <>
            <DetailsContainer>
                <Container>
                    <div>
                        <img
                            src="https://i.ibb.co/n6F6r7L/nazare-preto.jpg"
                            alt="Blusa preta"
                        />
                    </div>
                    <ProductDetails>
                        <div>
                            <span>CÓD: 123</span>
                            <strong>Blusa preta muito bonita</strong>
                            <p>
                                Blusa preta produzida pela Blusinha para
                                elegantes, 100% em algodão.
                            </p>
                        </div>
                        <strong>R$ 59,90</strong>
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
                        <button type="button" to="/">
                            <IoIosArrowBack size={20} color="#fff" />
                            CONTINUAR COMPRANDO
                        </button>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Neque quibusdam architecto voluptates autem nostrum quia
                        laudantium odio expedita quo repudiandae, nulla esse a,
                        totam, iure ducimus aut vitae animi quis?
                    </p>
                </div>
            </InfoProducts>
        </>
    );
}

export default Details;
