import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions'
class LoginForm extends Component {
  onEmailChanged = text => {
    this.props.onEmailChanged(text)
  }
  
  onPasswordChanged = text => {
    this.props.onPasswordChanged(text)
  }
  
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChanged}
            value={this.props.email}
          />
        </CardSection>
        
        
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChanged}
            value={this.props.password}
          />
        </CardSection>
        
        
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
  };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);