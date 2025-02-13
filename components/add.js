import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const Add = ({submitHandler}) => {
    const [text, setText] = useState('')

    const changeHandler = (val) => {
        setText(val)
    }
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='new todo...'
        onChangeText={changeHandler}
      />

      <Button title='Add Todo' color='coral' onPress={() => submitHandler(text)}/>
    </View>
  )
}

export default Add

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})