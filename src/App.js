import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import Routes from './router';

import Header from './components/Header/index';
import Footer from './components/Footer/index';

import './config/ReactotronConfig';

import GlobalStyled from './styles/global';

import store from './store/index';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ToastContainer autoClose={3500}/>
                <Header />
                <GlobalStyled />
                <Routes />
                <Footer />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
