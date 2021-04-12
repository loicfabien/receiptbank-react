import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

class ReceiptListScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>ReceiptList screen</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(ReceiptListScreen);
