import _ from 'lodash';
import React, { Component } from 'react';
import { FlatList, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { navigate, employeesFetch } from '../actions';
import EmployeeListItem from './EmployeeListItem';

class EmployeeList extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: 'Employee List',
      headerLeft: null,
      headerRight:
      (
        <Button
          onPress={() => params.navigate('EmployeeCreate')}
          title="Add"
        />
      ),
    };
  };

  componentWillMount() {
    console.log(this.props);
    this.props.navigation.setParams({ navigate: this.props.navigate });
    this.props.employeesFetch();
  }

  render() {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={({ item }) => <EmployeeListItem employee={item} />}
        keyExtractor={(item, index) => index}
      />
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => ({ ...val, uid }));
  return { employees };
};

const mapDispatchToProps = dispatch => bindActionCreators({
  navigate,
  employeesFetch,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
