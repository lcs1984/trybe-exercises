import React from 'react';
import { connect } from 'react-redux';
import { addName } from '../actions/add_field';

class FormName extends React.Component {
  render() {
    // const { value, handleChange } = this.props
    const {nameField, addName } = this.props;
    return (
      <label>
        Type your name:
        <input type="text" name="name" value={nameField} onChange={(event) => addName(event.target.value)} />
      </label>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addName: (e) => dispatch(addName(e)),
});

const mapStateToProps = (state) => ({
    nameField: state.formData.name,
  });

export default connect(mapStateToProps, mapDispatchToProps)(FormName);
