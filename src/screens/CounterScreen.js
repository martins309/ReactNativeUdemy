import React, { useReducer } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  return state.counter + action.payload > 100 ||
    state.counter + action.payload < 0
    ? state
    : { ...state, counter: state.counter + action.payload };
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {
    counter : 0
  });

  const COUNTER_INCREMENT = 5;

  const counter = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: state, payload: COUNTER_INCREMENT });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: state, payload: -1 * COUNTER_INCREMENT });
        }}
      />
      <Text>Current Count:{state.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
