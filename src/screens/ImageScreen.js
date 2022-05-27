import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "./Components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require("../images/forest.jpg")}
      />

      <ImageDetail title="beach" imageSource={require("../images/beach.jpg")} />

      <ImageDetail
        title="mountain"
        imageSource={require("../images/mountain.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
