import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';

const saveToSessionStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        sessionStorage.setItem('state', serializedState)
    } catch(e) {
        console.log(e);
    }
}

const loadFromSessionStorage = () => {
    try {
        const serializedState = sessionStorage.getItem('state');
        if (serializedState === null) return undefined
        return JSON.parse(serializedState);
    } catch(e) {
        console.log(e);
        return undefined;
    }
}

const store = createStore(reducer, loadFromSessionStorage());

store.subscribe(() => saveToSessionStorage(store.getState()));

ReactDOM.render(
    <Provider store={store}><App /></Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
