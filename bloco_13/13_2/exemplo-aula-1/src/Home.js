import React from 'react';
import About from './About';
import HowTo from './HowTo';
import Profile from './Profile';
import { Route } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return(
        <div>
          <h1>Minha Homepage</h1>
          <Route path="/about" component={About} />
          <Route path="/howto" component={HowTo} />
          <Route path="/profile"><Profile/></Route>
        </div>
        )
    }
}

export default Home;