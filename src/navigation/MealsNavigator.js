import 'react-native-gesture-handler';
import React from 'react';
import { Button, View } from 'react-native';
import Colors from '../constants/Colors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';


const Stack = createStackNavigator();

const MealsNavigator = () => {
  return <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primaryColor,
        },
        headerTitleAlign: 'center',
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen name="Categories" component={CategoriesScreen} options={{ headerTitle: 'Meal Categories' }} />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
};

export default MealsNavigator;