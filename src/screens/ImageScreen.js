import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from './Components/ImageDetail';


const ImageScreen = () => {
    return <View>
   <ImageDetail 
   title="Beach- " 
   imageSource={require('../../assets/beach.jpg')}
   imageScore={20}
   />

   <ImageDetail 
   title="Forest- " 
   imageSource={require('../../assets/forest.jpg')}
   imageScore={12}
   />

   <ImageDetail 
   title="Mountain- "
   imageSource={require('../../assets/mountain.jpg')}
   imageScore={100}
   />
    </View>
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 36
    }
    
});


export default ImageScreen