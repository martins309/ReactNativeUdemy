import React from 'react'
import { Text, StyleSheet, View} from 'react-native'

const ColorScreen = () => {
    const [color, setColor] = useState('')
    return (
        <View>
            <Button title="colorTing" onPress={() => setColor(color)}/>
            <Text> Fuck me sideways</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ColorScreen