// App.js
import React from 'react';
import RegisterPage from './src/pages/RegisterPage';
import Login from './src/pages/Login';

import TestingView from './src/pages/testing.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name = "RegisterPage" component={RegisterPage}/>
      <Stack.Screen name = "Login" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
