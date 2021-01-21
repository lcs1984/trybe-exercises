import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return(
        <div>
          <Link to="/about">About</Link>
          <Link to="/howto">HowTo</Link>
          <Link to="/profile">Profile</Link>
          <h1>Minha Homepage</h1>
        </div>
        )
    }
}

export default Home;