import React from 'react'
import { View, Text, StyleSheet, FlatList} from 'react-native'

//whenever we want to build a list in react native we use the flat list element
//The starting point is always an array of something
//Array of objects, strings, and etc..
//normally we would use the map function but in rn we have the flatlist to display lists in a performant fasion
//element has an item:{name: "friend 1"}
//instead pull of the item property and destructure item 
//add a key so that react native doesnt have to rebuild list when the component re renders

const ListScreen = () => {
    const friends = [
        {name: 'friend 1'},
        {name: 'friend 2'},
        {name: 'friend 3'},
        {name: 'friend 4'}
    ]
    return (
        <FlatList 
        keyExtractor={(friend) => friend.name}
        data={friends} 
        renderItem={({ item }) => {
            return<Text>{item.name}</Text>
        }}/>
    )
}

export default ListScreen