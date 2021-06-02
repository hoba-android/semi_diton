import { Text, TouchableOpacity, Platform } from "react-native";
import React from "react";
import { responsiveFontSize } from "react-native-responsive-dimensions";

const Button2 = ({ children, _onPressButton }) => {
  const { textStyles, buttonStyle } = styles;

  return (
    <TouchableOpacity style={buttonStyle} onPress={_onPressButton}>
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyles: {
    fontSize: responsiveFontSize(2.2),
    alignSelf: "center",
    color: "white",
    fontFamily: "Hacen-Liner-XXL",
  },
  buttonStyle: {
    alignSelf: "stretch",

    width: 170,
    height: 45,
    backgroundColor: "#ed7d31",

    marginLeft: 5,
    marginRight: 5,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.7,
    shadowRadius: 3,

    elevation: 3,
  },
};

export default Button2;
