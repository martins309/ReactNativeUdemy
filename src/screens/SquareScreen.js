import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import ColorCounter from "./Components/ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    //color === 'red', 'green', 'blue'
    //change is going to be +- 15

    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;

      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;

      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;

      default:
        return;
    }
  };

  // WHEN YOU WANT TO CREATE TRUE CONSTANT VALUE THAT IS A
  //CONFIGURATION OPTION AND NOT AS A PROP ALL CAPS
  //FOR THE VARIABLE

  const COLOR_INCREMENT = 15;

  console.log(red);

  //on line 32, the two curly braces mean that we are passing an object directly.
  //first brace is a reference to a javascript object.
  //second brace is the object literal.

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor("blue", +COLOR_INCREMENT)}
        onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
        color="Blue"
      />

      <ColorCounter
        onIncrease={() => setColor("green", +COLOR_INCREMENT)}
        onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
        color="Green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue} )`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
