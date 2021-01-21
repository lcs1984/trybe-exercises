import React from 'react';
import { Link } from 'react-router-dom';

class HowTo extends React.Component {
    render() {
        return(
            <div>
        <Link to="/">Voltar à Home</Link>
        <h1>Como Navegar</h1>
        </div>
        )
    }
}

export default HowTo;