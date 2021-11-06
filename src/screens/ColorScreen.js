import React from 'react';
import { View, Button, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';

const ColorScreen = () => {
    //you dont want to make any changes to a state variable
    //whatsoever.. hence the use of the spread operator 
    //on line 15
    const [colors, setColors] = useState([]);
    console.log(colors);
    return (
        <View>
            <Button 
            onPress={() => {
                setColors([...colors, randomRgb()])

            }}
            title="Add a color"/>
           <FlatList 
           keyExtractor={(item) => item}
           data={colors}
           renderItem={({ item }) =>{
               return <View style={{ height: 100, width: 100, backgroundColor: item }}/>


           }}
           />
        </View>
    );

};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    //this is a template literal
    return `rgb(${red}, ${green}, ${blue})`;
}


const styles = StyleSheet.create({});

export default ColorScreen;