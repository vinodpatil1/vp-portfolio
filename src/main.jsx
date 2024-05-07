import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import myThemes from './theme.js';
import {HashRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
     <HashRouter>
     <ChakraProvider theme={myThemes}>
       <App />
    </ChakraProvider>
    </HashRouter>,
)
