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

import Icon from "react-native-vector-icons/SimpleLineIcons";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";

import logo from "../../../assets/images/logo.png";

const Login = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.navbar}>
        <TouchableOpacity>
          <Icon style={styles.iconItem} name="menu" size={24} />
        </TouchableOpacity>

        <View style={styles.middleNav}>
          <Icon2 style={styles.iconItem} name="login" size={30} />
          <Text style={styles.loginTextStyle}>دخول</Text>
        </View>
        <View style={styles.rightNav}></View>
      </View>

      <ScrollView>
        <View style={styles.body}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={logo} />
          </View>

          <Text style={styles.payStyle}>اكتب رمز التفعيل</Text>

          <View style={styles.inputContainer}>
            <View style={styles.inputRect}>
              <TextInput
                style={styles.inputText}
                placeholderTextColor={"gray"}
                underlineColorAndroid="transparent"
              />
            </View>
            <View style={styles.inputRect}>
              <TextInput
                style={styles.inputText}
                placeholderTextColor={"gray"}
                underlineColorAndroid="transparent"
              />
            </View>
            <View style={styles.inputRect}>
              <TextInput
                style={styles.inputText}
                placeholderTextColor={"gray"}
                underlineColorAndroid="transparent"
              />
            </View>
            <View style={styles.inputRect}>
              <TextInput
                style={styles.inputText}
                placeholderTextColor={"gray"}
                underlineColorAndroid="transparent"
              />
            </View>
          </View>

          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.buttonStyle2}>
              <Text style={styles.testStyles}>تفعيل</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;

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
    width: wp(35),
    height: wp(35),
    resizeMode: "contain",
  },

  inputContainer: {
    flexDirection: "row",
    width: wp(80),
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
  },
  inputRect: {
    borderColor: "red",
    borderWidth: 1,
    width: wp(17),
  },

  inputText: {
    fontSize: responsiveFontSize(2.2),
    alignSelf: "center",
    fontFamily: "Cairo-Regular",
  },
  testStyles: {
    fontSize: responsiveFontSize(2.2),
    color: "white",
    alignSelf: "center",
    fontFamily: "Cairo-Regular",
  },
  payStyle: {
    fontSize: responsiveFontSize(2.6),
    color: "#a3a3a3",
    alignSelf: "center",
    fontFamily: "Cairo-Regular",
    marginTop: 20,
  },
  creditStyle1: {
    fontSize: responsiveFontSize(2.7),
    color: "black",
    alignSelf: "center",
    fontFamily: "Cairo-Regular",
  },
  creditStyle2: {
    fontSize: responsiveFontSize(4),
    color: "black",
    alignSelf: "center",
    fontFamily: "Cairo-Black",
  },

  creditStyle3: {
    fontSize: responsiveFontSize(1.9),
    color: "black",
    alignSelf: "center",
    fontFamily: "Cairo-Regular",
    marginTop: 40,
  },
  creditStyle4: {
    fontSize: responsiveFontSize(1.9),
    color: "black",
    alignSelf: "center",
    fontFamily: "Cairo-Regular",
    marginLeft: 10,
  },
  buttonStyle2: {
    alignSelf: "stretch",

    width: wp(60),
    height: 50,
    backgroundColor: "#be2227",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#be2227",
    marginLeft: 5,
    marginRight: 5,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 70,
  },
  buttonView: {
    marginTop: 15,
    alignItems: "center",
  },
  creditsViewStyle: {
    width: wp(60),
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  whatsAppStyle: {
    width: wp(40),
    flexDirection: "row",
    justifyContent: "center",
  },
  whatsAppImageStyle: {
    width: wp(10),
    height: wp(10),
    resizeMode: "contain",
  },
  loginTextStyle: {
    fontSize: responsiveFontSize(3.5),
    color: "white",

    fontFamily: "Cairo-Regular",
    marginLeft: 5,
  },
});
