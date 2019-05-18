import { PropTypes } from 'prop-types';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import LocalStorage from './components/LocalStorage';

function App({ contentCached, updateAvailable }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React (Progressive Web Apps)
        </a>
        <p>E</p>
        {updateAvailable && <p>New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA.</p>}
        {contentCached && <p>Content is cached for offline use.</p>}
        <LocalStorage />
      </header>
    </div>
  );
}

App.propTypes = {
  contentCached: PropTypes.bool.isRequired,
  updateAvailable: PropTypes.bool.isRequired,
};

export default App;
