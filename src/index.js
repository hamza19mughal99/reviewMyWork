import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import App from './App';
import { Provider } from "react-redux";
import store from "./Redux/Store";
import axios from "axios";
import { GoogleOAuthProvider } from '@react-oauth/google';

// axios.defaults.baseURL = "http://localhost:4000/api/"
axios.defaults.baseURL = "https://rmw-backend.azurewebsites.net/api/"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <GoogleOAuthProvider clientId="384765822016-30p8jcbvfp8nmj1u2v9v6tglp7p1e0ir.apps.googleusercontent.com">
    <Provider store={store}>
        <App />
    </Provider>
    // </GoogleOAuthProvider>
);