import React from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import { createReactNavigationReduxMiddleware, createReduxBoundAddListener } from 'react-navigation-redux-helpers';
import RootStack from './Router';

export const middleware = createReactNavigationReduxMiddleware('root', state => state.nav);

const addListener = createReduxBoundAddListener('root');

const NavApp = props =>
  (
    <RootStack
      navigation={addNavigationHelpers({
        dispatch: props.dispatch,
        state: props.nav,
        addListener,
      })}
    />
  );

const mapStateToProps = state => ({
  nav: state.nav,
});

const AppWithNavigationState = connect(mapStateToProps)(NavApp);

export default AppWithNavigationState;
