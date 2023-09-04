import React, {useState} from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

const AddTodo = ({ submitHandler }) => {

  const [text, setText] = useState('')

  // const textChange = ()
  return (
    <View>
      <TextInput
        placeholder='add todo'
        style={Styles.input}
        onChangeText={(e) => setText(e)}
      />
      <Button title='add todo..' color='coral' onPress={() => submitHandler(text)}/>
    </View>

  )
}

const Styles = StyleSheet.create({
  input: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 10
  }
})

export default AddTodo