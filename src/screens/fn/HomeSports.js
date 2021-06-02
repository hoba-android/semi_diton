import React, { useState } from 'react';
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
  Button,
  FlatList,
} from 'react-native';
import moment from 'moment';
import Sport from '../../models/sport';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol,
} from 'react-native-responsive-screen';

import { Picker } from '@react-native-picker/picker';

import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/mealActions';

import act1_counter from '../../../assets/images/act1_counter.png';
import act1_pic from '../../../assets/images/act1_pic.png';

const HomeSports = (props) => {
  const [sportType, setSportType] = useState('walking');
  const [sportTime, setSportTime] = useState(15);

  const userSpoarts = useSelector((state) => state.meals.sports);
  console.log(userSpoarts);

  const dispatch = useDispatch();

  const addSport = () => {
    const sport = new Sport(
      Math.random().toString(),
      sportType,
      sportTime,
      moment().utcOffset('+02').format('YYYY-MM-DD'),
      sportTime * 3
    );
    dispatch(actions.addSport(sport));
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.acitivityRow}>
            <View>
              <Image style={styles.actImageStyle} source={act1_pic} />

              <Picker
                style={{ width: 150 }}
                selectedValue={sportType}
                onValueChange={(itemValue, itemIndex) =>
                  setSportType(itemValue)
                }
              >
                <Picker.Item label="Walking" value="Walking" selectedValue />
                <Picker.Item label="Running" value="Running" />
                <Picker.Item label="Swimming" value="Swimming" />
                <Picker.Item label="Jogging" value="Jogging" />
              </Picker>
            </View>

            <View>
              <Image style={styles.actImageStyle} source={act1_counter} />

              <Picker
                selectedValue={sportTime}
                onValueChange={(itemValue, itemIndex) =>
                  setSportTime(itemValue)
                }
              >
                <Picker.Item label="15" value={15} selectedValue />
                <Picker.Item label="30" value={30} />
                <Picker.Item label="45" value={45} />
                <Picker.Item label="60" value={60} />
              </Picker>
            </View>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: 'grey',
              width: 200,
              alignItems: 'center',
              marginTop: 20,
              height: 40,
              justifyContent: 'center',
              borderRadius: 10,
            }}
            onPress={addSport}
          >
            <Text style={{ fontSize: 20, color: 'white' }}>Add</Text>
          </TouchableOpacity>
          <FlatList
            data={userSpoarts}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    width: '90%',
                    justifyContent: 'space-around',
                    marginTop: 10,
                    paddingRight: 10,
                    backgroundColor: 'teal',
                    alignSelf: 'center',
                    marginBottom: 5,
                    height: 30,
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ fontSize: 18, color: 'white' }}>
                    {item.type}
                  </Text>
                  <Text style={{ fontSize: 18, color: 'white' }}>
                    {item.time}
                  </Text>
                  <Text style={{ fontSize: 18, color: 'white' }}>
                    {item.date}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeSports;

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
