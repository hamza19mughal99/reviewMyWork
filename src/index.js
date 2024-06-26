import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import 'react-quill/dist/quill.snow.css';
import App from './App';
import { Provider } from "react-redux";
import store from "./Redux/Store";
import axios from "axios";

//LOCAL
axios.defaults.baseURL = "http://localhost:4000/api/"

// axios.defaults.baseURL = "https://reviewmyworkbackend-staging.azurewebsites.net/api/"

//LIVE
// axios.defaults.baseURL = "https://reviewmyworkbackend.azurewebsites.net/api/"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);