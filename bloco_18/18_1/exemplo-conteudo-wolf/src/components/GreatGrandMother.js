import React from 'react';
import GrandMother from './GrandMother';
import MyContext from './MyContext';

class GreatGrandMother extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      money: 1000000000,
    };
    this.handleSpendMoney = this.handleSpendMoney.bind(this);
  }

  handleSpendMoney() {
    this.setState((previousState) => ({ money: previousState.money - 100000 }));
  }

  render() {
    const contextValue = {
      money: this.state.money,
      spendMoney: this.handleSpendMoney,
    };
    return (
      <MyContext.Provider value={ contextValue }>
        <div>
          <h1>Eu sou a bisavó</h1>
          <GrandMother />
        </div>
      </MyContext.Provider>
    );
  }
}

export default GreatGrandMother;
