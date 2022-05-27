import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "./Components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require("../images/forest.jpg")}
        imageScore={6}
      />

      <ImageDetail 
      title="beach" 
      imageSource={require("../images/beach.jpg")} 
      imageScore={523}
      />

      <ImageDetail
        title="mountain"
        imageSource={require("../images/mountain.jpg")}
        imageScore={12 }
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
