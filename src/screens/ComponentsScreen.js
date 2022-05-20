import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
   const greeting = <Text>What is this happenin g to you</Text> 
  return (
    <View>
      <Text style={styles.textStyle}>Why am I like this??</Text>
     {greeting}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ComponentsScreen;
