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
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import avatar from "../../../assets/images/not_comp_avatar.png";

const SideMenu = () => {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.imageContainer}>
            <Image style={styles.avatar} source={avatar} />

            <Text style={styles.avatarText1}>Jhon Snow</Text>
          </View>

          <View style={styles.menuItem}>
            <View style={styles.separator}></View>

            <TouchableOpacity
              style={styles.sideButton}
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Text style={styles.carButtonsText}> الرئيسية</Text>
              <Ionicons style={styles.carButtonIcon} name={"home"} size={24} />
            </TouchableOpacity>
          </View>

          <View style={styles.menuItem}>
            <View style={styles.separator}></View>

            <TouchableOpacity
              style={styles.sideButton}
              onPress={() => this.props.navigation.navigate("UserDetails")}
            >
              <Text style={styles.carButtonsText}> الشخصية</Text>
              <AntDesign style={styles.carButtonIcon} name={"user"} size={24} />
            </TouchableOpacity>
          </View>

          <View style={styles.menuItem}>
            <View style={styles.separator}></View>

            <TouchableOpacity
              style={styles.sideButton}
              onPress={() => this.props.navigation.navigate("MyOrders")}
            >
              <Text style={styles.carButtonsText}> طلباتي</Text>
              <MaterialCommunityIcons
                style={styles.carButtonIcon}
                name={"food-fork-drink"}
                size={24}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.menuItem}>
            <View style={styles.separator}></View>

            <TouchableOpacity
              style={styles.sideButton}
              onPress={() => this.props.navigation.navigate("Chat")}
            >
              <Text style={styles.carButtonsText}> المحادثة الفورية</Text>
              <AntDesign
                style={styles.carButtonIcon}
                name={"wechat"}
                size={24}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.menuItem}>
            <View style={styles.separator}></View>

            <TouchableOpacity
              style={styles.sideButton}
              onPress={() => this.props.navigation.navigate("MyCalories")}
            >
              <Text style={styles.carButtonsText}>السعرات اليومية</Text>
              <MaterialIcons
                style={styles.carButtonIcon}
                name={"restaurant"}
                size={24}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.menuItem}>
            <View style={styles.separator}></View>

            <TouchableOpacity
              style={styles.sideButton}
              onPress={() => this.props.navigation.navigate("HomeW")}
            >
              <Text style={styles.carButtonsText}> استهلاك الماء</Text>
              <MaterialCommunityIcons
                style={styles.carButtonIcon}
                name={"cup-water"}
                size={24}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.menuItem}>
            <View style={styles.separator}></View>

            <TouchableOpacity
              style={styles.sideButton}
              onPress={() => this.props.navigation.navigate("HomeS")}
            >
              <Text style={styles.carButtonsText}> التمارين الرياضية</Text>
              <MaterialCommunityIcons
                style={styles.carButtonIcon}
                name={"dumbbell"}
                size={24}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.menuItem}>
            <View style={styles.separator}></View>

            <TouchableOpacity
              style={styles.sideButton}
              onPress={() => this.props.navigation.navigate("Conditions")}
            >
              <Text style={styles.carButtonsText}> الشروط والأحكام</Text>
              <AntDesign name="file1" size={24} style={styles.carButtonIcon} />
            </TouchableOpacity>
          </View>

          <View style={styles.menuItem}>
            <View style={styles.separator}></View>

            <TouchableOpacity
              style={styles.sideButton}
              onPress={() => this.props.navigation.navigate("Contact")}
            >
              <Text style={styles.carButtonsText}> اتصل بنا</Text>
              <Feather style={styles.carButtonIcon} name={"users"} size={24} />
            </TouchableOpacity>
          </View>

          <View style={styles.menuItem}>
            <View style={styles.separator}></View>

            <TouchableOpacity style={styles.sideButton}>
              <Text style={styles.carButtonsText}> خروج</Text>
              <Ionicons
                style={styles.carButtonIcon}
                name={"ios-log-out"}
                size={30}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SideMenu;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",

    flex: 1,
    backgroundColor: "#1d7728",
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },

  body: {
    flex: 1,

    flexDirection: "column",
    alignItems: "flex-end",
  },

  imageContainer: {
    height: hp(16),
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    alignSelf: "flex-start",

    paddingLeft: 10,
  },

  avatar: {
    width: wp(18),
    height: wp(18),
    borderColor: "white",
    borderWidth: 1,
    borderRadius: wp(9),
    marginRight: 10,
    marginLeft: 10,
  },
  avatarText1: {
    fontSize: responsiveFontSize(2.5),

    color: "white",
    fontFamily: "Cairo-Regular",
    paddingLeft: 10,
  },

  separator: {
    marginTop: 5,
    marginBottom: 5,
    width: "100%",
    height: 1,
    backgroundColor: "#2d8937",
  },

  menuItem: {
    width: wp(100),

    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "space-around",
  },

  sideButton: {
    width: wp(100),
    height: hp(5),
    flexDirection: "row",

    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 15,
  },

  carButtonsText: {
    fontSize: responsiveFontSize(2.2),
    alignSelf: "center",
    color: "white",
    fontFamily: "Cairo-Regular",
  },
  carButtonIcon: {
    padding: 10,
    color: "white",
  },
});
