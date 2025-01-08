import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View, Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './components/header';
import Items from './components/items';
import Add from './components/add';


export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy coff.ee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play on the switch', key: '3'}
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {
    
    if (text.length > 3){
      setTodos((prevTodos) => {
        return [
          {text: text, key: Math.random().toString()},
          ...prevTodos
        ];
      });
    } 
    else{
      Alert.alert('OOPS!!', 'ToDos must be over three characters long!', [
        {text: 'Understood', onPress:() => {console.log('Alert closed')}}
      ])
    }
    
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/**Header */}
        <Header/>
        <View style = {styles.content}>
          {/**ToDo Form */}
          <Add submitHandler = {submitHandler}/>
          <View stle = {styles.lists}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <Items item = {item} pressHandler={pressHandler}/>
              )}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    padding: 40,
    flex: 1,
  },
  lists: {
    marginTop: 80,
    flex: 1
  }
});
