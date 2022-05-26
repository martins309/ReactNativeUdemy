import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = (props) => {
  console.log(props)
  return (
    <View>
        <Image source={require('../..assets/adaptive-icon.jpg')} />
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
