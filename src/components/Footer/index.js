import React from 'react';

import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io';
import { Container } from './styles';

function Footer() {
    return (
        <Container>
            <strong>FALE CONOSCO</strong>
            <span>(88) 999999999</span>
            <span>Rua dos bobos, numero 0</span>
            <div>
                <IoLogoFacebook size={20} color="#FFF" />
                <IoLogoInstagram size={20} color="#FFF" />
                <IoLogoTwitter size={20} color="#FFF" />
            </div>
        </Container>
    );
}

export default Footer;
