import React from 'react';
import ReactDOM from 'react-dom';
// BOOTSTRAP STUFF
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './index.css';
import App from './App';
import Archived from './Archived';
import Header from "./components/Header";
import Footer from "./components/Footer";
import editTodo from "./components/editTodo";
import attachTags from "./components/attachTags";
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import configureStore from './store';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Header/>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/archived/" component={Archived}/>
                    <Route path="/editTodo/" component={editTodo}/>
                    <Route path="/attachTags/" component={attachTags}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
