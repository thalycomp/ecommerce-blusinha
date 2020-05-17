import React from 'react';
import { Link } from 'react-router-dom';
import { RiShoppingBagLine } from 'react-icons/ri';
import { AiOutlineUser } from 'react-icons/ai';

// eslint-disable-next-line import/no-unresolved
import logo from '../../assets/logo.png';

import { Container, Cart } from './styles';

function Header() {
    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="blusinha" />
            </Link>
            <Cart to="/cart">
                <Link to="/">
                    <AiOutlineUser size={45} color="#FFF" />
                </Link>
                <RiShoppingBagLine size={45} color="#FFF" />
                <div>
                    <span>0</span>
                </div>
            </Cart>
        </Container>
    );
}

export default Header;
