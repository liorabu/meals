/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import { enableScreens } from 'react-native-screens';
import mealsReducer from './src/store/reducers/meals';

import MealsNavigator from './src/navigation/MealsNavigator';

enableScreens();

const rootReducer = combineReducers({
    meals: mealsReducer
});
const store = createStore(rootReducer)

export default function App() {
    return (
    <Provider store={store}>
        <SafeAreaProvider>
            <MealsNavigator />
        </SafeAreaProvider>
    </Provider> 
    )
}