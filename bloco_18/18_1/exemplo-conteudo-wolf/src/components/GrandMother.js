import React from 'react';
import Father from './Father';

class GrandMother extends React.Component {

  render() {
    return (
      <div>
        <h2>Eu sou a avó</h2>
        <Father />
      </div>
    );
  }
}

export default GrandMother;
