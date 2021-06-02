import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
  StyleSheet,
  Platform,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol,
} from "react-native-responsive-screen";

import { responsiveFontSize } from "react-native-responsive-dimensions";

import logo from "../../../assets/images/pack_logo.png";

const Pack1 = () => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={logo} />
          </View>

          <View style={styles.PackView}>
            <Text style={styles.PackTextStyles}>الباقة الأولى</Text>
          </View>

          <View style={styles.creditsViewStyle}>
            <Text style={styles.creditStyle1}>ريال</Text>
            <Text style={styles.creditStyle2}>900</Text>
          </View>

          <View style={styles.textBackground}>
            <Text style={styles.packTextStyle1}>لمدة 15 يوما</Text>
            <Text style={styles.packTextStyle2}>
              وجبة غداء على مدار 15 يوماً
            </Text>
            <Text style={styles.packTextStyle2}>
              الاتصال بمشرف او اخصائي التغذية
            </Text>
            <Text style={styles.packTextStyle2}>على مدار الساعة</Text>
            <Text style={styles.packTextStyle2}>تقارير أسبوعية عن السعرات</Text>
            <Text style={styles.packTextStyle2}>
              الحرارية المكتسبة والمفقودة
            </Text>
          </View>

          <View style={styles.buttonView}>
            <TouchableOpacity style={styles.buttonStyle2}>
              <Text style={styles.testStyles}>اشترك الآن</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Pack1;

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: wp(100),
    backgroundColor: "#8FC747",
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },

  body: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },

  logoContainer: {
    marginBottom: 5,
  },
  logo: {
    width: wp(35),
    height: wp(35),
    resizeMode: "contain",
    alignSelf: "flex-start",
  },

  PackStyle2: {},
  PackView: {
    alignItems: "center",
    alignSelf: "stretch",
    width: wp(60),
    height: 50,
    backgroundColor: "#F7941D",
    borderRadius: 30,
    borderColor: "#F7941D",
    justifyContent: "center",
    alignSelf: "center",
  },

  PackTextStyles: {
    fontSize: responsiveFontSize(3),
    color: "white",
    alignSelf: "center",
    fontFamily: "Cairo-Regular",
  },

  testStyles: {
    fontSize: responsiveFontSize(3),
    color: "white",
    alignSelf: "center",
    fontFamily: "Cairo-Regular",
  },
  buttonStyle2: {
    alignSelf: "stretch",

    width: wp(60),
    height: 50,
    backgroundColor: "#be2227",
    borderRadius: 50,
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonView: {
    marginTop: 15,
    alignItems: "center",
  },
  textBackground: {
    alignSelf: "stretch",

    width: wp(80),
    height: 250,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    alignSelf: "center",
  },

  creditStyle1: {
    fontSize: responsiveFontSize(4),
    color: "white",
    alignSelf: "center",
    fontFamily: "Cairo-Regular",
    marginRight: 10,
  },
  creditStyle2: {
    fontSize: responsiveFontSize(7),
    color: "white",
    alignSelf: "center",
    fontFamily: "Cairo-Black",
    textShadowOffset: { width: 3, height: 2 },
    textShadowRadius: 3,
    textShadowColor: "grey",
  },
  creditsViewStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  packTextStyle1: {
    fontSize: responsiveFontSize(2.5),
    color: "black",
    alignSelf: "center",
    fontFamily: "Cairo-Regular",
  },

  packTextStyle2: {
    fontSize: responsiveFontSize(2.5),
    color: "#474747",
    alignSelf: "center",
    fontFamily: "Cairo-Regular",
  },
});
