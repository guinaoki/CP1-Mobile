import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Home from './screens/Home/index';
import Game from './screens/Game/Table/Cell/index';

const MainNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTransparent: true,
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Arial', 
            fontSize: 18, 
          },
          headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 10 }}>
              <Ionicons name="home" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Game"
        component={Game}
        options={{
          headerTransparent: true,
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Arial', 
            fontSize: 18, 
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default MainNavigator;
