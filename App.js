import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import AddTodos from './components/addTodos';
import Header from './components/header';
import TodoItem from './components/todoitem';

export default function App() {
  const [tasks, setTasks] = useState([
    // { text: 'First Task', key: '1' },
    // { text: 'Second Task', key: '2' },
    // { text: 'Third Task', key: '3' },
    // { text: 'Fourth Task', key: '4' }
  ])

  const [len, setLen] = useState(6);

  const pressHandler = (key) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.key != key)
    })
  }

  const submitHandler = (text) => {
    setTasks((prevTasks) => {
      setLen((prevLen) => {
        return prevLen + 1;
      })

      return [
        { text, key: (len).toString() },
        ...prevTasks
      ]
    })
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header></Header>
      <View style={styles.content}>
        {/* Form */}
        <AddTodos submitHandler={submitHandler}></AddTodos>
        <View style={styles.list}>
          {/* List */}
          <FlatList
            data={tasks}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler}></TodoItem>
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
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    padding: 40,
    flex: 1
  },
  list: {
    marginTop: 40,
    flex: 1
  }
});
