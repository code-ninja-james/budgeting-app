import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import CupertinoHeaderWithSubTitle from "../components/CupertinoHeaderWithSubTitle";
import FeatherIcon from "react-native-vector-icons/Feather";
import Zemo from "../components/Zemo";
import Svg, { Ellipse } from "react-native-svg";
import MaterialButtonLight from "../components/MaterialButtonLight";
import CupertinoFooter2 from "../components/CupertinoFooter2";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialDisabledTextbox from "../components/MaterialDisabledTextbox";

function Home(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rectRow}>
        <View style={styles.rect}></View>
        <View style={styles.cupertinoHeaderWithSubTitleColumn}>
          <CupertinoHeaderWithSubTitle
            style={styles.cupertinoHeaderWithSubTitle}
          ></CupertinoHeaderWithSubTitle>
          <Text style={styles.accountBalance}>Account Balance</Text>
          <Text style={styles.loremIpsum4}></Text>
          <View style={styles.loremIpsum2StackStack}>
            <View style={styles.loremIpsum2Stack}>
              <Text style={styles.loremIpsum2}></Text>
              <FeatherIcon
                name="dollar-sign"
                style={styles.icon3}
              ></FeatherIcon>
            </View>
            <View style={styles.loremIpsum3Stack}>
              <Text style={styles.loremIpsum3}></Text>
              <Text style={styles.loremIpsum5}>9400</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.zemoStackRow}>
        <View style={styles.zemoStack}>
          <Zemo style={styles.zemo}></Zemo>
          <View style={styles.rect4}>
            <FeatherIcon name="arrow-down" style={styles.icon}></FeatherIcon>
            <View style={styles.rect6}>
              <Svg viewBox="0 0 14.73 11.41" style={styles.ellipse2}>
                <Ellipse
                  stroke="rgba(230, 230, 230,1)"
                  strokeWidth={4}
                  fill="rgba(126,211,33,1)"
                  cx={7}
                  cy={6}
                  rx={5}
                  ry={4}
                ></Ellipse>
              </Svg>
            </View>
          </View>
          <Text style={styles.loremIpsum6}></Text>
          <Text style={styles.income}>Income</Text>
          <Text style={styles.loremIpsum7}></Text>
          <Text style={styles.loremIpsum8}></Text>
          <Text style={styles.loremIpsum9}>5000</Text>
          <FeatherIcon name="dollar-sign" style={styles.icon2}></FeatherIcon>
        </View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Transaction")}
          style={styles.button}
        >
          <View style={styles.rect7Row}>
            <View style={styles.rect7}>
              <FeatherIcon name="arrow-up" style={styles.icon4}></FeatherIcon>
              <View style={styles.rect8}>
                <Svg viewBox="0 0 14.73 11.41" style={styles.ellipse3}>
                  <Ellipse
                    stroke="rgba(230, 230, 230,1)"
                    strokeWidth={4}
                    fill="rgba(208,2,27,1)"
                    cx={7}
                    cy={6}
                    rx={5}
                    ry={4}
                  ></Ellipse>
                </Svg>
              </View>
            </View>
            <View style={styles.expensesColumn}>
              <Text style={styles.expenses}>Expense</Text>
              <View style={styles.icon5Row}>
                <FeatherIcon
                  name="dollar-sign"
                  style={styles.icon5}
                ></FeatherIcon>
                <Text style={styles.loremIpsum10}>12000</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.recentTransactionRow}>
        <Text style={styles.recentTransaction}>Recent Transaction</Text>
        <MaterialButtonLight
          style={styles.materialButtonLight}
        ></MaterialButtonLight>
      </View>
      <CupertinoFooter2 style={styles.cupertinoFooter2}></CupertinoFooter2>
      <View style={styles.icon6StackRow}>
        <View style={styles.icon6Stack}>
          <FontAwesomeIcon
            name="shopping-basket"
            style={styles.icon6}
          ></FontAwesomeIcon>
          <View style={styles.rect9}></View>
        </View>
        <View style={styles.shoppingColumn}>
          <Text style={styles.shopping}>Shopping</Text>
          <Text style={styles.buySomeGrocery}>Buy some grocery</Text>
        </View>
        <View style={styles.loremIpsum11Column}>
          <Text style={styles.loremIpsum11}>- $120</Text>
          <Text style={styles.buySomeGrocery2}>10:00 AM</Text>
        </View>
      </View>
      <View style={styles.rect10Row}>
        <View style={styles.rect10}>
          <MaterialCommunityIconsIcon
            name="clipboard-text"
            style={styles.icon7}
          ></MaterialCommunityIconsIcon>
        </View>
        <View style={styles.subsc2Column}>
          <Text style={styles.subsc2}>Subsc...</Text>
          <Text style={styles.disneyAnnual}>Disney + Annual...</Text>
        </View>
        <View style={styles.loremIpsum12Column}>
          <Text style={styles.loremIpsum12}>- $120</Text>
          <Text style={styles.buySomeGrocery3}>03:30 PM</Text>
        </View>
      </View>
      <View style={styles.rect11Row}>
        <View style={styles.rect11}>
          <MaterialCommunityIconsIcon
            name="silverware-fork-knife"
            style={styles.icon8}
          ></MaterialCommunityIconsIcon>
        </View>
        <View style={styles.foodColumn}>
          <Text style={styles.food}>Food</Text>
          <Text style={styles.buyARamen}>Buy a Ramen</Text>
        </View>
        <View style={styles.loremIpsum13Column}>
          <Text style={styles.loremIpsum13}>- $32</Text>
          <Text style={styles.buySomeGrocery4}>07:30 PM</Text>
        </View>
      </View>
      <MaterialDisabledTextbox
        style={styles.materialDisabledTextbox}
      ></MaterialDisabledTextbox>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000000"
  },
  rect: {
    width: 100,
    height: 100,
    backgroundColor: "#E6E6E6"
  },
  cupertinoHeaderWithSubTitle: {
    marginTop:5,
    height: 44,
    width: 398
  },
  accountBalance: {
    fontFamily: "georgia-regular",
    color: "rgba(155,155,155,1)",
    marginTop: 9,
    marginLeft: 136
  },
  loremIpsum4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginLeft: 133
  },
  loremIpsum2: {
    top: 8,
    left: 9,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  icon3: {
    top: 0,
    left: 0,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 35
  },
  loremIpsum2Stack: {
    top: 6,
    left: 0,
    width: 35,
    height: 35,
    position: "absolute"
  },
  loremIpsum3: {
    top: 20,
    left: 27,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  loremIpsum5: {
    top: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 40,
    left: 0
  },
  loremIpsum3Stack: {
    top: 0,
    left: 30,
    width: 92,
    height: 47,
    position: "absolute"
  },
  loremIpsum2StackStack: {
    width: 122,
    height: 47,
    marginTop: 8,
    marginLeft: 111
  },
  cupertinoHeaderWithSubTitleColumn: {
    width: 375,
    marginLeft: 333
  },
  rectRow: {
    height: 124,
    flexDirection: "row",
    marginTop: 36,
    marginLeft: -441,
    marginRight: -7
  },
  zemo: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 76,
    width: 157
  },
  rect4: {
    top: 11,
    left: 15,
    width: 46,
    height: 54,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderWidth: 1,
    borderColor: "rgba(126,211,33,1)",
    borderRadius: 12
  },
  icon: {
    color: "rgba(126,211,33,1)",
    fontSize: 14,
    height: 14,
    width: 14,
    marginTop: 13,
    marginLeft: 15
  },
  rect6: {
    width: 26,
    height: 19,
    backgroundColor: "rgba(126,211,33,1)",
    borderWidth: 1,
    borderColor: "rgba(126,211,33,1)",
    borderRadius: 6,
    marginLeft: 10
  },
  ellipse2: {
    width: 15,
    height: 11,
    marginTop: 4,
    marginLeft: 5
  },
  loremIpsum6: {
    top: 21,
    left: 77,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  income: {
    top: 23,
    left: 69,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    opacity: 0.76
  },
  loremIpsum7: {
    top: 49,
    left: 69,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)"
  },
  loremIpsum8: {
    top: 57,
    left: 69,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  loremIpsum9: {
    top: 40,
    left: 82,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    opacity: 0.9
  },
  icon2: {
    top: 42,
    left: 69,
    position: "absolute",
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    opacity: 0.9
  },
  zemoStack: {
    width: 157,
    height: 76,
    marginTop: 2
  },
  button: {
    width: 157,
    height: 76,
    backgroundColor: "rgba(208,2,27,1)",
    borderRadius: 24,
    marginLeft: 16
  },
  rect7: {
    width: 46,
    height: 54,
    backgroundColor: "#E6E6E6",
    borderRadius: 12
  },
  icon4: {
    color: "rgba(208,2,27,1)",
    fontSize: 14,
    height: 14,
    width: 14,
    marginTop: 13,
    marginLeft: 16
  },
  rect8: {
    width: 26,
    height: 19,
    backgroundColor: "rgba(208,2,27,1)",
    borderRadius: 6,
    marginLeft: 10
  },
  ellipse3: {
    width: 15,
    height: 11,
    marginTop: 3,
    marginLeft: 6
  },
  expenses: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    opacity: 0.76,
    marginLeft: 1
  },
  icon5: {
    color: "rgba(255,255,255,1)",
    fontSize: 14,
    opacity: 0.9,
    height: 14,
    width: 14,
    marginTop: -1
  },
  loremIpsum10: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    opacity: 0.9,
    marginTop: -1
  },
  icon5Row: {
    height: 17,
    flexDirection: "row",
    marginTop: 3,
    marginRight: 7
  },
  expensesColumn: {
    width: 61,
    marginLeft: 5,
    marginTop: 11,
    marginBottom: 6
  },
  rect7Row: {
    height: 54,
    flexDirection: "row",
    marginTop: 9,
    marginLeft: 12,
    marginRight: 33
  },
  zemoStackRow: {
    height: 78,
    flexDirection: "row",
    marginTop: 28,
    marginLeft: 16,
    marginRight: 14
  },
  recentTransaction: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 18,
    marginTop: 8
  },
  materialButtonLight: {
    height: 29,
    width: 89,
    borderRadius: 19,
    backgroundColor: "rgba(144,19,254,1)",
    opacity: 0.48,
    marginLeft: 71
  },
  recentTransactionRow: {
    height: 29,
    flexDirection: "row",
    marginTop: 39,
    marginLeft: 20,
    marginRight: 24,
  

  },
  cupertinoFooter2: {
    height: 49,
    width: 375,
    marginTop: 400,
    marginLeft: -8
  },
  icon6: {
    top: 11,
    left: 0,
    position: "absolute",
    color: "rgba(248,231,28,1)",
    fontSize: 40
  },
  rect9: {
    top: 0,
    left: 0,
    width: 47,
    height: 60,
    position: "absolute",
    backgroundColor: "rgba(248,231,28,1)",
    opacity: 0.19,
    borderRadius: 15
  },
  icon6Stack: {
    width: 47,
    height: 60
  },
  shopping: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  buySomeGrocery: {
    fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    fontSize: 8,
    marginTop: 9,
    marginLeft: 3
  },
  shoppingColumn: {
    width: 67,
    marginLeft: 8,
    marginTop: 10,
    marginBottom: 13
  },
  loremIpsum11: {
    fontFamily: "roboto-regular",
    color: "rgba(208,2,27,1)"
  },
  buySomeGrocery2: {
    fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    fontSize: 8,
    marginTop: 9,
    marginLeft: 8
  },
  loremIpsum11Column: {
    width: 42,
    marginLeft: 114,
    marginTop: 11,
    marginBottom: 13
  },
  icon6StackRow: {
    height: 60,
    flexDirection: "row",
    marginTop: -291,
    marginLeft: 30,
    marginRight: 52
  },
  rect10: {
    width: 47,
    height: 60,
    backgroundColor: "rgba(144,19,254,0.19)",
    borderRadius: 15
  },
  icon7: {
    color: "rgba(144,19,254,1)",
    fontSize: 40,
    opacity: 0.7,
    height: 44,
    width: 40,
    marginTop: 8,
    marginLeft: 3
  },
  subsc2: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  disneyAnnual: {
    fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    fontSize: 8,
    marginTop: 10
  },
  subsc2Column: {
    width: 63,
    marginLeft: 10,
    marginTop: 8,
    marginBottom: 15
  },
  loremIpsum12: {
    fontFamily: "roboto-regular",
    color: "rgba(208,2,27,1)"
  },
  buySomeGrocery3: {
    fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    fontSize: 8,
    marginTop: 10,
    marginLeft: 3
  },
  loremIpsum12Column: {
    width: 39,
    marginLeft: 115,
    marginTop: 3,
    marginBottom: 20
  },
  rect10Row: {
    height: 60,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 31,
    marginRight: 55
  },
  rect11: {
    width: 47,
    height: 60,
    backgroundColor: "rgba(208,2,27,0.19)",
    borderRadius: 15,
    marginTop: 4
  },
  icon8: {
    color: "rgba(208,2,27,1)",
    fontSize: 40,
    opacity: 0.56,
    height: 44,
    width: 40,
    marginTop: 13
  },
  food: {
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  buyARamen: {
    fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    fontSize: 8,
    marginTop: 17,
    marginLeft: 4
  },
  foodColumn: {
    width: 51,
    marginLeft: 11,
    marginTop: 9,
    marginBottom: 11
  },
  loremIpsum13: {
    fontFamily: "roboto-regular",
    color: "rgba(208,2,27,1)",
    marginLeft: 7
  },
  buySomeGrocery4: {
    fontFamily: "roboto-regular",
    color: "rgba(155,155,155,1)",
    fontSize: 8,
    marginTop: 21
  },
  loremIpsum13Column: {
    width: 38,
    marginLeft: 126,
    marginBottom: 16
  },
  rect11Row: {
    height: 64,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 34,
    marginRight: 53
  },
  materialDisabledTextbox: {
    height: 34,
    width: 261,
    marginTop: -302,
    marginLeft: 479
  }
});

export default Home;
