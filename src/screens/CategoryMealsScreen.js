import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList'
import DefaultText from '../components/DefaltText';

const CategoryMealsScreen = props => {

    const catId = props.route.params.id;
    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerTitle: selectedCategory.title
        });
    }, [props.navigation, props.route]);

    const displayedMeals = availableMeals.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );

    if(displayedMeals.length==0){
        return <View style={styles.content}>
            <DefaultText>No meals found, maybe check your filters?</DefaultText>
        </View>
    }


    return <MealList listData={displayedMeals} navigation={props.navigation} />
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CategoryMealsScreen;