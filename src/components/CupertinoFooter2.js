import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

function CupertinoFooter2(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.btnWrapper1}>
        <MaterialCommunityIconsIcon
          name="home"
          style={[
            styles.icon,
            {
              color: props.active ? "#007AFF" : "#616161"
            }
          ]}
        ></MaterialCommunityIconsIcon>
        <Text
          style={[
            styles.home,
            {
              color: props.active ? "#007AFF" : "#9E9E9E"
            }
          ]}
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper3}>
        <EntypoIcon name="arrow-long-right" style={styles.icon2}></EntypoIcon>
        <Text style={styles.transaction}>Transaction</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper4}>
        <MaterialCommunityIconsIcon
          name="plus"
          style={styles.icon3}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper2}>
        <FeatherIcon name="pie-chart" style={styles.icon1}></FeatherIcon>
        <Text style={styles.budget}>Budget</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper5}>
        <FontAwesomeIcon name="user" style={styles.icon4}></FontAwesomeIcon>
        <Text style={styles.profile}>Profile</Text>
      </TouchableOpacity>
      <Text style={styles.text}></Text>
      <EntypoIcon name="arrow-long-left" style={styles.icon5}></EntypoIcon>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,1)",
    justifyContent: "space-between"
  },
  btnWrapper1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24
  },
  home: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12
  },
  btnWrapper3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon2: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24,
    color: "#616161"
  },
  transaction: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    color: "#9E9E9E"
  },
  btnWrapper4: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon3: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 46,
    color: "rgba(144,19,254,1)",
    padding: 0
  },
  btnWrapper2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon1: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24,
    color: "#616161"
  },
  budget: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    color: "#9E9E9E"
  },
  btnWrapper5: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  icon4: {
    backgroundColor: "transparent",
    opacity: 0.8,
    fontSize: 24,
    color: "#616161"
  },
  profile: {
    backgroundColor: "transparent",
    paddingTop: 4,
    fontSize: 12,
    color: "#9E9E9E"
  },
  text: {
    top: 25,
    left: 188,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  icon5: {
    top: 10,
    left: 91,
    position: "absolute",
    color: "rgba(128,128,128,1)",
    fontSize: 24
  }
});

export default CupertinoFooter2;
