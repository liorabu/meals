import React from 'react';
import { View, Text,Button, StyleSheet } from 'react-native';
import {MEALS} from '../data/dummy-data'; 
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const MealDetailScreen = props => {

    const mealId = props.route.params.mealId;
    const selectedMeal=MEALS.find(meal=>meal.id===mealId);
    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerTitle: selectedMeal.title,
            headerRight:() =>(<HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Favorite" iconName="star" onPress={()=>
                console.log("abc")} />
            </HeaderButtons>)
        });
    }, [props.navigation, props.route]);


    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button title="Go Back to Categories"
            onPress={()=>{
                props.navigation.popToTop();
            }}/>
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

export default MealDetailScreen;