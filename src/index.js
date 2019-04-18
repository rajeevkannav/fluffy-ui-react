import React from 'react';
import ReactDOM from 'react-dom';
// BOOTSTRAP STUFF
import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './index.css';
import App from './App';
import Archived from './Archived';
import Header from "./components/Header";
import editTodo from "./components/editTodo";
import attachTags from "./components/attachTags";
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import history from './history'
import configureStore from './store';
import {Router, Route, Switch} from 'react-router-dom';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Header/>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/archived/" component={Archived}/>
                    <Route path="/editTodo/:id" component={editTodo}/>
                    <Route path="/attachTags/:id" component={attachTags}/>
                </Switch>
            </div>
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
