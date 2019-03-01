import React from 'react';
import Header from '../Header';

const Contact = props =>
    <div>
         <Header currentPath={props.location.pathname}/>
        <h1>Contact Component</h1>
    </div>

export default Contact;