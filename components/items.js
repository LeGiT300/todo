import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React from 'react'

const Items = ({item, pressHandler}) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style = {styles.item}>
        <Text>{item.text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Items

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    }
})