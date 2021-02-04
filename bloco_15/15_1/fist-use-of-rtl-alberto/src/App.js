import React from 'react';

// Ajustando no Githubaa

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      savedEmail: '',
    }
    this.changeEmail = this.changeEmail.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
    this.saveEmail = this.saveEmail.bind(this);
  }

  changeEmail({ target }) {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  sendEmail() {

  }

  saveEmail(value) {
    // const { email } = this.state;
    this.setState({
      savedEmail: value,
      email: '',
    })
  }

  render() {
    const { email, savedEmail } = this.state;
    return(
      <div className="App">Leo
        <form>
          <label htmlFor="id-email">Email:</label>
            <input data-testid="id-email" type="email" id="id-email" name="email" value={ email } onChange={this.changeEmail}/>
            <button data-testid="id-send" type="button" id="btn-send" value="Enviar" onClick={ () => this.saveEmail(email) }>Enviar</button>
            <button type="button" onClick={ this.sendEmail }>Voltar</button>
            <h2 data-testid="id-email-user">{`Valor: ${savedEmail}`}</h2>
        </form>  
      </div>
    )
  }
}

export default App;
