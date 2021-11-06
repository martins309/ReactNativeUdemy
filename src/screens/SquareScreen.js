import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useState } from "react";
import ColorCounter from "./Components/ColorCounter";

const SquareScreen = () => {
  return (
    <View>
      <ColorCounter color="Red" />
      <ColorCounter color="Blue"/>
      <ColorCounter color="Green"/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
