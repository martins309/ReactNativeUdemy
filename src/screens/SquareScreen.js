import React, { useReducer } from "react";
import { StyleSheet, View, Text } from "react-native";
import ColorCounter from "./Components/ColorCounter";

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number}
  // action === { type: 'change_red', 'change_green', or 'change_blue' payload: +15 || -15 }

  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, runMyReducer] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0,
  });

  const { red, green, blue } = state;

  const COLOR_INCREMENT = 15;

  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          runMyReducer({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          runMyReducer({ type: "change_red", payload: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          runMyReducer({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          runMyReducer({ type: "change_blue", payload: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />

      <ColorCounter
        onIncrease={() =>
          runMyReducer({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          runMyReducer({ type: "change_green", payload: -1 * COLOR_INCREMENT })
        }
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
