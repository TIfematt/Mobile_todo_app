import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState } from 'react';
import Demo from './components/Demo';
import Header from './components/header';
import TodoItems from './components/todoItems';
import AddTodo from './components/addTodo';


export default function App() {

  const [todos, setTodos] = useState([
    {text: 'First Todo', key: 1},
    {text: 'Second Todo', key: 2},
    {text: 'Third Todo', key: 3},
    {text: 'Fourth Todo', key: 4},
  ])

  const pressHandler = (key) => {
    setTodos((prev) => {
      return (
        prev.filter(todo => todo.key != key)
      )
    })
    
  }

  const submitHandler = (text) => {

    if(text.length < 4) {
      Alert.alert('OOPPS', 'Todo must be more than 3 chars', [
        {text: 'Got It!', onPress:() => console.log('done')}
      ])
    }

    setTodos((prev) => {
      return [
        {text: text, key: Math.random().toString()},
        ...todos
      ]
    })
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
      {/* <Demo/> */}
        <View>
          <Header />
        </View>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.todoList}>
          <FlatList 
            data={todos}
            renderItem={({ item }) => (
              <TodoItems item={item} pressHandler={pressHandler}/>
            )}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  todoList: {
    marginTop: 40,
    marginLeft: 35,
    flex: 1
    
  }
});
