import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

class DetailsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Details screnn</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(DetailsScreen);
