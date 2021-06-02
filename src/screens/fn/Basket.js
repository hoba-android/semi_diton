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
  SafeAreaView,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol,
} from "react-native-responsive-screen";

import { responsiveFontSize } from "react-native-responsive-dimensions";

import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import logo from "../../../assets/images/logo.png";
import tick from "../../../assets/images/cart.png";

const Basket = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.navbar}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Home")}
        >
          <AntDesign name="arrowleft" size={30} style={styles.iconItem} />
        </TouchableOpacity>

        <View style={styles.middleNav}>
          <Text style={styles.loginTextStyle}>السلة</Text>
        </View>

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
            <Text style={styles.tickText}>لا يوجد طلبات لعرضها</Text>
          </View>

          <View style={styles.PackView}>
            <Text style={styles.PackTextStyles}>ر س</Text>
            <Text style={styles.PackTextStyles}>12</Text>

            <Text style={styles.PackTextStyles}>إجمالي المبلغ :</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Basket;

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
    marginLeft: 5,
  },
  body: {
    flex: 1,
    height: hp(100),
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  logoContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
  logo: {
    width: wp(20),
    height: wp(20),

    resizeMode: "contain",
  },

  tickContianer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 30,
  },
  tick: {
    width: wp(40),
    height: wp(40),

    resizeMode: "contain",
  },

  tickText: {
    fontSize: responsiveFontSize(3),
    color: "grey",
    fontFamily: "Cairo-Regular",
    marginTop: 70,
  },
  loginTextStyle: {
    fontSize: responsiveFontSize(2.9),
    color: "white",
    fontFamily: "Cairo-Regular",
  },

  PackView: {
    flexDirection: "row",

    alignItems: "flex-end",
    alignSelf: "stretch",
    width: wp(60),
    height: 50,
    backgroundColor: "#BE2227",
    borderRadius: 30,

    justifyContent: "center",
    alignSelf: "center",
    marginTop: 50,
  },

  PackTextStyles: {
    fontSize: responsiveFontSize(2.5),
    color: "white",
    alignSelf: "center",
    fontFamily: "Cairo-Regular",
    marginLeft: 5,
  },
});
