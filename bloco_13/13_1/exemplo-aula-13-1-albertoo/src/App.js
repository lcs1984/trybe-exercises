import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    };
  }

  async fetchJoke() {
    const requestHeaders = {headers: { Accept: 'application/json'}}
    const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
    const resquestObject = await requestReturn.json()
    this.setState({
      jokeObj: resquestObject
    })
  }

  componentDidMount(){
    this.fetchJoke();
  }

  saveJoke() {
    this.fetchJoke();
  }

  renderJokeElement() {
    return(
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button type="button" onClick={this.saveJoke}>
          Salvar piada!
        </button>
      </div>
    );
  }

  render() {
    const {storedJokes, jokeObj} = this.state;
    const loadingElement = <span>Loading...</span>

    return(
      <div>
        <span>
          {storedJokes.map(({id, joke}) => (<p key={id}>{joke}</p>))}
        </span>
        <p>{jokeObj ? jokeObj.joke : loadingElement}</p>
      </div>
    )
  }
}

export default App;

