import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ImageDetail = (props) => {
  console.log(props)
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
