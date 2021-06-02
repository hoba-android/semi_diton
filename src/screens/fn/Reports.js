import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
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

import { useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import moment from 'moment';

import time from '../../../assets/images/time.png';
import fire from '../../../assets/images/fire.png';
import run from '../../../assets/images/run.png';
import repBg from '../../../assets/images/repBg.png';
import cup2 from '../../../assets/images/cup2.png';

const Reports = (props) => {
  const waterNoOfCups = useSelector((state) => state.meals.waterCups);
  const sports = useSelector((state) => state.meals.sports);

  var noOfCups = 0;
  var sportsCals = 0;
  var sportsTime = 0;
  var allDatesArray = [];

  const [currentDate, setCurrentDate] = useState(
    moment().utcOffset('+02').format('YYYY-MM-DD')
  );

  const getNoOfCups = () => {
    const arrofcups = waterNoOfCups.filter(
      (element) => element.date == currentDate
    );
    if (arrofcups.length > 0) {
      noOfCups = arrofcups[arrofcups.length - 1].amount;
    }
  };

  const getSportsInfo = () => {
    const arrofSports = sports.filter((element) => element.date == currentDate);

    for (var i = 0; i < arrofSports.length; i++) {
      sportsCals = sportsCals + arrofSports[i].cals;
      sportsTime = sportsTime + arrofSports[i].time;
    }
    console.log(sportsTime);
  };

  const getAllDates = () => {
    for (var i = 0; i < waterNoOfCups.length; i++) {
      if (allDatesArray.indexOf(waterNoOfCups[i].date) == -1) {
        allDatesArray.push(waterNoOfCups[i].date);
      }
    }
    for (var i = 0; i < sports.length; i++) {
      if (allDatesArray.indexOf(sports[i].date) == -1) {
        allDatesArray.push(sports[i].date);
      }
    }
    console.log(allDatesArray);
  };

  getNoOfCups();
  getSportsInfo();
  getAllDates();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} style={styles.iconItem} />
        </TouchableOpacity>

        <View style={styles.middleNav}>
          <Text style={styles.loginTextStyle}>التقارير</Text>
        </View>
        <View style={styles.rightNav}>
          <TouchableOpacity></TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView1}>
        <View style={styles.body}>
          <FlatList
            horizontal
            data={allDatesArray}
            keyExtractor={(index) => index}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={styles.buttonView}
                  onPress={() => setCurrentDate(item)}
                >
                  <Text style={styles.buttonText}>{item}</Text>
                </TouchableOpacity>
              );
            }}
          />

          <View style={styles.calSection}>
            <View style={styles.bgSecion}>
              <ImageBackground source={repBg} style={styles.bgImage}>
                <View style={styles.bgTextView1}>
                  <Text style={styles.bgTexStyle1}>التقرير اليومي</Text>
                </View>

                <View style={styles.bgTextView2}>
                  <Text style={styles.bgTexStyle2}>للسعرات الحرارية</Text>
                </View>

                <View style={styles.bgTextView3}>
                  <Text style={styles.bgTexStyle3}>المكتسبة</Text>
                </View>

                <View style={styles.bgTextView3}>
                  <Text style={styles.bgTexStyle3}>والمفقودة</Text>
                </View>
              </ImageBackground>
            </View>

            <View style={styles.greySection}></View>

            <View style={styles.dataSection}>
              <View style={styles.runSection}>
                <Image source={run} style={styles.runImage} />

                <View style={styles.dataColumn}>
                  <Text style={styles.dataColumnText1}>تم استهلاك</Text>
                  <View style={styles.dataRow}>
                    <Image source={fire} style={styles.fireImage} />
                    <Text style={styles.dataColumnText2}>
                      {sportsCals} سعر حراري
                    </Text>
                  </View>

                  <View style={styles.dataRow}>
                    <Image source={time} style={styles.fireImage} />
                    <Text style={styles.dataColumnText2}>
                      {sportsTime} دقيقة
                    </Text>
                  </View>
                </View>

                <View style={styles.sectionCaption1}>
                  <Text style={styles.sectionCaptionText1}>الرياضة</Text>
                </View>
              </View>

              <View style={styles.runSection}>
                <Image source={cup2} style={styles.runImage} />

                <View style={styles.dataColumn}>
                  <Text style={styles.dataColumnText1}>
                    عدد الأكواب المستهلكة
                  </Text>
                  <View style={styles.dataRow}>
                    <Image source={fire} style={styles.fireImage} />
                    <Text style={styles.dataColumnText2}>{noOfCups} كوب</Text>
                  </View>
                </View>

                <View style={styles.sectionCaption3}>
                  <Text style={styles.sectionCaptionText1}>الماء</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Reports;

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
  },

  loginTextStyle: {
    fontSize: responsiveFontSize(3.3),
    color: 'white',
    fontFamily: 'Cairo-Regular',
  },

  horizontal: {
    height: 80,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  body: {
    height: '100%',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logoContainer: {
    marginBottom: 10,
    marginTop: 10,
    height: hp(8),
  },

  scrollView: {
    height: hp(7),
    width: '100%',
  },
  scrollView1: {
    flex: 1,
  },
  logo: {
    width: wp(15),
    height: wp(15),
    resizeMode: 'contain',
  },

  calSection: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    backgroundColor: '#dfe0e0',
    height: hp(85),
  },

  bgSecion: {
    width: '100%',
    backgroundColor: '#dfe0e0',
    height: hp(28),
  },
  bgImage: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    width: '100%',
    height: hp(28),
  },

  greySection: {
    width: '100%',
    backgroundColor: '#D9D9DA',
    flex: 1,
  },

  dataSection: {
    position: 'absolute',
    top: hp(30),

    width: '93%',

    flex: 1,
  },

  runSection: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 100,
    backgroundColor: 'white',
    borderRadius: 7,
    marginBottom: 10,
  },
  sectionCaption1: {
    width: 90,
    height: 30,
    backgroundColor: '#747477',
    position: 'absolute',
    top: 70,
    right: 0,
    borderTopLeftRadius: 7,
    borderBottomRightRadius: 7,
  },

  sectionCaption2: {
    width: 90,
    height: 30,
    backgroundColor: '#81A741',
    position: 'absolute',
    top: 70,
    right: 0,
    borderTopLeftRadius: 7,
    borderBottomRightRadius: 7,
  },

  sectionCaption3: {
    width: 90,
    height: 30,
    backgroundColor: '#2090BF',
    position: 'absolute',
    top: 70,
    right: 0,
    borderTopLeftRadius: 7,
    borderBottomRightRadius: 7,
  },

  sectionCaptionText1: {
    fontSize: responsiveFontSize(1.8),
    color: 'white',
    fontFamily: 'Cairo-Regular',
    textAlign: 'center',
  },
  runImage: {
    width: '40%',
    height: '80%',
    resizeMode: 'contain',
  },
  fireImage: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    marginRight: 5,
  },

  dataColumn: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginLeft: 10,
  },
  dataRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  dataColumnText1: {
    fontSize: responsiveFontSize(1.8),
    color: 'orange',
    fontFamily: 'Cairo-Regular',
    textAlign: 'center',
  },
  dataColumnText2: {
    fontSize: responsiveFontSize(1.8),
    color: 'grey',
    fontFamily: 'Cairo-Regular',
    textAlign: 'center',
  },

  bgTextView1: {
    width: 160,
    height: 30,
    backgroundColor: '#CA4B4E',
    marginTop: 10,
  },

  bgTexStyle1: {
    fontSize: responsiveFontSize(2),
    color: 'white',
    fontFamily: 'Cairo-Regular',
    textAlign: 'center',
  },

  bgTextView2: {
    width: 160,
    height: 30,
    backgroundColor: '#F0951A',
    marginTop: 10,
  },

  bgTexStyle2: {
    fontSize: responsiveFontSize(2),
    color: 'black',
    fontFamily: 'Cairo-Regular',
    textAlign: 'center',
  },

  bgTextView3: {
    width: 100,
    height: 30,
    backgroundColor: '#889630',
    marginTop: 10,
  },

  bgTexStyle3: {
    fontSize: responsiveFontSize(2),
    color: 'black',
    fontFamily: 'Cairo-Regular',
    textAlign: 'center',
  },

  calCounter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calCircleImage: {
    width: wp(45),
    height: wp(45),
    resizeMode: 'contain',
    marginTop: 10,
  },
  percentCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },
  calsCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
  },

  verticalSep: {
    height: 90,
    width: 1,
    backgroundColor: 'grey',
    marginRight: 7,
  },
  calColumns: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  calText2: {
    fontSize: responsiveFontSize(6),
    color: 'black',
    fontFamily: 'Cairo-Regular',
  },

  calText3: {
    fontSize: responsiveFontSize(3),
    color: 'black',
    fontFamily: 'Cairo-Regular',
  },

  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 30,
  },
  detailsRow1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    width: '50%',
  },
  calColumn: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(100),
    padding: 5,
  },

  foddCal1: {
    fontSize: responsiveFontSize(3.5),
    color: '#be2227',
    paddingRight: 7,
  },
  food: {
    fontSize: responsiveFontSize(2.5),
    color: '#be2227',
    fontFamily: 'Cairo-Regular',
    paddingRight: 20,
  },

  foddCal2: {
    fontSize: responsiveFontSize(4),
    color: '#818285',
    fontFamily: 'Cairo-Regular',
  },

  waterCal1: {
    fontSize: responsiveFontSize(3.5),
    color: 'black',
    fontFamily: 'Cairo-Regular',
    paddingRight: 7,
  },
  water: {
    fontSize: responsiveFontSize(2.5),
    color: 'black',
    fontFamily: 'Cairo-Regular',
    paddingRight: 20,
  },

  sportCal1: {
    fontSize: responsiveFontSize(3.5),
    color: '#629e15',
    fontFamily: 'Cairo-Regular',
    paddingRight: 7,
  },
  sport: {
    fontSize: responsiveFontSize(2.5),
    color: '#629e15',
    fontFamily: 'Cairo-Regular',
    paddingRight: 20,
  },

  calTimer: {
    position: 'absolute',
    top: wp(30) - 10,
    right: wp(60) / 2,
  },
  calText: {
    fontSize: responsiveFontSize(8),
    color: 'white',
    fontFamily: 'Cairo-Regular',
  },

  buttonText: {
    fontSize: responsiveFontSize(2),
    color: 'white',
    fontFamily: 'Cairo-Regular',
  },

  buttonView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(30),
    height: 40,
    backgroundColor: '#1E8BB8',
    marginHorizontal: 5,
    marginVertical: 5,
  },
  playButtonImage: {
    width: wp(15),
    height: wp(15),
    resizeMode: 'contain',
    marginTop: 50,
  },

  counterTextStyle1: {
    fontSize: responsiveFontSize(4.5),
    color: '#595a5a',
    fontFamily: 'Cairo-Regular',
  },
  counterTextStyle2: {
    fontSize: responsiveFontSize(2.5),
    color: '#595a5a',
    fontFamily: 'Cairo-Regular',
  },
});
