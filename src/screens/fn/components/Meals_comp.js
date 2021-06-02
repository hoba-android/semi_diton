import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';

import money from '../../../../assets/images/money_sack.png';
import fire from '../../../../assets/images/fire.png';

import { responsiveFontSize } from 'react-native-responsive-dimensions';

const Meals_comp = ({ name, image, desc, price, cals, onadd }) => {
  return (
    <View style={styles.compContainer}>
      <View style={styles.col1}>
        <Image style={styles.orderImage} source={{ uri: image }} />
      </View>

      <View style={styles.col2}>
        <Text style={styles.rest1}>{name} </Text>
        <Text style={styles.rest1}>{desc}</Text>

        <View style={styles.row2}>
          <Image style={styles.moneyImage} source={fire} />
          <Text style={styles.numbre1}>{cals} </Text>
          <Text style={styles.numbre1}>cals </Text>
        </View>

        <View style={styles.row3}>
          <View style={styles.row4}>
            <Image style={styles.moneyImage} source={money} />
            <Text style={styles.sr1}>{price} </Text>
            <Text style={styles.sr1}>L.E </Text>
          </View>

          <TouchableOpacity onPress={onadd}>
            <View style={styles.col3}>
              <Text style={styles.sr2}>Add </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Meals_comp;

const styles = StyleSheet.create({
  compContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(95),
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 5,
    height: 140,
  },

  col1: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '50%',
  },

  orderImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
    borderTopLeftRadius: 3,
    borderBottomLeftRadius: 3,
  },

  col2: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    width: '50%',
    height: '100%',
    paddingLeft: 5,
  },

  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  dateStyle: {
    fontSize: responsiveFontSize(2),
    color: '#7f7f7f',
  },
  orderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderNumStyle: {
    fontSize: responsiveFontSize(2),
    color: 'black',
    fontFamily: 'Cairo-Regular',
  },

  col3: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9e1c21',
    width: 90,
    borderTopLeftRadius: 7,
    borderBottomRightRadius: 7,
    alignSelf: 'flex-end',
  },

  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  row4: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    borderColor: 'green',
    borderWidth: 1,
  },
  row3: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: '100%',
    justifyContent: 'space-between',
  },
  row4: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',

    alignSelf: 'flex-end',
    paddingTop: 10,
  },
  moneyImage: {
    width: wp(4),
    height: wp(4),
    resizeMode: 'contain',
    marginRight: 5,
    paddingLeft: 5,
  },

  numbre1: {
    fontSize: responsiveFontSize(2.2),
    color: 'grey',
    fontFamily: 'Cairo-Regular',
  },

  sr1: {
    fontSize: responsiveFontSize(2.2),
    color: 'grey',
    fontFamily: 'Cairo-Black',
  },
  numbre2: {
    fontSize: responsiveFontSize(2),
    color: 'black',
    fontFamily: 'Cairo-Black',
  },

  sr2: {
    fontSize: responsiveFontSize(2.3),
    color: 'white',
    fontFamily: 'Cairo-Regular',
  },

  rest1: {
    fontSize: responsiveFontSize(1.7),
    color: '#ff9275',

    paddingLeft: 3,
  },
  rest2: {
    fontSize: responsiveFontSize(1.5),
    color: '#accf70',

    paddingLeft: 3,
  },
  circle1: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#a1a1a1',
    marginRight: 5,
    marginLeft: 5,
  },

  circle1Text: {
    color: 'white',
  },

  circle2: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#252525',
  },
});
