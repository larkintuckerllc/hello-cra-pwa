import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

class Index extends PureComponent {
  state = {
    contentCached: false,
    updateAvailable: false,
  };

  componentDidMount() {
    const config = {
      onSuccess: this.handleSuccess,
      onUpdate: this.handleUpdate,
    }
    serviceWorker.register(config);
  }

  render() {
    const { contentCached, updateAvailable } = this.state;
    return <App contentCached={contentCached} updateAvailable={updateAvailable} />;
  }

  handleUpdate = () => {
    this.setState({ updateAvailable: true});
  }

  handleSuccess = () => {
    this.setState({ contentCached: true });
  }
}


ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
