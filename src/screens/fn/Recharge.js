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

import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import Icon3 from "react-native-vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";

import logo from "../../../assets/images/logo.png";
import what from "../../../assets/images/what.png";

const Recharge = () => {
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
            <Icon2 style={styles.iconItem} name="dots-horizontal" size={30} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <View style={styles.body}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={logo} />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputText}
              placeholder={"أدخل رقم البطاقة"}
              placeholderTextColor={"gray"}
              underlineColorAndroid="transparent"
            />
          </View>

          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.buttonStyle2}>
              <Text style={styles.testStyles}>شحن</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.payStyle}>أرغب بالدفع كاش</Text>

          <View style={styles.creditsViewStyle}>
            <Text style={styles.creditStyle1}>ريال</Text>
            <Text style={styles.creditStyle2}>1700</Text>

            <Text style={styles.creditStyle1}>الرصيد الحالي</Text>
          </View>

          <Text style={styles.creditStyle3}>لطلب البطاقة رجاء الاتصال على</Text>

          <View style={styles.whatsAppStyle}>
            <Image style={styles.whatsAppImageStyle} source={what} />
            <Text style={styles.creditStyle4}>0551420068</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Recharge;

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

  inputContainer: {
    borderColor: "red",
    borderWidth: 1,
    width: wp(75),

    marginTop: 10,
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
    fontSize: responsiveFontSize(2.2),
    color: "black",
    alignSelf: "center",
    fontFamily: "Cairo-Regular",
    marginTop: 30,
    textDecorationLine: "underline",
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
    marginTop: 20,
  },
  buttonView: {
    marginTop: 15,
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
});
