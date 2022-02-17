import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function Zemo(props) {
  return <View style={[styles.container, props.style]}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(126,211,33,1)",
    borderWidth: 1,
    borderColor: "rgba(126,211,33,1)",
    borderRadius: 24
  }
});

export default Zemo;
