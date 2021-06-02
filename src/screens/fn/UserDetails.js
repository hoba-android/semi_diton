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
import { AntDesign } from "@expo/vector-icons";

import logo from "../../../assets/images/shpaes.png";
import mes1 from "../../../assets/images/measure1.jpg";
import mes2 from "../../../assets/images/measure2.jpg";
import mes3 from "../../../assets/images/measure3.jpg";

const UserDetails = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.navbar}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Home")}
        >
          <AntDesign name="arrowleft" size={30} style={styles.iconItem} />
        </TouchableOpacity>

        <View style={styles.middleNav}>
          <Text style={styles.loginTextStyle}>مواصفات</Text>
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

          <View style={styles.measureSection}>
            <Text style={styles.mesText}>الطول</Text>
            <View style={styles.underLine} />
            <Image style={styles.mesImage} source={mes1} />
          </View>

          <View style={styles.measureSection}>
            <Text style={styles.mesText}>الوزن</Text>
            <View style={styles.underLine} />
            <Image style={styles.mesImage} source={mes2} />
          </View>

          <View style={styles.measureSection}>
            <Text style={styles.mesText}>العمر</Text>
            <View style={styles.underLine} />
            <Image style={styles.mesImage} source={mes3} />
          </View>

          <TouchableOpacity style={styles.circle}>
            <AntDesign style={{ color: "black" }} name="arrowleft" size={40} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default UserDetails;

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

  logoContainer: {
    marginBottom: 10,
    marginTop: 10,
    alignItems: "center",
  },
  logo: {
    width: wp(18),
    height: wp(18),
    resizeMode: "contain",
    marginBottom: 5,
  },
  measureSection: {
    width: wp(95),
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 5,
  },

  mesText: {
    fontSize: responsiveFontSize(2.4),
    color: "#ff6b43",

    textAlign: "center",
  },
  underLine: {
    width: 50,
    height: 2,
    backgroundColor: "#dfdfdf",
    alignSelf: "center",
  },
  mesImage: {
    width: wp(95),
    height: hp(16),
    resizeMode: "contain",
  },

  circle: {
    width: 50,
    height: 50,

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 25,
    padding: 5,
    marginTop: 5,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    alignSelf: "center",
  },
});
