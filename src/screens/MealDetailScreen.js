import React from 'react';
import { ScrollView, View, Text, Button, Image, StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { Colors } from '../constants/Colors';
import DefaultText from '../components/DefaltText';

const ListItems = props=>{
    return <View style={styles.listItem}>
        <DefaultText>{props.children}</DefaultText>
    </View>
}

const MealDetailScreen = props => {

    const mealId = props.route.params.mealId;
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerTitle: selectedMeal.title,
            headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item title="Favorite" iconName="star" onPress={() =>
                    console.log("abc")} />
            </HeaderButtons>)
        });
    }, [props.navigation, props.route]);


    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient =>
                <ListItems key={ingredient}>{ingredient}</ListItems>
            )}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map(step =>
                <ListItems key={step}>{step}</ListItems>
            )}
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    title: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 22,
        textAlign: 'center'
    },
    listItem:{
        marginVertical:10,
        marginHorizontal:20,
        borderColor:'#ccc',
        borderWidth:1,
        padding:10
    }
});

export default MealDetailScreen;