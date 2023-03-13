import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import des composants pour chaque route
import LoadScreen from './src/LoadScreen';
import NewsScreen from './src/NewsScreen';
import OneNewScreen from './src/OneNewScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Load" component={LoadScreen} />
        <Stack.Screen name="News" component={NewsScreen} />
        <Stack.Screen name="TheNew" component={OneNewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;