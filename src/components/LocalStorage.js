import React, { Fragment, PureComponent } from 'react';

const storedValue = window.localStorage.getItem('value');
const initialValue = storedValue === null ? '' : storedValue;

export default class LocalStorage extends PureComponent {
  state = {
    value: initialValue,
  };

  render() {
    const { value } = this.state;
    return (
      <Fragment>
        <h4>LocalStorage Example</h4>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={value} />
          <button type="submit">Save</button>
        </form>
      </Fragment>
    )
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = e => {
    const { value } = this.state;
    e.preventDefault();
    if (value === '') {
      window.localStorage.removeItem('value');
      return;
    }
    window.localStorage.setItem('value', value);
  };
}
