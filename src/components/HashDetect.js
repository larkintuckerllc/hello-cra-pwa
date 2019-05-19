import React, { Fragment, PureComponent } from 'react';

export default class HashDetect extends PureComponent {
  state = {
    flag: false,
  };

  render() {
    const { location: { hash } } = this.props;
    const { flag } = this.state;
    return (
      <Fragment>
        <h4>HashDetect</h4>
        <div>{hash}</div>
        <div>
          {flag ? 'FLAG ' : 'NO FLAG '}
          <button onClick={this.handleClick}>Flag</button>
        </div>
      </Fragment>
    );
  }

  handleClick = () => {
    this.setState({ flag: true });
  }
}
