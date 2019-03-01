import React from 'react';
import Header from '../Header';

const Catalogo = props =>
    <div>
        <Header currentPath={props.location.pathname}/>
        <h1>Catalogo Component</h1>
    </div>

export default Catalogo;