import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../services/api';

import { Container, TshirtList } from './styles';

export default class Home extends Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {
        tshirts: [],
    };

    async componentDidMount() {
        const response = await Api.get('tshirts');
        console.log(response);
        this.setState({ tshirts: response.data });
    }

    render() {
        const { tshirts } = this.state;

        return (
            <Container>
                <TshirtList>
                    {tshirts.map((tshirt) => (
                        <li key={tshirt.id}>
                            <img src={tshirt.image} alt={tshirt.title} />
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
