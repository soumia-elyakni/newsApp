import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Ionic  from 'react-native-vector-icons/Ionicons';


import LoadScreen from './src/LoadScreen';
import NewsScreen from './src/NewsScreen';
import OneNewScreen from './src/OneNewScreen';
import FavorisNews from './src/FavorisNews';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => (
  <Tab.Navigator screenOptions={({route})=>({
    tabBarIcon: ({focused, size, colour}) => {
      let iconeName;
      if(route.name=== "News"){
        iconeName = focused? "ios-home"  : "ios-home-outline";
      } else if(route.name === "favoris"){
        iconeName = focused? "heart"  : "heart-outline";
      }

      return <Ionic name={iconeName} size={size} color={colour} />
    }
  }) }>
    <Tab.Screen name="News" component={NewsScreen} options={{ headerShown: false }} />
    <Tab.Screen name="favoris" component={FavorisNews} options={{ headerShown: false }} />
  </Tab.Navigator>
)

const App = () => {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Load" component={LoadScreen} options={{ headerShown: false }} />
        <Stack.Screen name="News" component={TabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="TheNew" component={OneNewScreen} options={{ headerShown: false }} />      
      </Stack.Navigator>

      

    </NavigationContainer>
  );
};

export default App;