import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
  return (
    <View style = {styles.header}>
      <Text style = {styles.title}>My ToDos</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header: {
      height: 80,
      paddingTop: 38,
      backgroundColor: 'coral',
    },
    title: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    }
})