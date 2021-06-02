import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Platform,
  StyleSheet,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';

import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { AntDesign } from '@expo/vector-icons';
import logo from '../../../assets/images/logo.png';

import { useSelector } from 'react-redux';

const PackageDetails = (props) => {
  const userDetails = useSelector((state) => state.user.user)[0];

  return (
    <View style={styles.mainContainer}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} style={styles.iconItem} />
        </TouchableOpacity>

        <View style={styles.middleNav}>
          <Text style={styles.loginTextStyle}>تفاصيل الاشتراك</Text>
        </View>

        <View style={styles.rightNav}>
          <TouchableOpacity></TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <View style={styles.body}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={logo} />
          </View>

          <View style={styles.creditsViewStyle}>
            <Text style={styles.creditStyle1}>ريال</Text>
            <Text style={styles.creditStyle2}>{userDetails.pack}</Text>
            <Text style={styles.creditStyle1}>مبلغ الاشتراك</Text>
          </View>

          <View style={styles.detailsSetion}>
            <View style={styles.detailsRow}>
              <View style={styles.leftBox}>
                <Text style={styles.leftTextstyle}>تقارير يومية متنوعة</Text>
              </View>

              <View style={styles.rightBox}>
                <Text style={styles.rightTextStyle}>اسم الباقة الحالية</Text>
              </View>
            </View>

            <View style={styles.detailsRow}>
              <View style={styles.leftBox}>
                <Text style={styles.leftTextstyle}>{userDetails.name}</Text>
              </View>

              <View style={styles.rightBox}>
                <Text style={styles.rightTextStyle}>اسم العضو المشترك</Text>
              </View>
            </View>

            <View style={styles.detailsRow}>
              <View style={styles.leftBox}>
                <Text style={styles.leftTextstyle}>{userDetails.age} سنة</Text>
              </View>

              <View style={styles.rightBox}>
                <Text style={styles.rightTextStyle}>العمر الحالي</Text>
              </View>
            </View>

            <View style={styles.detailsRow}>
              <View style={styles.leftBox}>
                <Text style={styles.leftTextstyle}>{userDetails.city}</Text>
              </View>

              <View style={styles.rightBox}>
                <Text style={styles.rightTextStyle}>المدينة الحالية</Text>
              </View>
            </View>

            <View style={styles.detailsRow}>
              <View style={styles.leftBox}>
                <Text style={styles.leftTextstyle}>{userDetails.address}</Text>
              </View>

              <View style={styles.rightBox}>
                <Text style={styles.rightTextStyle}>العنوان</Text>
              </View>
            </View>

            <View style={styles.detailsRow}>
              <View style={styles.leftBox}>
                <Text style={styles.leftTextstyle}>
                  {userDetails.orderedMeals} وجبات
                </Text>
              </View>

              <View style={styles.rightBox}>
                <Text style={styles.rightTextStyle}>الوجبات المستهلكة</Text>
              </View>
            </View>

            <View style={styles.detailsRow}>
              <View style={styles.leftBox}>
                <Text style={styles.leftTextstyle}>
                  {userDetails.totalmeals} وجبات
                </Text>
              </View>

              <View style={styles.rightBox}>
                <Text style={styles.rightTextStyle}>الوجبات المتبقية</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PackageDetails;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    height: hp(100),
    width: wp(100),
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? 50 : 0,
  },

  navbar: {
    width: wp(100),
    height: 55,
    backgroundColor: '#be2227',
    elevation: 3,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageNav: {
    paddingLeft: 5,
    width: 32,
    height: 28,
  },
  rightNav: {
    flexDirection: 'row',
  },
  middleNav: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconItem: {
    color: 'white',
    marginLeft: 5,
  },
  body: {
    flex: 1,
    height: hp(100),
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  loginTextStyle: {
    fontSize: responsiveFontSize(2.9),
    color: 'white',
    fontFamily: 'Cairo-Regular',
  },

  logoContainer: {
    marginBottom: 10,
    marginTop: 20,
  },
  logo: {
    width: wp(24),
    height: wp(24),
    resizeMode: 'contain',
  },
  creditsViewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  creditStyle1: {
    fontSize: responsiveFontSize(3),
    color: '#8AC53F',
    alignSelf: 'center',
    fontFamily: 'Cairo-Regular',
    marginLeft: 15,
    marginRight: 15,
  },
  creditStyle2: {
    fontSize: responsiveFontSize(3),
    color: '#8AC53F',
    alignSelf: 'center',
    fontFamily: 'Cairo-Black',
  },
  detailsSetion: {
    width: wp(95),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    padding: 5,
  },

  detailsRow: {
    width: wp(90),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
  },

  rightBox: {
    width: wp(40),
    height: 40,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#707173',
    borderColor: '#727275',
    borderTopRightRadius: 10,
    borderWidth: 1,
  },
  leftBox: {
    flexDirection: 'column',
    justifyContent: 'center',

    width: wp(46),
    height: 40,
    backgroundColor: '#D3D2D2',
    borderColor: '#727275',
    borderWidth: 1,
    borderTopLeftRadius: 10,
  },
  rightTextStyle: {
    fontSize: responsiveFontSize(2),
    color: 'white',
    textAlign: 'right',
    paddingRight: 10,
    fontFamily: 'Cairo-Regular',
  },
  leftTextstyle: {
    fontSize: responsiveFontSize(2),
    color: 'black',

    textAlign: 'right',
    paddingRight: 10,
    fontFamily: 'Cairo-Regular',
  },
});
