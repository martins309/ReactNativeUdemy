import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>
        whats poppin 
      </Text>
      <Button 
      title="Deez Nuts" 
      onPress={() => console.log("daddy")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;

