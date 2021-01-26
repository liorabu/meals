import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

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

    const renderMealItem = itemData => {
        return <MealItem
            title={itemData.item.title}
            duration={itemData.item.duration}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}
            imageUrl={itemData.item.imageUrl}
            onSelectMeal={() => {
                props.navigation.navigate('MealDetail',{
                    mealId:itemData.item.id
                }) 
            }}
        />
    }
    return (
        <View style={styles.screen}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
                style={{ width: '100%' }}
            />
        </View>
    )
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