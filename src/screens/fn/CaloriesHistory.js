import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
  Platform,
  StyleSheet,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol,
} from "react-native-responsive-screen";

import { responsiveFontSize } from "react-native-responsive-dimensions";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import logo from "../../../assets/images/logo.png";
import calCircle from "../../../assets/images/calCounter.png";

const CaloriesHistory = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.navbar}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Home")}
        >
          <AntDesign style={styles.iconItem} name="arrowleft" size={30} />
        </TouchableOpacity>

        <View style={styles.middleNav}>
          <Text style={styles.loginTextStyle}>السعرات الحرارية</Text>
        </View>
        <View style={styles.rightNav}>
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
            <MaterialCommunityIcons
              style={styles.iconItem}
              name="dots-horizontal"
              size={30}
            />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <View style={styles.body}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={logo} />
          </View>

          <ScrollView horizontal={true}>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>25 - 10 - 2019</Text>
            </View>

            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>25 - 10 - 2019</Text>
            </View>

            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>25 - 10 - 2019</Text>
            </View>

            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>25 - 10 - 2019</Text>
            </View>
          </ScrollView>

          <View style={styles.calSection}>
            <View style={styles.calCounter}>
              <View style={styles.percentCont}>
                <Image style={styles.calCircleImage} source={calCircle} />
              </View>

              <View style={styles.calsCont}>
                <View style={styles.verticalSep} />

                <View style={styles.calColumns}>
                  <Text style={styles.calText2}>2000</Text>
                  <Text style={styles.calText3}>سعر حراري</Text>
                </View>
              </View>
            </View>

            <View style={styles.calColumn}>
              <View style={styles.detailsRow}>
                <View style={styles.detailsRow1}>
                  <Text style={styles.foddCal1}>500</Text>
                  <Text style={styles.foddCal2}>></Text>
                </View>

                <View style={styles.detailsRow1}>
                  <Text style={styles.food}>الطعام</Text>
                  <MaterialCommunityIcons name={"food-fork-drink"} size={30} />
                </View>
              </View>

              <View style={styles.detailsRow}>
                <View style={styles.detailsRow1}>
                  <Text style={styles.sportCal1}>200</Text>
                  <Text style={styles.foddCal2}>></Text>
                </View>

                <View style={styles.detailsRow1}>
                  <Text style={styles.sport}>الرياضة</Text>
                  <FontAwesome5 name={"running"} size={40} />
                </View>
              </View>

              <View style={styles.detailsRow}>
                <View style={styles.detailsRow1}>
                  <Text style={styles.waterCal1}>15</Text>
                  <Text style={styles.foddCal2}>></Text>
                </View>

                <View style={styles.detailsRow1}>
                  <Text style={styles.water}>المياه</Text>
                  <Ionicons name={"ios-water"} size={40} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CaloriesHistory;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    height: hp(100),
    width: wp(100),
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },

  navbar: {
    width: wp(100),
    height: 55,
    backgroundColor: "#be2227",
    elevation: 3,
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  imageNav: {
    paddingLeft: 5,
    width: 32,
    height: 28,
  },
  rightNav: {
    flexDirection: "row",
  },

  middleNav: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  iconItem: {
    color: "white",
  },

  loginTextStyle: {
    fontSize: responsiveFontSize(3),
    color: "white",
    fontFamily: "Cairo-Light",
  },

  horizontal: {
    height: 100,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  body: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  logoContainer: {
    marginBottom: 10,
    marginTop: 10,
    height: wp(18),
  },
  logo: {
    width: wp(18),
    height: wp(18),
    resizeMode: "contain",
  },

  calSection: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    backgroundColor: "#dfe0e0",
  },
  calCounter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  calCircleImage: {
    width: wp(45),
    height: wp(45),
    resizeMode: "contain",
    marginTop: 10,
  },
  percentCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
  },
  calsCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
  },

  verticalSep: {
    height: 90,
    width: 1,
    backgroundColor: "grey",
    marginRight: 7,
  },
  calColumns: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  calText2: {
    fontSize: responsiveFontSize(6),
    color: "black",
  },

  calText3: {
    fontSize: responsiveFontSize(3),
    color: "black",
    fontFamily: "Cairo-Regular",
  },

  detailsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 30,
  },
  detailsRow1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    width: "50%",
  },
  calColumn: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: wp(100),
    padding: 5,
  },

  foddCal1: {
    fontSize: responsiveFontSize(3.5),
    color: "#be2227",

    paddingRight: 7,
  },
  food: {
    fontSize: responsiveFontSize(2.5),
    color: "#be2227",
    fontFamily: "Cairo-Regular",
    paddingRight: 20,
  },

  foddCal2: {
    fontSize: responsiveFontSize(4),
    color: "#818285",
    fontFamily: "GE_SS_Two_Medium",
  },

  waterCal1: {
    fontSize: responsiveFontSize(3.5),
    color: "black",

    paddingRight: 7,
  },
  water: {
    fontSize: responsiveFontSize(2.5),
    color: "black",
    fontFamily: "Cairo-Regular",
    paddingRight: 20,
  },

  sportCal1: {
    fontSize: responsiveFontSize(3.5),
    color: "#629e15",

    paddingRight: 7,
  },
  sport: {
    fontSize: responsiveFontSize(2.5),
    color: "#629e15",
    fontFamily: "Cairo-Regular",
    paddingRight: 20,
  },

  calTimer: {
    position: "absolute",
    top: wp(30) - 10,
    right: wp(60) / 2,
  },
  calText: {
    fontSize: responsiveFontSize(8),
    color: "white",
  },

  buttonText: {
    fontSize: responsiveFontSize(2),
    color: "white",
  },

  buttonView: {
    alignItems: "center",
    justifyContent: "center",
    width: wp(30),
    height: 40,
    backgroundColor: "#1d87b2",
    marginHorizontal: 5,
    marginVertical: 10,
  },
  playButtonImage: {
    width: wp(15),
    height: wp(15),
    resizeMode: "contain",
    marginTop: 50,
  },

  counterTextStyle1: {
    fontSize: responsiveFontSize(4.5),
    color: "#595a5a",
  },
  counterTextStyle2: {
    fontSize: responsiveFontSize(2.5),
    color: "#595a5a",
  },
});
