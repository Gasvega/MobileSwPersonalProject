
import { StyleSheet, Text, View, TextInput, ScrollView, StatusBar } from 'react-native';
import { useState } from 'react';

import ToDoInsert from './Components/ToDoInsert';
import ToDoList from './Components/ToDoList';

// const [todos, setTodos] = useState([]);
 
// const addTodo = text => {
//   setTodos([
//     ...todos,
//     {id: Math.random().toString(), textValue: text, checked: false},
//   ]);
// };

// <ToDoInsert onAddTodo={addTodo} />

export default function App() {
  const [todos, setTodos] = useState([]);
  //const [todos, setTodos] = useState([]);

  const addTodo = text => {
    setTodos([
      ...todos,
      {id: Math.random().toString(), textValue: text, checked: false},
    ]);
  };

  const onRemove = id => e => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const onToggle = id => e => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo,
      ),
    );
  };

  //<ToDoInsert onAddTodo={addTodo} />
  //<TodoList todos={todos} />

  
  return (
    
    <View style={styles.container}>
      {/* todos: {id: Number, textValue: string, checked: boolean } */}
      <Text style={styles.appTitle}>ToDoList</Text>
      <View style={styles.card}>
      <ToDoInsert onAddTodo={addTodo} />
        <ToDoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </View>
      <StatusBar style="auto" />
    </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3143e8',
  },
  appTitle: {
    color: '#fff',
    fontSize: 36,
    marginTop: 30,
    marginBottom: 30,
    fontWeight: '300',
    textAlign: 'center',
    backgroundColor: '#3143e8',
  },
  card: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 10, // to provide rounded corners
    borderTopRightRadius: 10, // to provide rounded corners
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    padding: 20,
    borderBottomColor: '#bbb',
    borderBottomWidth: 1,
    fontSize: 24,
    marginLeft: 20,
  },
});