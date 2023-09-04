import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>To-Do App</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0d9488',
    height: 55,
    marginTop: 25
  },
  headerText: {
    fontSize: 35,
    fontWeight: 'bold'
  }
})

export default Header