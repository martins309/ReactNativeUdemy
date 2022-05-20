import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    const greeting = 'face here'
 return (
     <View>
         <Text style={styles.text}>Hi there</Text>
         <Text style={styles.subText}>{greeting}</Text>
     </View>
 )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    },
    subText: {
        fontSize: 30
    }

});

export default ComponentsScreen;
