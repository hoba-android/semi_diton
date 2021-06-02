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
  FlatList,
} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';

import { responsiveFontSize } from 'react-native-responsive-dimensions';

import { AntDesign } from '@expo/vector-icons';

import { useSelector } from 'react-redux';

import NotComp from '../fn/components/Notifications_comp';

const Notifications = (props) => {
  const notificaions = useSelector((state) => state.notRed.notificaions);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <AntDesign name="arrowleft" size={30} style={styles.iconItem} />
        </TouchableOpacity>

        <View style={styles.middleNav}>
          <Text style={styles.loginTextStyle}>الإشعارات</Text>
        </View>

        <View style={styles.rightNav}>
          <TouchableOpacity></TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <View style={styles.body}>
          <View style={styles.strip}></View>

          <FlatList
            data={notificaions}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <View>
                  <NotComp title={item.title} desc={item.desc} />
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    height: hp(100),
    width: wp(100),
    backgroundColor: '#ACACAC',
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

  strip: {
    width: wp(100),
    height: 12,
    backgroundColor: 'white',
  },
  loginTextStyle: {
    fontSize: responsiveFontSize(2.9),
    color: 'white',
    fontFamily: 'Cairo-Regular',
  },
});
