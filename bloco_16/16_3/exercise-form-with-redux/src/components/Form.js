import React from 'react';
import { connect } from 'react-redux';
import {addName, addEmail} from '../actions/add_field';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      name:'',
      email:''
    }

    this.handleChange = this.handleChange.bind(this);;
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  componentDidUpdate() {
    this.props.addNames(this.state.name)
  }
    render() {
      return(
        <div>
          <form className="form">
          <label>
            Type your name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            />
          </label>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
  addNames: e => dispatch(addName(e))});
  
export default connect(null, mapDispatchToProps)(Form);
