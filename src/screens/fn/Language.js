import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  StatusBar,
  ScrollView,
  Platform,
  StyleSheet,
} from "react-native";

import {
  Container,
  Header,
  Content,
  ListItem,
  Radio,
  Right,
  Left,
} from "native-base";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol,
} from "react-native-responsive-screen";

import { responsiveFontSize } from "react-native-responsive-dimensions";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import lang from "../../../assets/images/lang.jpg";

const Language = (props) => {
  const [checked, setchecked] = useState("first");
  return (
    <ImageBackground style={styles.container} source={lang}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
          <AntDesign name="arrowleft" size={30} style={styles.iconItem} />
        </TouchableOpacity>

        <View style={styles.middleNav}>
          <Text style={styles.loginTextStyle}>اختيار اللغة</Text>
        </View>
        <View style={styles.rightNav}>
          <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
            <MaterialCommunityIcons
              style={styles.iconItem}
              name="dots-horizontal"
              size={30}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.main}>
          <Text style={styles.changeText}>تغيير الغة </Text>

          <ListItem>
            <Left>
              <Text style={styles.optionsText}>العربية </Text>
            </Left>
            <Right>
              <Radio selected={false} />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text style={styles.optionsText}>English</Text>
            </Left>
            <Right>
              <Radio selected={true} />
            </Right>
          </ListItem>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Language;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,

    width: wp(100),
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },

  body: {
    height: 200,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 100,
  },

  main: {
    alignSelf: "center",
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

  changeText: {
    fontSize: responsiveFontSize(3),
    alignSelf: "center",
    fontFamily: "Cairo-Regular",
    width: wp(80),
    color: "#c87e22",
    textAlign: "center",
  },
  optionsText: {
    fontSize: responsiveFontSize(2.5),
    alignSelf: "center",
    fontFamily: "Cairo-Regular",
    width: wp(80),
    color: "white",
    textAlign: "center",
  },

  loginTextStyle: {
    fontSize: responsiveFontSize(3),
    color: "white",
    alignSelf: "center",
    fontFamily: "Cairo-Regular",
    marginLeft: 5,
  },
});
