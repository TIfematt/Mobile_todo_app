import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

const TodoItems = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.todoList}>
        <MaterialIcons name='delete' size={18} color='#333' />
        <Text>{item.text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todoList: {
    marginVertical: 10,
    width: 300,
    borderStyle: 'dashed',
    borderWidth: 2,
    padding: 20,
    flexDirection: 'row',
    gap: 10
  }

})

export default TodoItems