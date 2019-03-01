import React from 'react';
import Header from '../Header';

const Home = props => 
    <div>
        <Header currentPath={props.location.pathname}/>
        <h1>Home Component</h1>
    </div>

export default Home;