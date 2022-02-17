import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";

function CupertinoHeaderWithSubTitle(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.textWrapper}></View>
      <TouchableOpacity style={styles.rightIconButton}></TouchableOpacity>
      <FontAwesomeIcon
        name="user-circle-o"
        style={styles.icon}
      ></FontAwesomeIcon>
      <EntypoIcon name="chevron-down" style={styles.icon2}></EntypoIcon>
      <Text style={styles.october}>October</Text>
      <FontAwesomeIcon name="bell" style={styles.icon3}></FontAwesomeIcon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#EFEFF4"
  },
  textWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  rightIconButton: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingLeft: 8,
    paddingRight: 8
  },
  icon: {
    top: 4,
    left: 11,
    position: "absolute",
    color: "rgba(144,19,254,1)",
    fontSize: 33,
    width: 40,
    height: 40
  },
  icon2: {
    top: 4,
    left: 112,
    position: "absolute",
    color: "rgba(144,19,254,1)",
    fontSize: 30
  },
  october: {
    top: 15,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(0,0,0,1)",
    left: 155
  },
  icon3: {
    top: 10,
    left: 333,
    position: "absolute",
    color: "rgba(144,19,254,1)",
    fontSize: 24
  }
});

export default CupertinoHeaderWithSubTitle;
