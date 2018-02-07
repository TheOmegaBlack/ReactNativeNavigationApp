import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {
  addNavigationHelpers,
} from 'react-navigation';
import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { composeWithDevTools } from 'remote-redux-devtools';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import RootStack from './Router';
import reducers from './reducers';


const middleware = createReactNavigationReduxMiddleware('root', state => state.nav);

const addListener = createReduxBoundAddListener('root');

class NavApp extends Component {
  render() {
    return (
      <RootStack
        navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.nav,
        addListener,
      })}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(NavApp);

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
    const store = createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk, middleware)));
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default App;
