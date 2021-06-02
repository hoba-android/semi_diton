import React from 'react';
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
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';

import { responsiveFontSize } from 'react-native-responsive-dimensions';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import logo from '../../../assets/images/logo.png';

import HomeWater from './HomeWater';

const HomeW = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} style={styles.iconItem} />
        </TouchableOpacity>

        <View style={styles.middleNav}>
          <Ionicons style={styles.iconItem} name="ios-home" size={30} />
          <Text style={styles.loginTextStyle}>Home</Text>
        </View>
        <View style={styles.rightNav}>
          <TouchableOpacity
            onPress={() => props.navigation.openDrawer()}
          ></TouchableOpacity>
        </View>
      </View>

      <View style={styles.body}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={logo} />
        </View>

        <ScrollView>
          <HomeWater />
        </ScrollView>
        <View style={styles.tabsContainer1}>
          <TouchableOpacity
            style={styles.tabsStyle1}
            onPress={() => props.navigation.navigate('Home')}
          >
            <Text style={styles.tab2TextStyle}>Meal</Text>
            <MaterialCommunityIcons
              name="food-fork-drink"
              size={30}
              color={'black'}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabsStyle2}
            onPress={() => props.navigation.navigate('HomeS')}
          >
            <Text style={styles.tab2TextStyle}>Sport</Text>
            <MaterialCommunityIcons name="dumbbell" size={30} color={'black'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabsStyle3}
            onPress={() => props.navigation.navigate('HomeW')}
          >
            <Text style={styles.tab1TextStyle}>Water</Text>
            <MaterialCommunityIcons
              name="cup-water"
              size={30}
              color={'white'}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeW;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
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
  iconItem2: {
    color: 'white',
  },
  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  logo: {
    width: wp(25),
    height: wp(25),
    resizeMode: 'contain',
    marginBottom: 20,
  },
  tabsContainer1: {
    position: 'absolute',
    top: wp(33),
    width: wp(90),
    height: 40,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 7,
  },

  tabsStyle1: {
    width: '33%',
    height: 40,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
  tabsStyle2: {
    width: '33%',
    height: 40,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  tabsStyle3: {
    width: '33%',
    height: 40,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#be2227',
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
  },
  tab1TextStyle: {
    fontSize: responsiveFontSize(2),
    color: 'white',

    fontFamily: 'Cairo-Regular',
    paddingRight: 7,
  },
  tab2TextStyle: {
    fontSize: responsiveFontSize(2),
    color: 'black',

    fontFamily: 'Cairo-Regular',
    paddingRight: 7,
  },
  loginTextStyle: {
    fontSize: responsiveFontSize(3.5),
    color: 'white',

    fontFamily: 'Cairo-Regular',
    marginLeft: 5,
  },
});
