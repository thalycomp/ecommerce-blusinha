import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './router';
import Header from './components/Header/index';
import Footer from './components/Footer/index';

import GlobalStyled from './styles/global';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <GlobalStyled />
            <Routes />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
