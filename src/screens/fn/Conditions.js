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

const Conditions = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.navbar}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Home")}
        >
          <AntDesign name="arrowleft" size={30} style={styles.iconItem} />
        </TouchableOpacity>

        <View style={styles.middleNav}>
          <Text style={styles.loginTextStyle}>Conditions</Text>
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

      <View style={styles.conditionsContainer}>
        <ScrollView style={{ height: hp(60), flex: 1 }}>
          <Text style={styles.conditons}>
            الشروط راسي أن لا يكون قد مضى على تاريخ الحصول على شهادة الثانوية
            العامة أو ما يعادلها أكثر من 3 سنوات عند تقديم الطلب بالجامعة
            (ويستثنى من ذلك بقرار من لجنة القبوماجستير عددا من المساقات
            الاستدراكية في مدة لا تزيد على فصلين دراسيين. ويعتبر هذا القبول
            مشروطاً باجتياز الفصل الدراسي الأول ومدته أربعة أشهر بنجاح"" راسي أن
            لا يكون قد مضى على تاريخ الحصول على شهادة الثانوية العامة أو ما
            يعادلها أكثر من 3 سنوات عند تقديم الطلب بالجامعة (ويستثنى من ذلك
            بقرار من لجنة القبول). ويعتبر هذا القبول مشروطاً باجتياز الفصل
            الدراسي الأول بنجاح ومدته أربعة أشهر على طلبة الثانوية العامة
            الراغبين بالدراسة التسجيل في نظام الالتحاق الإلكتروني (النابو)
            التابع لوزارة التعليم العالي والبحث العلمي عبر الرابط التالي
            http://www.mohesr.gov.ae/ar/Pages/ServiceCards.aspx?service-napo_reg
            أو لدى مقر الجامعة الكائن بإمارة أبوظبي، تقاطع شارع فاطمة بنت مبارك
            مع شارع حمدان بن محمد. شروط القبول في برنامج الماجستير: طلبة
            الثانوية العامة الراغبين بالدراسة التسجيل في نظام الالتحاق
            الإلكتروني (النابو) التابع لوزارة التعليم ال الشروط راسي أن لا يكون
            قد مضى على تاريخ الحصول على شهادة الثانوية العامة أو ما يعادلها أكثر
            من 3 سنوات عند تقديم الطلب بالجامعة (ويستثنى من ذلك بقرار من لجنة
            القبوماجستير عددا من المساقات الاستدراكية في مدة لا تزيد على فصلين
            دراسيين. ويعتبر هذا القبول مشروطاً باجتياز الفصل الدراسي الأول ومدته
            أربعة أشهر بنجاح"" راسي أن لا يكون قد مضى على تاريخ الحصول على شهادة
            الثانوية العامة أو ما يعادلها أكثر من 3 سنوات عند تقديم الطلب
            بالجامعة (ويستثنى من ذلك بقرار من لجنة القبول). ويعتبر هذا القبول
            مشروطاً باجتياز الفصل الدراسي الأول بنجاح ومدته أربعة أشهر على طلبة
            الثانوية العامة الراغبين بالدراسة التسجيل في نظام الالتحاق
            الإلكتروني (النابو) التابع لوزارة التعليم العالي والبحث العلمي عبر
            الرابط التالي
            http://www.mohesr.gov.ae/ar/Pages/ServiceCards.aspx?service-napo_reg
            أو لدى مقر الجامعة الكائن بإمارة أبوظبي، تقاطع شارع فاطمة بنت مبارك
            مع شارع حمدان بن محمد. شروط القبول في برنامج الماجستير: طلبة
            الثانوية العامة الراغبين بالدراسة التسجيل في نظام الالتحاق
            الإلكتروني (النابو) التابع لوزارة التعليم ال
          </Text>
        </ScrollView>
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.buttonStyle2}>
          <Text style={styles.testStyles}>موافق</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Conditions;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "flex-start",
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
    fontFamily: "GE_SS_Two_Medium",
  },

  conditons: {
    fontSize: responsiveFontSize(2),
    color: "gray",
    textAlign: "right",
    fontFamily: "Cairo-Black",
    padding: 15,
  },

  conditionsContainer: {
    height: hp(60),
    width: wp(85),
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#ed7d31",
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: "white",
    marginTop: 20,
    alignSelf: "center",
  },

  headerText: {
    fontSize: responsiveFontSize(2.5),
    color: "white",
    fontFamily: "Cairo-Black",
    marginRight: 15,
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
    marginTop: 10,
  },
  buttonView: {
    marginTop: 15,
    alignItems: "center",
  },
  testStyles: {
    fontSize: responsiveFontSize(2.2),
    color: "white",
    alignSelf: "center",
    fontFamily: "Cairo-Black",
  },
});
