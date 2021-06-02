import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
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
import tick from "../../../assets/images/tick.png";

const ThankYou = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.navbar}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Home")}
        >
          <AntDesign name="arrowleft" size={30} style={styles.iconItem} />
        </TouchableOpacity>

        <View style={styles.rightNav}>
          <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
            <MaterialCommunityIcons
              color="white"
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

          <View style={styles.tickContianer}>
            <Image style={styles.tick} source={tick} />
            <Text style={styles.tickText}>نشكرك على تسجيلك معنا</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ThankYou;

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

  iconItem: {
    color: "white",
    marginLeft: 5,
  },
  body: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  logo: {
    width: wp(24),
    height: wp(24),

    resizeMode: "contain",
  },

  tickContianer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  tick: {
    width: wp(40),
    height: wp(40),
    marginBottom: 30,
    marginTop: 50,
    resizeMode: "contain",
  },

  tickText: {
    fontSize: responsiveFontSize(2.7),
    color: "black",
    fontFamily: "Cairo-Black",
  },
});
