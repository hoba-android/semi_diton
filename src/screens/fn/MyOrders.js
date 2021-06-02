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

import MyOrderComp from '../../screens/fn/components/MyOrderComp';

import logo from '../../../assets/images/logo.png';

import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/mealActions';

const MyOrders = (props) => {
  const userMeals = useSelector((state) => state.meals.userMeals);
  const dispatch = useDispatch();

  const deleteMeal = (id) => {
    const found = userMeals.find((element) => element.id == id);
    dispatch(actions.removeMeal(id));
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
          <AntDesign name="arrowleft" size={30} style={styles.iconItem} />
        </TouchableOpacity>

        <View style={styles.middleNav}>
          <Text style={styles.loginTextStyle}>طلباتي</Text>
        </View>
        <View style={styles.rightNav}>
          <TouchableOpacity onPress={() => {}}></TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <View style={styles.body}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={logo} />
          </View>

          <FlatList
            data={userMeals}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <View>
                  <MyOrderComp
                    name={item.title}
                    image={item.imageUrl}
                    desc={item.description}
                    price={item.price}
                    deleteMeal={() => deleteMeal(item.id)}
                    date={item.date}
                  />
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default MyOrders;

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
    fontSize: responsiveFontSize(2.9),
    color: 'white',
  },

  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginBottom: 10,
    marginTop: 10,
  },
  logo: {
    width: wp(25),
    height: wp(25),
    resizeMode: 'contain',
  },
});
