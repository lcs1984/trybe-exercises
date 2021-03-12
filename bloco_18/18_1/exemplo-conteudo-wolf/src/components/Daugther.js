import React from 'react';
import MyContext from './MyContext';

class Daugther extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {(value) => (
          <div>
            <p>Eu tenho ${value.money} pra gastar</p>
            <button onClick={value.spendMoney}>Gastar</button>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

export default Daugther;
