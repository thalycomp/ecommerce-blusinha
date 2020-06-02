/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { RiShoppingBagLine } from 'react-icons/ri';
import { FaRegHeart } from 'react-icons/fa';

// eslint-disable-next-line import/no-unresolved
import logo from '../../assets/logo.png';

import { Container, Cart } from './styles';

function Header({ cartTotal }) {

    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="blusinha" />
            </Link>
            <Cart to="/cart">
                <Link to="/login">
                    <FaRegHeart size={38} color="#FFF" />
                </Link>
                <RiShoppingBagLine to="/cart" size={45} color="#FFF" />
                <div>
                    <span>{cartTotal}</span>
                </div>
            </Cart>
        </Container>
    );
}

export default connect((state) => ({
    cartTotal: state.cart.length,
}))(Header);
