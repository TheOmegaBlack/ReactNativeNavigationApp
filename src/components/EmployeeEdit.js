import _ from 'lodash';
import React, { Component } from 'react';
import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { Card, CardSection, Button, Confirm } from './common';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';

class EmployeeEdit extends Component {
  static navigationOptions = {
    title: 'Employee Edit',
  }
  state = {
    showModal: false,
    uid: '',
  }

  componentWillMount() {
    const { navigation, employeeUpdate } = this.props;
    _.each(navigation.state.params.employee, (value, prop) => {
      employeeUpdate({ prop, value });
    });
    this.setState({uid: this.props.navigation.state.params.employee.uid})
  }
  onButtonPress() {
    const { name, phone, shift } = this.props;
    const { uid } = this.state;

    this.props.employeeSave({
      name, phone, shift, uid,
    });
    this.props.navigation.navigate("EmployeeList");
  }

  onTextPress() {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onAccept() {
    const { uid } = this.state;
    this.props.employeeDelete({ uid });
    this.setState({ showModal: false });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={() => this.onButtonPress()} >
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.onTextPress()}>
            Text Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Fire Employee
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={() => this.onAccept()}
          onDecline={() => this.onDecline()}
        >
          Are you sure you want to delete this?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeesForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);
