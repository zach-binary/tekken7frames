import React from 'react';
import ReactDOM from 'react-dom';
import { App, CharacterSelect, FrameData } from './App';
import './index.css';
import { Route, Router, browserHistory } from 'react-router';

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" component={CharacterSelect} />
        <Route path="/character/:link" component={FrameData} />
      </Route>
    </Router>
  )
}

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
