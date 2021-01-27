import React from 'react';
import { StyleSheet } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList'

const CategoryMealsScreen = props => {

    const catId = props.route.params.id;
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerTitle: selectedCategory.title
        });
    }, [props.navigation, props.route]);

    const displayedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    
    return <MealList listData={displayedMeals} navigation={props.navigation}/>
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:15
    }
});

export default CategoryMealsScreen;