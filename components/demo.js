import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const Demo = () => {

  const [name, setName] = useState('Bolu')
  const [person, setPerson] = useState({name: 'Joan', age: '23'})
  const [userName, setUserName] = useState('')
  const [userAge, setUserAge] = useState('')
  const [peopleArr, setPeopleArr] = useState([
    {name: 'bolu', id: '1'},
    {name: 'Sola', id: '2'},
    {name: 'Tunde', id: '3'},
    {name: 'Ike', id: '4'},
    {name: 'bolu', id: '5'},
    {name: 'bolu', id: '6'},
    {name: 'bolu', id: '7'},
    {name: 'bolu', id: '8'},
  ])

  const clickHandler = () => {
    setName('Matt')
    setPerson({ name: 'Marvel', age: '24' })
  }

  // a function to remove the clicked box
  const touchHandler = (id) => {
    return(
      setPeopleArr((prev) => {
        return prev.filter(person => person.id != id)
      })
    )
  }

  return (
<View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello, {name}</Text>
      </View>
      <Text style={styles.boldText}>Hello, {person.name}, i am {person.age} years old</Text>
      <View style={styles.btnContainer}>
        <Button title='Update Name' onPress={clickHandler}/>
      </View>
      <StatusBar style="auto" />

      {/* working with input */}
      <View>
        <Text>My name is {userName} i am {userAge} yr/old</Text>
        <TextInput 
          style={styles.input}
          placeholder='What is your Name?'
          onChangeText={(value) => setUserName(value)}
        />
        {/* Add the 'multiline' prop for multiple line input */}
        <TextInput 
          keyboardType='numeric'
          style={styles.input}
          placeholder='What is your Age?'
          onChangeText={(value) => setUserAge(value)}
        />
      </View>
      {/* rendering list, i could have used 'ScrollView' if i was using map function on an arrray */}
      <FlatList
        numColumns={2}
        keyExtractor={items => items.id}
        data={peopleArr}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=> touchHandler(item.id)}>
              <Text style={styles.list}>{item.name}</Text>
            </TouchableOpacity>
          )
          }
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d9488',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'yellow',
    padding: 20,
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold'
  },
  btnContainer: {
    width: 140,
    backgroundColor: 'gray'
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 9,
    width: 200

  },
  list: {
    padding: 8,
    backgroundColor: 'yellow',
    borderWidth: 2,
    marginHorizontal: 20,
    marginVertical: 20

  }
});

export default Demo