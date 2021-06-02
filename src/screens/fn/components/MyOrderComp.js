import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';

import orderImage from '../../../../assets/images/order_img.png';
import money from '../../../../assets/images/money_sack.png';
import candel from '../../../../assets/images/cancel.png';

import { responsiveFontSize } from 'react-native-responsive-dimensions';

const MyOrderComp = ({ name, image, desc, price, deleteMeal, date }) => {
  return (
    <View style={styles.compContainer}>
      <View style={styles.row1}>
        <Text style={styles.dateStyle}>{date} </Text>
        <View style={styles.orderRow}>
          <Text style={styles.orderNumStyle}>#123456 </Text>
          <Text style={styles.orderNumStyle}>رقم الطلب </Text>
        </View>
      </View>
      <View style={styles.cancelView}>
        <TouchableOpacity onPress={deleteMeal}>
          <Image style={styles.cancelImage} source={candel} />
        </TouchableOpacity>
      </View>

      <View style={styles.row1}>
        <View style={styles.col1}>
          <View style={styles.row3}>
            <Image style={styles.orderImage} source={{ uri: image }} />
            <View style={styles.col3}>
              <Text style={styles.rest1}>{name} </Text>
              <Text style={styles.rest2}>{desc} </Text>
            </View>
          </View>

          <View style={styles.row4}>
            <TouchableOpacity>
              <View style={styles.circle1}>
                <Text style={styles.circle1Text}> - </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.circle2}>
                <Text style={styles.circle1Text}>0</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.circle1}>
                <Text style={styles.circle1Text}> + </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.col2}>
          <View style={styles.row2}>
            <Image style={styles.moneyImage} source={money} />
            <Text style={styles.numbre1}>{price} </Text>
            <Text style={styles.sr1}>S R </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MyOrderComp;

const styles = StyleSheet.create({
  compContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: wp(95),
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',

    marginTop: 20,
    marginBottom: 5,
    padding: 5,
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
    fontFamily: 'Cairo-Regular',
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

  col1: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '60%',
  },

  col2: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    width: '38%',

    paddingTop: 30,
  },
  col3: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  row3: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  row4: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',

    alignSelf: 'center',
    paddingTop: 10,
  },
  moneyImage: {
    width: wp(4),
    height: wp(4),
    resizeMode: 'contain',
    marginRight: 5,
  },

  orderImage: {
    width: wp(23),
    height: wp(12),
    resizeMode: 'contain',
  },

  numbre1: {
    fontSize: responsiveFontSize(2),
    color: '#be2227',
    fontFamily: 'Cairo-Black',
  },

  sr1: {
    fontSize: responsiveFontSize(2),
    color: '#be2227',
    fontFamily: 'Cairo-Black',
  },
  numbre2: {
    fontSize: responsiveFontSize(2),
    color: 'black',
    fontFamily: 'Cairo-Black',
  },

  sr2: {
    fontSize: responsiveFontSize(2),
    color: 'black',
    fontFamily: 'Cairo-Black',
  },
  rest1: {
    fontSize: responsiveFontSize(1.5),
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

  cancelImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },

  cancelView: {
    position: 'absolute',
    top: -20,
    left: 0,

    alignSelf: 'flex-end',
    backgroundColor: 'transparent',
  },
});
