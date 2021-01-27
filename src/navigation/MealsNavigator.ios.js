import 'react-native-gesture-handler';
import React from 'react';
import Colors from '../constants/Colors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Ionicons from 'react-native-vector-icons/Ionicons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTitleAlign: 'center',
  headerTintColor: 'white',
}

const MealsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={defaultStackNavOptions}
    >
      <Stack.Screen name="Categories" component={CategoriesScreen} options={{ headerTitle: 'Meal Categories' }} />
      <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  )
};

const MealsFavTabNavigator = () => {
  return <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Meals') {
            iconName = focused
              ? 'ios-restaurant'
              : 'ios-restaurant-outline';
          } else if (route.name === 'Favorites') {
            iconName = focused
              ? 'ios-star'
              : 'ios-star-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: Colors.accentColor,
        inactiveTintColor: Colors.accentColor,
      }}
    >
      <Tab.Screen
        name="Meals"
        component={MealsNavigator}
      />
      <Tab.Screen name="Favorites" component={FavNavigator} options={{ tabBarLabel: 'Favorites!' }} />
    </Tab.Navigator>
  </NavigationContainer>
}

const FavNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={defaultStackNavOptions}
    >
      <Stack.Screen name="Favorites" component={FavoritesScreen} options={{ headerTitle: 'Your Favorites' }} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />

    </Stack.Navigator>
  )
};

export default MealsFavTabNavigator;