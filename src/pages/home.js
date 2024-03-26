import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { db } from '../firebase'; // Import Firestore instance
import TodoItem from /components/toDoList.js; // Import TodoItem component

const Home = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('todos').onSnapshot((snapshot) => {
      const newTodos = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTodos(newTodos);
    });

    return () => unsubscribe();
  }, []);

  const handleAddTodo = (newTodo) => {
    db.collection('todos').add({
      text: newTodo,
      completed: false,
    })
    .then((docRef) => {
      console.log('To-Do added with ID:', docRef.id);
    })
    .catch((error) => {
      console.error('Error adding to-do:', error);
    });
  };

  const handleDeleteTodo = (todoId) => {
    db.collection('todos').doc(todoId).delete()
      .then(() => {
        console.log('To-Do deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting to-do:', error);
      });
  };

  return (
    <View>
      <Text>My To-Do List</Text>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            handleDelete={() => handleDeleteTodo(item.id)} // Pass handleDeleteTodo
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <Button title="Add To-Do" onPress={() => navigation.navigate('AddTodo')} />
    </View>
  );
};

export default Home;
