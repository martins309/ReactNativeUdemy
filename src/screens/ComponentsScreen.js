import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const greeting = <Text>My name is Andrew</Text>;
  return (
    <View>
      <Text style={styles.textStyle}>Getting Started with react native</Text>
      <Text style={styles.textGreeting}>{greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  textGreeting: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
