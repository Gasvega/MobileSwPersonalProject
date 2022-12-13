import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';
import ToDoListItem from './ToDoListItem';


const ToDoList = ({todos, onRemove, onToggle}) => {
    return (
      <ScrollView contentContainerStyle={styles.listContainer}>
        {todos && todos.map(todo => (
          <ToDoListItem
            key={todo.id}
            {...todo}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))}
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    listContainer: {
      alignItems: 'center',
    },
  });
  
  export default ToDoList;
  