import RootStack from '../Router';
import LoginForm from '../components/LoginForm'

const initialState = RootStack.router.getStateForAction(RootStack.router.getActionForPathAndParams('LoginForm'));

export default (state = initialState, action) => {
  console.log(state)
  const nextState = RootStack.router.getStateForAction(action, state);
  return nextState || state;
};
