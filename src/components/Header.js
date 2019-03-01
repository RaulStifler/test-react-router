import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Logo from '../res/img/papeleria.svg';

const Header = props =>
    <div>
        <header className="App-header">
            <h1>React Router</h1>
        </header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to='/' className="navbar-brand">
                <img src={Logo} width="32" height="32" className="d-inline-block align-top" alt=""/>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className={ props.currentPath === '/'? 'nav-item active':'nav-item' }>
                        <Link className="nav-link" to="/">
                            Inicio { props.currentPath === '/' && <span className="sr-only">(current)</span> }
                        </Link>
                    </li>
                    <li className={ props.currentPath === '/catalogo'? 'nav-item active':'nav-item' }>
                        <Link className="nav-link" to="/catalogo">
                            Catalogo { props.currentPath === '/catalogo' && <span className="sr-only">(current)</span> }
                        </Link>
                    </li>
                    <li className={ props.currentPath === '/about'? 'nav-item active':'nav-item' }>
                        <Link className="nav-link" to="/about">
                            Nosotros { props.currentPath === '/about' && <span className="sr-only">(current)</span> }
                        </Link>
                    </li>
                    <li className={ props.currentPath === '/contact'? 'nav-item active':'nav-item' }>
                        <Link className="nav-link" to="/contact">
                            Contactanos { props.currentPath === '/contact' && <span className="sr-only">(current)</span> }
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

Header.propTypes = {
    currentPath: PropTypes.string.isRequired
}

export default Header;