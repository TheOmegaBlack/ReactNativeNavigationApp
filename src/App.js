import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import composeWithDevTools from 'remote-redux-devtools';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyCw5IVqBnEA1fZlkAZGf9eiTWbzA1oYmqA",
      authDomain: "manager-cd5ca.firebaseapp.com",
      databaseURL: "https://manager-cd5ca.firebaseio.com",
      projectId: "manager-cd5ca",
      storageBucket: "",
      messagingSenderId: "987137678811"
    };
    firebase.initializeApp(config);
  }
  
  render() {
    const store = createStore(reducers, {}, composeWithDevTools(
      applyMiddleware(ReduxThunk)
    ));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    )
  }
}

export default App;