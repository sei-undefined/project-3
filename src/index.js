import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter} from "react-router-dom"; // npm install react-router-dom
// redux imports
import reducer from './components/store/reducer';
import { createStore } from 'redux';
//react-redux imports
import {Provider} from 'react-redux';

// creating redux store
const store = createStore(reducer)

// wrapping app with browser router and provider tags
let app = <BrowserRouter><App /></BrowserRouter>
app = <Provider store={store}>{app}</Provider>

ReactDOM.render( app , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
