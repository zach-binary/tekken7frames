import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App';
import CharacterSelect from './features/CharacterSelect'
import Movelist from './features/Movelist'
import './index.css';
import { Route, Router, browserHistory } from 'react-router';
import reducers from './reducers';

const store = createStore(reducers);

const Routes = () => {
  return (
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" component={CharacterSelect} />
        <Route path="/character/:link" component={Movelist} />
      </Route>
    </Router>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
