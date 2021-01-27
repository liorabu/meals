import 'react-native-gesture-handler';
import React from 'react';
import Colors from '../constants/Colors';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Ionicons from 'react-native-vector-icons/Ionicons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';


const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MealsNavigator = () => {
  return (
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
 )
};

const MealsFavTabNavigator =()=>{
  return <NavigationContainer>
       <Tab.Navigator
      initialRouteName="Meals"
      activeColor={Colors.accentColor}
      barStyle={{ backgroundColor: 'white' }}
      shifting={true}
    >
      <Tab.Screen 
      name="Meals" 
      component={MealsNavigator} 
      options={{
        tabBarLabel: 'Meals',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="silverware-fork-knife" color={color} size={26} />
        ),
      }}
      />
      <Tab.Screen 
      name="Favorites" 
      component={FavoritesScreen} 
      options={{ 
        tabBarLabel:'Favorites!' ,
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="star" color={color} size={26} />
        ),
        }}/>
    </Tab.Navigator>
  </NavigationContainer>
}

export default MealsFavTabNavigator;