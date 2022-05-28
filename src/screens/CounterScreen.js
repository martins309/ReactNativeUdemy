import React, { useState } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

const CounterScreen = () => {
    const [counter, setCounter] = useState(0)
    return (
        
        <View>
            <Text>Current Count: {counter} </Text>
            <Button title="increase" onPress={() => setCounter(counter + 1)}/>
            <Button title="decrease" onPress={() => setCounter(counter - 1)}/>
        </View>
    )
}

const style = StyleSheet.create({})

export default CounterScreen