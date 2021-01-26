import React from 'react';
import { View, Text,Button, StyleSheet } from 'react-native';
import {CATEGORIES} from '../data/dummy-data';

const CategoryMealsScreen = props => {
    const catId=props.route.params.id;
    const selectedCategory=CATEGORIES.find(cat=>cat.id===catId);

    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerTitle: selectedCategory.title
        });
    }, [props.navigation,props.route]);

  
    console.log(selectedCategory)
    return (
        <View style={styles.screen}>
            <Text>The CategoryMeals Screen!</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to Datails" onPress={()=>props.navigation.navigate("MealDetail")}/>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;