import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { navigateWithParams } from '../actions';
import { CardSection } from './common';

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

class EmployeeListItem extends Component {
  render() {
    console.log(this.props);
    const { employee } = this.props;
    const { name } = employee;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.navigateWithParams('EmployeeEdit', { employee })}
      >
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

export default connect(() => ({}), { navigateWithParams })(EmployeeListItem);
