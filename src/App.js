import React from 'react';
import { toast } from 'react-toastify';

import Routes from './routes';

import GlobalStyle from './styles/global';

import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const App = () => (
    <>
        <Routes />
        <GlobalStyle />
    </>
);

export default App;
