import { NavigationActions } from 'react-navigation';
import RootStack from '../Router';

const initialNavState = RootStack.router.getStateForAction(NavigationActions.init());
// const initialState =
//   RootStack.router.getStateForAction(RootStack.router.getActionForPathAndParams('Auth'));

export default (state = initialNavState, action) => {
  const NewState = RootStack.router.getStateForAction(action, state);
  return NewState || state;
};
