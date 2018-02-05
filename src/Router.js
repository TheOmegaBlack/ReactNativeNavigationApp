import React from 'react'
import { StackNavigator } from 'react-navigation'
import LoginForm from './components/LoginForm'
import EmployeeList from './components/EmployeeList'

const RootStack = StackNavigator({
  LoginForm: {
    screen: LoginForm
  },
  EmployeeList: {
    screen: EmployeeList
  }
},
  {
    initialRouteName: 'LoginForm',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
        alignSelf: 'center',
      },
    }
  },
)

export default RootStack