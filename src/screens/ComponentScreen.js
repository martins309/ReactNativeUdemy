import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


const Myname = "Andrew"
const ComponentScreen = () => {
    return <View><Text style={styles.textStyle}>Getting Started with React Native</Text>
    <Text style={styles.subHeaderStyle}>My name is {Myname}</Text>
    </View>
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 29
    }
});

export default ComponentScreen;