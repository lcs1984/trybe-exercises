import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
    render() {
        return(
        <div>
            <Link to="/">Voltar à Home</Link>
            <Link to="/">Voltar à Home</Link>
            <h1>Meu Perfil: {this.props.name}</h1>
            <h2>Caminho: {this.props.match.params.person}</h2>

        </div>
        )
    }
}

export default Profile;