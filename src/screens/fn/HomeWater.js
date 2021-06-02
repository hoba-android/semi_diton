import React, { useState } from 'react';
import { Text, View, Image, ImageBackground, StyleSheet } from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';

import { responsiveFontSize } from 'react-native-responsive-dimensions';

import add from '../../../assets/images/Add.png';
import cup from '../../../assets/images/cup2.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ProgressCircle from 'react-native-progress-circle';

import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/mealActions';

import Water from '../../models/water';
import moment from 'moment';

const target = 10;

const HomeWater = () => {
  const [cups, setCups] = useState(0);
  const [precentage, setpercentage] = useState(0);

  const cupsOfWater = useSelector((state) => state.meals.waterCups);

  const dispatch = useDispatch();

  const addACup = () => {
    setCups(cups + 1);
    const perc = Math.round(((cups + 1) / 10) * 100);
    setpercentage(perc);

    const newCup = new Water(
      Math.random().toString(),
      cups,
      moment().utcOffset('+02').format('YYYY-MM-DD')
    );
    dispatch(actions.addWater(newCup));
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.addRow}>
        <Text style={styles.cupsText}>{cups}</Text>
        <TouchableOpacity onPress={addACup}>
          <Image style={styles.addButton} source={add} />
        </TouchableOpacity>
      </View>

      <View style={styles.section12}>
        <ProgressCircle
          percent={precentage}
          radius={120}
          borderWidth={10}
          color="#3399FF"
          shadowColor="#999"
          bgColor="#fff"
        >
          <Text style={{ fontSize: 20, paddingBottom: 7 }}>{precentage} %</Text>
          <Image style={styles.cup} source={cup} />
        </ProgressCircle>

        <Text style={{ fontSize: 18, color: 'white', marginTop: 20 }}>
          Target 10 cups
        </Text>
      </View>
    </View>
  );
};

export default HomeWater;

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 370,
    width: wp(100),
    backgroundColor: 'grey',
  },

  addRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  addButton: {
    width: wp(8),
    height: wp(8),
    resizeMode: 'contain',
  },
  cupsText: {
    fontSize: responsiveFontSize(3.9),
    color: 'white',
    paddingLeft: 20,
    paddingRight: 20,
  },

  section12: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  cup: {
    width: hp(25),
    height: hp(25),
    resizeMode: 'contain',
  },
  imageBG: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 240,
    height: 240,
    backgroundColor: 'white',
    borderRadius: 120,
  },
  imageProgressOutline: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 240,
    height: 240,
    borderColor: 'red',
    borderWidth: 6,
    borderRadius: 120,
  },
});
