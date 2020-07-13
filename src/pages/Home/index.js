import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import PropTypes from 'prop-types';

import * as ActionsLovedIt from '../../store/Modules/lovedIt/actions';

import Api from '../../services/api';

import { Container, TshirtList } from './styles';

class Home extends Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {
        tshirts: [],
    };

    async componentDidMount() {
        const response = await Api.get('tshirts');

        this.setState({ tshirts: response.data });
    }

    handleLovedIt = (lovedIt) => {
        const { dispatch } = this.props;

        dispatch(ActionsLovedIt.addToLovedIt(lovedIt));
    };

    render() {
        const { tshirts } = this.state;
        const { LovedIt } = this.props;

        return (
            <Container>
                <TshirtList>
                    {tshirts.map((tshirt) => (
                        <li key={tshirt.id}>
                            <div>
                                <img src={tshirt.image} alt={tshirt.title} />
                                <button
                                    type="button"
                                    onClick={() => this.handleLovedIt(tshirt)}
                                >
                                    {LovedIt.find(
                                        (lovedIt) => lovedIt.id === tshirt.id
                                    ) ? (
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
const mapStateToProps = (state) => ({
    LovedIt: state.lovedIt,
});
export default connect(mapStateToProps)(Home);

Home.propTypes = {
    dispatch: PropTypes.func.isRequired,
    LovedIt: PropTypes.arrayOf(Object).isRequired,
};
