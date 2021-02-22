import React from 'react'
import { Provider } from 'react-redux';
import store from './store';
import Form from './components/Form';

class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <Form />
      </Provider>
    )
  }
}

export default App;
