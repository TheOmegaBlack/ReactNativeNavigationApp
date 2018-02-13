import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate, newEmployee } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  static navigationOptions = {
    title: 'Employee Create',
  }
  componentWillMount() {
    this.props.newEmployee();
  }
  onButtonPress() {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  }
  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={() => this.onButtonPress()}>
            Create
          </Button>
        </CardSection>
      </Card>);
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeesForm;
  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeCreate, employeeUpdate, newEmployee },
)(EmployeeCreate);
