import React from 'react';
import './homepage.style.scss'
import Directory from '../../components/directory/directory.component';

function Homepage(props) {
    return (
        <div className="homepage">
            <Directory/>
        </div>
    );
}

export default Homepage;