import { StackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import ModalTest from './components/ModalTest';

const MainStack = StackNavigator({
  EmployeeList: {
    screen: EmployeeList,
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'blue',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        alignSelf: 'center',
      },
    },
  },
});

const AuthStack = StackNavigator({
  LoginForm: {
    screen: LoginForm,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        alignSelf: 'center',
      },
    },
  },
});

const RootStack = StackNavigator(
  {
    Auth: {
      screen: AuthStack,
    },
    Main: {
      screen: MainStack,
    },
    Modal: {
      screen: ModalTest,
    },
  },
  {
    headerMode: 'none',
    initialRouteName: 'Auth',
    mode: 'modal',
  },
);

export default RootStack;
