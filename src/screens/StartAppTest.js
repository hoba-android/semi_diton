import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import { useSelector, useDispatch } from "react-redux";

const StartAppTest = () => {
  const products = useSelector((state) => state.meals.allMeals);
  return (
    <View>
      <Text>StartAppTest</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default StartAppTest;

const styles = StyleSheet.create({});
