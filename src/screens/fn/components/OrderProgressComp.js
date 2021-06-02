import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol,
} from "react-native-responsive-screen";

import orderImage from "../../../../assets/images/order_img.png";
import money from "../../../../assets/images/money_sack.png";
import done from "../../../../assets/images/done.png";

import { responsiveFontSize } from "react-native-responsive-dimensions";

const OrderProgressComp = () => {
  return (
    <View style={styles.compContainer}>
      <View style={styles.OrderBlock}>
        <View style={styles.col1}>
          <View style={styles.row2}>
            <Text style={styles.orderNumStyle}>Date </Text>
            <Text style={styles.orderNumStyle2}>25 Aug 2019 </Text>
          </View>

          <View style={styles.row2}>
            <Text style={styles.orderNumStyle}>Number of order </Text>
            <Text style={styles.orderNumStyle2}>#123456 </Text>
          </View>

          <View style={styles.row2}>
            <Text style={styles.orderNumStyle}>Name of meal </Text>
            <View style={styles.col3}>
              <Text style={styles.rest1}>Salad with chicken </Text>
              <Text style={styles.rest2}>Delevaga Restaurant </Text>
            </View>
          </View>

          <View style={styles.row2}>
            <Text style={styles.orderNumStyle}>Price </Text>
            <View style={styles.row4}>
              <Image style={styles.moneyImage} source={money} />
              <Text style={styles.numbre1}>90 </Text>
              <Text style={styles.numbre1}>S R </Text>
            </View>
          </View>

          <View style={styles.row2}>
            <Text style={styles.orderNumStyle}>Total </Text>
            <View style={styles.row4}>
              <Image style={styles.moneyImage} source={money} />
              <Text style={styles.numbre2}>60 </Text>
              <Text style={styles.numbre2}>S R </Text>
            </View>
          </View>
        </View>

        <View style={styles.col2}>
          <Image style={styles.orderImage} source={orderImage} />
        </View>
      </View>

      <View style={styles.progressBlock}>
        <View style={styles.progressLine} />

        <View style={styles.progressRow}>
          <View style={styles.circleStage}>
            <View style={styles.circleBg}>
              <Text style={styles.circleT}>4</Text>
            </View>
            <Text style={styles.circleT2}>تم التوصيل</Text>
          </View>

          <View style={styles.circleStage}>
            <View style={styles.circleBg}>
              <Text style={styles.circleT}>3</Text>
            </View>
            <Text style={styles.circleT2}>جاري التوصيل</Text>
          </View>

          <View style={styles.circleStage}>
            <View style={styles.circleBg}>
              <Text style={styles.circleT}>2</Text>
            </View>
            <Text style={styles.circleT2}>تجهيز الطلب</Text>
          </View>

          <View style={styles.circleStage}>
            <Image source={done} style={styles.doneImage} />

            <Text style={styles.circleT2}>قبول الطلب</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default OrderProgressComp;

const styles = StyleSheet.create({
  compContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: wp(100),
    backgroundColor: "white",
    marginTop: 20,
  },

  OrderBlock: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "95%",
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#A1A1A1",

    marginTop: 10,
    marginBottom: 5,
  },

  progressBlock: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 70,

    marginTop: 10,
  },
  progressLine: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 3,
    backgroundColor: "#A1A1A1",
    marginBottom: 20,
  },
  progressRow: {
    position: "absolute",
    top: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    height: 70,
  },
  circleStage: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },

  circleBg: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#A1A1A1",
    marginBottom: 5,
  },
  circleT: {
    fontSize: 16,
    color: "white",
  },

  circleT2: {
    fontSize: 14,
    color: "#A1A1A1",
    fontFamily: "Cairo-Regular",
  },

  doneImage: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },

  col1: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "60%",
    paddingLeft: 4,
    paddingRight: 4,
  },

  col2: {
    alignItems: "flex-end",
    justifyContent: "flex-start",
    width: "40%",
    alignSelf: "flex-start",
  },

  orderImage: {
    width: 130,
    height: 100,
    resizeMode: "stretch",
    borderTopRightRadius: 7,
  },

  row2: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    justifyContent: "space-between",
  },
  orderNumStyle: {
    fontSize: responsiveFontSize(1.7),
    color: "grey",
    fontFamily: "Cairo-Regular",
  },

  row4: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "flex-end",
  },
  numbre2: {
    fontSize: responsiveFontSize(1.7),
    color: "black",
    fontFamily: "Cairo-Black",
  },

  numbre1: {
    fontSize: responsiveFontSize(1.7),
    color: "#C33D40",
    fontFamily: "Cairo-Black",
  },

  orderNumStyle2: {
    fontSize: responsiveFontSize(1.7),
    color: "black",
    fontFamily: "Cairo-Regular",
  },

  col3: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
  },
  rest1: {
    fontSize: responsiveFontSize(1.5),
    color: "#ff9275",
    fontFamily: "Cairo-Black",
    paddingLeft: 3,
  },
  rest2: {
    fontSize: responsiveFontSize(1.5),
    color: "#accf70",
    fontFamily: "Cairo-Black",
    paddingLeft: 3,
  },

  moneyImage: {
    width: wp(4),
    height: wp(4),
    resizeMode: "contain",
    marginRight: 5,
  },
});
