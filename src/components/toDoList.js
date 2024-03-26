import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { db } from '../firebase'; // Import Firestore instance

const TodoItem = ({ todo, handleDelete }) => {
  const handleMarkComplete = async () => {
    try {
      await db.collection('todos').doc(todo.id).update({
        completed: !todo.completed, // Toggle 'completed' property
      });
    } catch (error) {
      console.error('Error marking to-do complete:', error);
    }
  };

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <TouchableOpacity onPress={handleMarkComplete}>
        <Text style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </Text>
      </TouchableOpacity>
      {handleDelete && ( // Conditionally render delete button if provided
        <TouchableOpacity onPress={() => handleDelete(todo.id)}>
          <Text style={{ color: 'red' }}>Delete</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TodoItem;
