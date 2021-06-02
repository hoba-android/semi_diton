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

const Contact = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.navbar}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Home")}
        >
          <AntDesign name="arrowleft" size={30} style={styles.iconItem} />
        </TouchableOpacity>

        <View style={styles.middleNav}>
          <Text style={styles.loginTextStyle}>اتصل بنا</Text>
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

          <View style={styles.inputItemsContainer}>
            <View style={styles.inputItem1}>
              <View style={styles.inputRect}>
                <TextInput
                  style={styles.inputText}
                  placeholder="الرياض"
                  placeholderTextColor={"gray"}
                  underlineColorAndroid="transparent"
                />
              </View>

              <Text style={styles.inputItemText}>المدينة</Text>
            </View>

            <View style={styles.inputItem1}>
              <View style={styles.inputRect}>
                <TextInput
                  style={styles.inputText}
                  placeholder="العليا"
                  placeholderTextColor={"gray"}
                  underlineColorAndroid="transparent"
                />
              </View>

              <Text style={styles.inputItemText}>الحي</Text>
            </View>

            <View style={styles.inputRect2}>
              <TextInput
                style={styles.inputText}
                placeholder="اكتب العنوان بشكل صحيح"
                multiline={true}
                placeholderTextColor={"gray"}
                underlineColorAndroid="transparent"
              />
            </View>

            <View style={styles.inputItem1}>
              <View style={styles.inputRect3}>
                <TextInput
                  style={styles.inputText}
                  placeholder="55655565"
                  placeholderTextColor={"gray"}
                  underlineColorAndroid="transparent"
                />
              </View>

              <Text style={styles.inputItemText}>رقم جوال للتواصل</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.buttonStyle2}>
          <Text style={styles.testStyles}>موافق</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Contact;

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
    fontSize: responsiveFontSize(2.9),
    color: "white",
  },

  body: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    marginBottom: 10,
    marginTop: 10,
  },
  logo: {
    width: wp(25),
    height: wp(25),
    resizeMode: "contain",
  },

  buttonView: {
    marginTop: 15,
    alignItems: "center",
  },
  buttonStyle2: {
    alignSelf: "stretch",
    width: wp(70),
    height: 60,
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

  testStyles: {
    fontSize: responsiveFontSize(3),
    color: "white",
    alignSelf: "center",
  },

  inputItemsContainer: {
    width: wp(90),

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  inputItem1: {
    width: "95%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },

  inputItemText: {
    fontSize: responsiveFontSize(2),
    color: "black",
    textAlign: "right",
  },

  inputRect: {
    borderColor: "#b1b1b1",
    height: 45,
    borderRadius: 7,
    borderWidth: 1,
    width: "80%",
    paddingRight: 5,
  },

  inputRect2: {
    borderColor: "#b1b1b1",
    height: 90,
    borderRadius: 7,
    borderWidth: 1,
    width: "95%",
    paddingRight: 5,
    marginTop: 15,
  },
  inputRect3: {
    borderColor: "#b1b1b1",
    height: 45,
    borderRadius: 7,
    borderWidth: 1,
    width: "60%",
    paddingRight: 5,
  },

  inputText: {
    fontSize: responsiveFontSize(2),
    textAlign: "right",
  },
});
