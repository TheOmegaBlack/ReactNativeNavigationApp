import { NavigationActions } from 'react-navigation';
import RootStack from '../Router';

const initialNavState = RootStack.router.getStateForAction(NavigationActions.init());
// const initialState =
//   RootStack.router.getStateForAction(RootStack.router.getActionForPathAndParams('Auth'));

export default (state = initialNavState, action) => {
  console.log(state);
  const NewState = RootStack.router.getStateForAction(action, state);
  console.log(NewState);
  return NewState || state;
};
