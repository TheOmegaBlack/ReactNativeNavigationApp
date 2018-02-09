import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { navigate } from '../actions';

class EmployeeList extends Component {
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      headerTitle: 'Employee List',
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
    this.props.navigation.setParams({ navigate: this.props.navigate });
  }

  render() {
    return (
      <View>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  navigate,
}, dispatch);

export default connect(() => ({}), mapDispatchToProps)(EmployeeList);
