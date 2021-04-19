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
    this.setState(
      {loading: true},
      async() => {
        const requestHeaders = {headers: { Accept: 'application/json'}}
        const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
        const resquestObject = await requestReturn.json()
        this.setState({
          loading: false,
          jokeObj: resquestObject
        })
      })
    }

  componentDidMount(){
    // Sequencia-> constructor, render e did mount
    // Entao a primeira vez ele rendenriza sem chamar a função 
    this.fetchJoke();
  }

  saveJoke() {
    this.setState(({storedJokes, jokeObj}) => ({
      storedJokes: [...storedJokes, jokeObj]
    }))
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
    const {storedJokes, loading} = this.state;
    const loadingElement = <span>Loading...</span>
    console.log('rederizou');
    return(
      <div>
        <span>
          {storedJokes.map(({id, joke}) => (<p key={id}>{joke}</p>))}
        </span>
        <p>{loading ? loadingElement : this.renderJokeElement()}</p>
      </div>
    )
  }
}

export default App;
