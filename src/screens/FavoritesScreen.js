import React from 'react';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import { StyleSheet, View } from 'react-native';
import DefaultText from '../components/DefaltText';


const FavroritesScreen = props => {
    React.useLayoutEffect(() => {
        props.navigation.setOptions({
            headerLeft:() =>(<HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item title="Menu" iconName="ios-menu" onPress={()=>
               props.navigation.toggleDrawer()} />
            </HeaderButtons>)
        });
    }, [props.navigation, props.route]);

    const favMeals=useSelector(state => state.meals.favoriteMeals);
if(favMeals.length==0||!favMeals){
    return <View style={styles.content}>
        <DefaultText>No favorite meals found. Start adding some!</DefaultText>
    </View>
}

    return <MealList listData={favMeals} navigation={props.navigation}/>
};

const styles=StyleSheet.create({
    content:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default FavroritesScreen;