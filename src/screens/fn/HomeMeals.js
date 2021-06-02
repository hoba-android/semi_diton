import React, { useEffect } from 'react';
import { View, ScrollView, StyleSheet, FlatList, Text } from 'react-native';
import moment from 'moment';
import { LogBox } from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';

import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/mealActions';

import Meals_comp from './components/Meals_comp';

const HomeMeals = (props) => {
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const meals = useSelector((state) => state.meals.allMeals);

  const dispatch = useDispatch();

  const arrOfMeals = useSelector((state) => {
    // comvert the items object to an array
    const transformedMeals = [];

    for (const key in state.meals.allMeals) {
      const currentItem = state.meals.allMeals[key];
      transformedMeals.push({
        id: currentItem.id,
        ownerId: currentItem.ownerId,
        title: currentItem.title,
        imageUrl: currentItem.imageUrl,
        description: currentItem.description,
        price: currentItem.price,
        cals: currentItem.cals,
        date: moment().utcOffset('+02').format('YYYY-MM-DD'),
      });
    }
    return transformedMeals.sort((a, b) => (a.id > b.id ? 1 : -1));
  });

  const onAddMeal = (id) => {
    const found = arrOfMeals.find((element) => element.id == id);

    dispatch(actions.addMeal(found));
    props.navigation.navigate('MyOrders');
    console.log(found);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.body}>
        <FlatList
          data={meals}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <View>
                <Meals_comp
                  name={item.title}
                  image={item.imageUrl}
                  desc={item.description}
                  price={item.price}
                  cals={item.cals}
                  navigation={props.navigation}
                  onadd={() => onAddMeal(item.id)}
                />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default HomeMeals;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    height: hp(100),
    width: wp(100),
    backgroundColor: '#8ac53f',
  },

  body: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 10,
  },

  acitivityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(95),

    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 25,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },

  actImageStyle: {
    width: wp(28),
    height: hp(18),
    resizeMode: 'contain',
  },
});
