import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CateogryGridTile from '../components/CateogryGridTile';




const CategoriesScreen = props => {
    const renderGridItem = itemData => {
        return <CateogryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onSelect={() => props.navigation.navigate('CategoryMeals', {
                id: itemData.item.id
            })}
        />
    }

    return (
        <View>
            <FlatList
                keyExtractor={(item) => item.id}
                data={CATEGORIES}
                renderItem={renderGridItem}
                numColumns={2}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,

    }
});

export default CategoriesScreen;