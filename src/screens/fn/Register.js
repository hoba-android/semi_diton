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
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import logo from "../../../assets/images/logo.png";

const Register = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.navbar}>
        <TouchableOpacity>
          <AntDesign name="arrowleft" size={30} style={styles.iconItem} />
        </TouchableOpacity>

        <View style={styles.middleNav}>
          <MaterialCommunityIcons
            style={styles.iconItem}
            name="login"
            size={30}
          />
          <Text style={styles.loginTextStyle}>Register</Text>
        </View>
        <View style={styles.rightNav}></View>
      </View>

      <ScrollView>
        <View style={styles.body}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={logo} />
          </View>

          <View style={styles.inputContainer}>
            <View style={styles.inputRect}>
              <FontAwesome5
                style={{ color: "grey", paddingRight: 15 }}
                name="mobile-alt"
                size={35}
              />

              <View style={styles.inputContainer2}>
                <Text style={styles.captionText}>Mobile Number</Text>

                <TextInput
                  style={styles.input}
                  placeholder={"012456789"}
                  placeholderTextColor={"gray"}
                  underlineColorAndroid={"black"}
                />
              </View>
            </View>

            <View style={styles.inputRect}>
              <SimpleLineIcons
                style={{ color: "grey", paddingRight: 15 }}
                name="lock"
                size={30}
              />

              <View style={styles.inputContainer2}>
                <Text style={styles.captionText}>Password</Text>

                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  placeholderTextColor={"gray"}
                  underlineColorAndroid={"black"}
                />
              </View>
            </View>

            <View style={styles.inputRect}>
              <SimpleLineIcons
                style={{ color: "grey", paddingRight: 15 }}
                name="lock"
                size={30}
              />

              <View style={styles.inputContainer2}>
                <Text style={styles.captionText}>Confirm Password</Text>

                <TextInput
                  style={styles.input}
                  secureTextEntry={true}
                  placeholderTextColor={"gray"}
                  underlineColorAndroid={"black"}
                />
              </View>
            </View>
          </View>

          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.buttonStyle2}>
              <Text style={styles.testStyles}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;

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
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: wp(90),
  },
  inputContainer2: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },

  inputRect: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 15,
  },

  input: {
    fontSize: responsiveFontSize(1.5),
    alignSelf: "center",
    fontFamily: "Cairo-Regular",
    width: wp(80),
  },
  testStyles: {
    fontSize: responsiveFontSize(3),
    color: "white",
    alignSelf: "center",
    fontFamily: "Cairo-Regular",
  },

  inputText: {
    fontSize: responsiveFontSize(1.9),
    color: "black",
    alignSelf: "center",
    fontFamily: "Cairo-Regular",
    marginLeft: 10,
  },
  loginTextStyle: {
    fontSize: responsiveFontSize(3),
    color: "white",
    alignSelf: "center",
    fontFamily: "Cairo-Regular",
    marginLeft: 5,
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
    marginTop: 50,
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

  captionText: {
    fontSize: responsiveFontSize(2),
    color: "#c5c5c5",

    fontFamily: "Cairo-Regular",
  },
});
