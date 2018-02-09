import { StackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import EmployeeCreate from './components/EmployeeCreate';
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
  EmployeeCreate: {
    screen: EmployeeCreate,
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
  },
);

export default RootStack;
