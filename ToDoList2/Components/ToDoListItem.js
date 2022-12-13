import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
//import CircleDownCheck from '../assets/icons/expand_circle_down_FILL0_wght400_GRAD0_opsz48.png'
//import CircleDownCheck from '../assets/icons/expand_circle_down_FILL0_wght400_GRAD0_opsz48.png'
import { AntDesign } from '@expo/vector-icons';



const ToDoListItem = ({textValue, id, checked, onRemove, onToggle}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPressOut={onToggle(id)}>
        {checked ? (
        <View style={styles.circle} >
         {/* <AntDesign name="circledowno" size={30} color="#3143e8" /> */}
         <AntDesign name="circledown" size={30} color="black" />
        </View>
        ) : (
          <View style={styles.circle} />
        )}
      </TouchableOpacity>
      
      <Text
        style={[
          styles.text,
          checked ? styles.strikeText : styles.unstrikeText,
        ]}>
        {textValue}
      </Text>
      <View style={styles.buttons}>
      <TouchableOpacity style={styles.buttonContainer}>
        {/* <CircleDownCheck size={30} color="#3143e8" /> */}
            <Text style={styles.buttonText} onPress={onRemove(id)}>
             <AntDesign name="delete" size={30} color="#e33057" />
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    flex: 5,
    fontWeight: '500',
    fontSize: 18,
    marginVertical: 20,
    width: 100,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: 'blue',
    borderWidth: 2,
    marginRight: 20,
    marginLeft: 20,
  },
  completeCircle: {
    marginRight: 20,
    marginLeft: 20,
  },
  strikeText: {
    color: '#bbb',
    textDecorationLine: 'line-through',
  },
  unstrikeText: {
    color: '#29323c',
  },
  buttons: {
    flexDirection: 'row',
  },
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
});

export default ToDoListItem;