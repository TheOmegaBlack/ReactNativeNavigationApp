import React from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goBack } from '../actions';

class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={this.props.goBack}
          title="Dismiss"
        >
          Go Back!
        </Button>
      </View>
    );
  }
}

const mapStateToProps = state =>
  ({

  })

const mapDispatchToProps = dispatch => bindActionCreators({
  goBack,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ModalScreen);
