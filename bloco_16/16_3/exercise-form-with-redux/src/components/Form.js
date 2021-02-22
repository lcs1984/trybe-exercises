import React from 'react';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      name:'',
      email:''
    }
  }

    render() {
        return(
            <div>
                Formulario
            </div>
        )
    }
}

export default Form;