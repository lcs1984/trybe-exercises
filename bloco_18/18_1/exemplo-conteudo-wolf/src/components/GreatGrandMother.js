import React from 'react';
import GrandMother from './GrandMother';

class GreatGrandMother extends React.Component {

  render() {
    return (
      <div>
        <h1>Eu sou a bisavó</h1>
        <GrandMother />
      </div>
    );
  }
}

export default GreatGrandMother;
