import React from 'react';
import { connect } from 'react-redux';
import FormName from './FormName';
import FormEmail from './FormEmail';
import {
  addEmail,
  addCpf,
  addAddress,
  addCity,
  // addStateOfCountry,
  // addHouseType,
  // addSummaryCV,
  // addJob,
  // addJobDescription,
} from '../actions/add_field';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      stateOfCountry: '',
      houseType: '',
      summaryCV: '',
      job: '',
      jobDescription: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value });
  }

  componentDidUpdate() {
    this.props.addEmail(this.state.email);
    this.props.addCpf(this.state.cpf);
    this.props.addAddress(this.state.address);
  }
  render() {
    const { cityField } = this.props;
    return (
      <div>
        <form className="form">
          <FormName />
          <FormEmail
            value={this.state.email}
            handleChange={this.handleChange}
          />
          <label>
            Type your cpf:
            <input
              type="number"
              name="cpf"
              value={this.state.cpf}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Type your address:
            <input
              type="text"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Type your city:
            <input
              type="text"
              name="city"
              value={cityField}
              onChange={(event) => this.props.addCity(event.target.value)}
            />
          </label>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addEmail: (e) => dispatch(addEmail(e)),
  addCpf: (e) => dispatch(addCpf(e)),
  addAddress: (e) => dispatch(addAddress(e)),
  addCity: (e) => dispatch(addCity(e)),
});

const mapStateToProps = (state) => ({
  cityField: state.formData.city,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
