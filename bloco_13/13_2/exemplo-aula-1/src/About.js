import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
    render() {
        return(
            <div>
                <p>Se meu navio...</p>
                <Link to="/">Voltar à Home</Link>
            </div>
        )
    }
}

export default About;