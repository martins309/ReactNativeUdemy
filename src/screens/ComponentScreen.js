import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

const ComponentScreen = () => {
    const greeting = "eat my shorts"
    const name = "Andrew"
    return (
        <View>
            <Text style={styles.textStyle}>this is so much fun {greeting}</Text>
            <Text style={styles.subTextStyle}>I {name} am going to be so good at this</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    textStyle: {
        fontSize: 36,
        color: "blue"

    },

    subTextStyle: {
        fontSize: 14
    }
})

export default ComponentScreen