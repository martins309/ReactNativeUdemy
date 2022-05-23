import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import ImageDetail from './Components/ImageDetail'

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" />
            <ImageDetail title="bloodClot"/>
            <ImageDetail title="beefpatty"/>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default ImageScreen