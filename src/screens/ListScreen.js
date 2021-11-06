import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'friend #1', age: '25'},
        {name: 'friend #2', age: '30'},
        {name: 'friend #3', age: '31'},
        {name: 'friend #4', age: '89'},
        {name: 'friend #5', age: '59'},
        {name: 'friend #6', age: '35'},
        {name: 'friend #7', age: '49'}
       
    ]

    return (
    <FlatList 
    keyExtractor={(friend) => friend.age}
    data={friends} 
    renderItem={({ item }) => {
       return <Text 
       style={styles.textStyle}>
       {item.name} - Age {item.age}</Text> 
    }}
     />
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }

})

export default ListScreen;