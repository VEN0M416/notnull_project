import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit'; // redux
import { Provider } from 'react-redux'; 

import App from './App';
import './index.css';
import profileReducer from './core/profileSlice'

const store = configureStore({
    reducer: {
        profile: profileReducer,
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store = {store}>
        <App />
    </Provider>
);

reportWebVitals();
