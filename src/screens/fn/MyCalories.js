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
import { AntDesign } from "@expo/vector-icons";

import logo from "../../../assets/images/logo.png";
import calCircle from "../../../assets/images/calCircle.png";
import pause from "../../../assets/images/pause.png";

const MyCalories = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.navbar}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Home")}
        >
          <AntDesign name="arrowleft" size={30} style={styles.iconItem} />
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
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={logo} />
          </View>
          <View style={styles.calSection}>
            <View style={styles.calCounter}>
              <Image style={styles.calCircleImage} source={calCircle} />
            </View>
            <View style={styles.calBorder}></View>

            <View style={styles.calTimer}>
              <Text style={styles.calText}>00:03</Text>
            </View>

            <TouchableOpacity>
              <View style={styles.palyButtonView}>
                <Image style={styles.playButtonImage} source={pause} />
              </View>
            </TouchableOpacity>

            <View style={styles.bottomRow}>
              <View style={styles.calColumn}>
                <Text style={styles.counterTextStyle2}>Calories</Text>
                <Text style={styles.counterTextStyle1}>00:57</Text>
              </View>

              <View style={styles.calColumn}>
                <Text style={styles.counterTextStyle2}>Time</Text>
                <Text style={styles.counterTextStyle1}>0:03</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MyCalories;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    height: "100%",
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
    fontSize: responsiveFontSize(2.9),
    color: "white",
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
    height: hp(100),
  },
  calCounter: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  calCircleImage: {
    width: wp(70),
    height: wp(70),
    resizeMode: "contain",
    marginTop: 10,
  },
  calBorder: {
    position: "absolute",
    top: 10,
    right: wp(15),
    width: wp(70),
    height: wp(70),

    borderRadius: wp(70) / 2,
    borderWidth: 4,
    borderColor: "red",
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
  playButtonImage: {
    width: wp(15),
    height: wp(15),
    resizeMode: "contain",
    marginTop: 50,
  },

  bottomRow: {
    width: wp(90),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    marginTop: 10,
  },
  calColumn: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
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
