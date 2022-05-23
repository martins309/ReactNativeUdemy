import React from 'react' 
import { Text, StyleSheet, View, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        {name: "Friend 1", age: "3000"},
        {name: "Friend 2", age: "50"},
        {name: "Friend 3", age: "100"},
        {name: "Friend 4", age: "40"},
        {name: "Friend 5", age: "21"}
    ]
    return (
     <View>
         <Text>This is the Flatlist</Text>
         <FlatList 
         keyExtractor={friend => friend.name}
         data={friends}
         renderItem={({ item }) => {
             return (
              <Text>{item.name} - {item.age}</Text>
             )
         }}
         />
     </View>
        
    )
}

export default ListScreen