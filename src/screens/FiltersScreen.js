import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

const FilterSwitch = props => {
    return <View style={styles.filteContainer}>
        <Text>{props.label}</Text>
        <Switch
            trackColor={{
                true: Colors.primaryColor,
                false: '#C8C8C8'
            }}
            thumbColor={Colors.primaryColor}
            value={props.state}
            onValueChange={props.onChange} />
    </View>
}

const FiltersScreen = props => {
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerLeft: () => (<HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item title="Menu" iconName="ios-menu" onPress={() =>
                    props.navigation.toggleDrawer()} />
            </HeaderButtons>),
            headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item title="Save" iconName="save" onPress={()=>
                    saveFilters()
                

                } />
            </HeaderButtons>)
        });
    }, [props.navigation,isGlutenFree,isLactoseFree,isVegan,isVegetarian]);

    const saveFilters = () => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        };
        console.log(appliedFilters);
    };

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch
                label="Gluten-free"
                state={isGlutenFree}
                onChange={newValue => setIsGlutenFree(newValue)}
            />
            <FilterSwitch
                label="Lactose-free"
                state={isLactoseFree}
                onChange={newValue => setIsLactoseFree(newValue)}
            />
            <FilterSwitch
                label="Vegan"
                state={isVegan}
                onChange={newValue => setIsVegan(newValue)}
            />
            <FilterSwitch
                label="Vegetarian"
                state={isVegetarian}
                onChange={newValue => setIsVegetarian(newValue)}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    filteContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    },
    title: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 22,
        margin: 10,
        textAlign: 'center'
    }
});

export default FiltersScreen;