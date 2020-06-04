import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import Api from '../../services/api';

import { Container, TshirtList } from './styles';

export default class Home extends Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {
        tshirts: [],
        disable: false,
    };

    async componentDidMount() {
        const response = await Api.get('tshirts');

        this.setState({ tshirts: response.data });
    }

    handleLove = () => {
        const { disable } = this.state;

        let nvDisable = true;
        if (disable === true) {
            nvDisable = false;
        }

        this.setState({ disable: nvDisable });
    };

    render() {
        const { tshirts, disable } = this.state;

        return (
            <Container>
                <TshirtList>
                    {tshirts.map((tshirt) => (
                        <li key={tshirt.id}>
                            <div>
                                <img src={tshirt.image} alt={tshirt.title} />
                                <button
                                    type="button"
                                    onClick={() => this.handleLove()}
                                >
                                    {disable ? (
                                        <IoMdHeart size={25} color="red" />
                                    ) : (
                                        <IoMdHeartEmpty size={25} color="red" />
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
