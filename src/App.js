import { PropTypes } from 'prop-types';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import IndexedDB from './components/IndexedDB';
import LocalStorage from './components/LocalStorage';

function App({ contentCached, updateAvailable }) {
  return (
    <Router>
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
          <p>F</p>
          {updateAvailable && <p>New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA.</p>}
          {contentCached && <p>Content is cached for offline use.</p>}
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/local-storage/">LocalStorage</Link></li>
            <li><Link to="/indexed-db/">IndexedDB</Link></li>
          </ul>
          <Switch>
            <Route path="/local-storage/" component={LocalStorage} />
            <Route path="/indexed-db/" component={IndexedDB} />
            <Route component={Home} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

App.propTypes = {
  contentCached: PropTypes.bool.isRequired,
  updateAvailable: PropTypes.bool.isRequired,
};

export default App;
