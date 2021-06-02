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

import Pack1 from "./Pack1";
import Pack2 from "./Pack2";
import Pack3 from "./Pack3";
import Home from "./Home";
import Swiper from "react-native-web-swiper";

const Swiper1 = (props) => {
  return (
    <View style={styles.mainContainer}>
      <Swiper>
        <View style={[styles.slideContainer, styles.slide1]}>
          <Pack1 />
        </View>
        <View style={[styles.slideContainer, styles.slide2]}>
          <Pack2 />
        </View>
        <View style={[styles.slideContainer, styles.slide3]}>
          <Pack3 />
        </View>
        <View style={[styles.slideContainer, styles.slide3]}>
          <Home navigation={props.navigation} />
        </View>
      </Swiper>
    </View>
  );
};

export default Swiper1;

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: wp(100),
    backgroundColor: "#8FC747",
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },

  slideContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  slide1: {
    backgroundColor: "rgba(20,20,200,0.3)",
  },
  slide2: {
    backgroundColor: "rgba(20,200,20,0.3)",
  },
  slide3: {
    backgroundColor: "rgba(200,20,20,0.3)",
  },
});
