import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.css';
import reducer from './reducers'
import EventsIndex from './components/events_index.js';
import EventsNew from './components/events_new.js';
// import * as serviceWorker from './serviceWorker';

const store = createStore(reducer, applyMiddleware(ReduxThunk))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/events" component={EventsIndex}/>
        <Route exact path="/events/new" component={EventsNew}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWAserviceWorker.unregister();
