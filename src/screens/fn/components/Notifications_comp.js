import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';

import avatar from '../../../../assets/images/logo.png';

import { responsiveFontSize } from 'react-native-responsive-dimensions';

const Notifications_comp = ({ title, desc }) => {
  return (
    <View style={styles.compContainer}>
      <View style={styles.leftCol}>
        <Text style={styles.notText1}>{title} </Text>
        <Text style={styles.notText2}>{desc}</Text>
      </View>

      <View style={styles.rightCol}>
        <Image style={styles.avatar} source={avatar} />
        <Text style={styles.avatarText}>Adam Less </Text>
      </View>
    </View>
  );
};

export default Notifications_comp;

const styles = StyleSheet.create({
  avatar: {
    width: wp(18),
    height: wp(18),
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 50,
  },

  compContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: wp(98),
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    marginTop: 10,
    marginBottom: 5,
  },

  rightCol: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    width: wp(25),
  },

  avatarText: {
    fontSize: responsiveFontSize(1.4),
    color: 'white',
    fontFamily: 'Cairo-Regular',
  },

  leftCol: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  notText1: {
    fontSize: responsiveFontSize(2),
    color: '#3C3C3C',
    fontFamily: 'Cairo-Regular',
    fontWeight: 'bold',
  },
  notText2: {
    fontSize: responsiveFontSize(2),
    color: '#3C3C3C',
    fontFamily: 'Cairo-Regular',
  },
});
