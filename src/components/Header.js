import React, {Component} from 'react';
class Header extends Component{
    render(){
        return(
            <header>
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Fluffy Frontend</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li><a href="#/archived">Archived Todos</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }

};

export default Header;