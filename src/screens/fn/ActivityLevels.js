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

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const ActivityLevels = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.navbar}>
        <TouchableOpacity
        // onPress={() => this.props.navigation.navigate("Home")}
        >
          <AntDesign name="arrowleft" size={30} style={styles.iconItem} />
        </TouchableOpacity>

        <View style={styles.middleNav}>
          <Text style={styles.loginTextStyle}>الإشعارات</Text>
        </View>

        <View style={styles.rightNav}>
          <TouchableOpacity
          // onPress={() => this.props.navigation.openDrawer()}
          >
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
          <View style={styles.strip}></View>

          <Text style={styles.tickText}>ما هو مستوى نشاطك ؟</Text>

          <TouchableOpacity style={styles.activityButton}>
            <Text style={styles.line1}>خمول</Text>
            <Text style={styles.line2}>تتطلب نشاطات يومية</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.activityButtonA}>
            <Text style={styles.line1}>خمول</Text>
            <Text style={styles.line2}>تتطلب نشاطات يومية</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.activityButton}>
            <Text style={styles.line1}>خمول</Text>
            <Text style={styles.line2}>تتطلب نشاطات يومية</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.activityButton}>
            <Text style={styles.line1}>خمول</Text>
            <Text style={styles.line2}>تتطلب نشاطات يومية</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.circle}>
            <AntDesign style={{ color: "black" }} name="arrowright" size={40} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ActivityLevels;
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    height: hp(100),
    width: wp(100),
    backgroundColor: "#acacac",
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

  strip: {
    width: wp(100),
    height: 12,
    backgroundColor: "white",
  },
  loginTextStyle: {
    fontSize: responsiveFontSize(2.9),
    color: "white",
    fontFamily: "Cairo-Regular",
  },
  line1: {
    fontSize: responsiveFontSize(2.5),
    color: "#252525",
    fontFamily: "Cairo-Regular",
  },
  line2: {
    fontSize: responsiveFontSize(2.5),
    color: "#424242",
    fontFamily: "Cairo-Regular",
  },
  activityButton: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    width: wp(95),
    backgroundColor: "#b7b7b7",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  activityButtonA: {
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "center",
    width: wp(95),
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  tickText: {
    fontSize: responsiveFontSize(2.5),
    color: "black",
    fontFamily: "Cairo-Black",
  },
  circle: {
    width: 60,
    height: 60,

    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 30,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
});
