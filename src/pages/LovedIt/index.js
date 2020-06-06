import React from 'react';

import { MdClear, MdKeyboardArrowRight } from 'react-icons/md';

import { Container, TshirtsLovedIt, ListTshirtLovedIt } from './styles';

function LovedIt() {
    return (
        <Container>
            <TshirtsLovedIt>
                <h2>Você também gostou:</h2>
                <ListTshirtLovedIt>
                    <li>
                        <button type="button">
                            <MdClear size={25} color=" #E73C7E" />
                        </button>
                        <img
                            src="https://i.ibb.co/n6F6r7L/nazare-preto.jpg"
                            alt=""
                        />
                        <div>
                            <strong>Blusa Nazaré calculos cor preta</strong>
                            <span>
                                Blusinha cor preta Nazaré Calculos para
                                descolados muito leve, 100 algodão
                            </span>
                        </div>
                        <button type="button">
                            <MdKeyboardArrowRight size={40} color=" #E73C7E" />
                        </button>
                    </li>
                    <li>
                        <button type="button">
                            <MdClear size={25} color=" #E73C7E" />
                        </button>
                        <img
                            src="https://i.ibb.co/n6F6r7L/nazare-preto.jpg"
                            alt=""
                        />
                        <div>
                            <strong>Blusa Nazaré calculos cor preta</strong>
                            <span>
                                Blusinha cor preta Nazaré Calculos para
                                descolados muito leve, 100 algodão
                            </span>
                        </div>
                        <button type="button">
                            <MdKeyboardArrowRight size={40} color=" #E73C7E" />
                        </button>
                    </li>
                    <li>
                        <button type="button">
                            <MdClear size={25} color=" #E73C7E" />
                        </button>
                        <img
                            src="https://i.ibb.co/n6F6r7L/nazare-preto.jpg"
                            alt=""
                        />
                        <div>
                            <strong>Blusa Nazaré calculos cor preta</strong>
                            <span>
                                Blusinha cor preta Nazaré Calculos para
                                descolados muito leve, 100 algodão
                            </span>
                        </div>
                        <button type="button">
                            <MdKeyboardArrowRight size={40} color=" #E73C7E" />
                        </button>
                    </li>
                </ListTshirtLovedIt>
            </TshirtsLovedIt>
        </Container>
    );
}

export default LovedIt;
