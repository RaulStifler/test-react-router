import React from 'react';
import Header from '../Header';

const About = props => 
    <div>
        <Header currentPath={props.location.pathname}/>
        <h1>About Component</h1>
    </div>

export default About;