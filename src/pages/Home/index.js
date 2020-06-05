import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import Api from '../../services/api';

import { Container, TshirtList } from './styles';

export default class Home extends Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {
        tshirts: [],
        lovedIt: [],
    };

    async componentDidMount() {
        const response = await Api.get('tshirts');

        this.setState({ tshirts: response.data });
    }

    handleLovedIt = (id) => {
        const { lovedIt } = this.state;

        const lovedAlreadySelected = lovedIt.findIndex(
            (tshirtLoved) => tshirtLoved === id
        );

        if (lovedAlreadySelected !== -1) {
            const filterId = lovedIt.filter((idLoved) => idLoved !== id);
            this.setState({ lovedIt: filterId });
        } else {
            const data = [...lovedIt, id];
            this.setState({ lovedIt: data });
        }
    };

    render() {
        const { tshirts, lovedIt } = this.state;

        return (
            <Container>
                <TshirtList>
                    {tshirts.map((tshirt) => (
                        <li key={tshirt.id}>
                            <div>
                                <img src={tshirt.image} alt={tshirt.title} />
                                <button
                                    type="button"
                                    onClick={() =>
                                        this.handleLovedIt(tshirt.id)
                                    }
                                >
                                    {lovedIt.includes(tshirt.id) ? (
                                        <IoMdHeart size={25} color="#E73C7E" />
                                    ) : (
                                        <IoMdHeartEmpty
                                            size={25}
                                            color="#E73C7E"
                                        />
                                    )}
                                </button>
                            </div>
                            <strong>{tshirt.title}</strong>
                            <span>R$ {tshirt.price}</span>
                            <Link to={`/details/${tshirt.id}`}>COMPRAR</Link>
                        </li>
                    ))}
                </TshirtList>
            </Container>
        );
    }
}
