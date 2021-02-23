import React from 'react'

class FormEmail extends React.Component {
  render() {
    const { value, handleChange } = this.props

    return (
      <label>
        Type your email:
        <input type="email" name="email" value={value} onChange={handleChange} />
      </label>
    )
  }
}

export default FormEmail
