import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import Items from './components/items';
import Add from './components/add';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play on the switch', key: '3'}
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        {text: text, key: Math.random().toString()},
        ...prevTodos
      ];
    });
  }

  return (
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    padding: 40,
  },
  lists: {
    marginTop: 80,
  }
});
