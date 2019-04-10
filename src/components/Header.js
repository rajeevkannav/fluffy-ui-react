import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="/">Fluffy Frontend</a>
                        </div>
                        <Link to="/archived" className="nav navbar-nav">Archived Todos</Link>
                    </div>
                </nav>
            </header>
        )
    }

};

export default Header;