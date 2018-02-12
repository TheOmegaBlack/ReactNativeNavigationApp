/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import AppWithNavigationState, { middleware } from './NavApp';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCw5IVqBnEA1fZlkAZGf9eiTWbzA1oYmqA',
      authDomain: 'manager-cd5ca.firebaseapp.com',
      databaseURL: 'https://manager-cd5ca.firebaseio.com',
      projectId: 'manager-cd5ca',
      storageBucket: '',
      messagingSenderId: '987137678811',
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(
      reducers,
      composeWithDevTools(applyMiddleware(ReduxThunk, middleware)),
    );
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default App;
