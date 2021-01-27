/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { enableScreens } from 'react-native-screens';

import MealsNavigator from './src/navigation/MealsNavigator';

enableScreens();

export default function App() {
    return <SafeAreaProvider><MealsNavigator /></SafeAreaProvider>;
}