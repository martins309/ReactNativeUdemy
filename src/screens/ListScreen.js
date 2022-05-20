import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

//whenever we want to build a list in react native we use the flat list element
//The starting point is always an array of something
//Array of objects, strings, and etc..
//normally we would use the map function but in rn we have the flatlist to display lists in a performant fasion
//element has an item:{name: "friend 1"}
//instead pull of the item property and destructure item
//add a key so that react native doesnt have to rebuild list when the component re renders
//horizontal prop tells rn we want to scroll left to right

const ListScreen = () => {
  const friends = [
    { name: "friend 1", age: "30" },
    { name: "friend 2", age: "40" },
    { name: "friend 3", age: "19" },
    { name: "friend 4", age: "2002" },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name}- {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
