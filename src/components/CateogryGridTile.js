import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet ,Platform} from 'react-native';

const CateogryGridTile = props => {
    return <TouchableOpacity
        style={styles.gridItem}
        onPress={props.onSelect}
    >
        <View style={{...styles.container,...{backgroundColor:props.color}}}>
            <Text numberOfLines={2} style={styles.title}>{props.title}</Text>
        </View>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius:10,
        overflow:Platform.OS==='android'&& 'hidden',
        marginVertical:10,
        elevation:3,
    },
    container:{
        flex:1,
        alignItems:'flex-end',
        justifyContent:'flex-end',
        borderRadius:10,
        shadowColor:'black',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowRadius:10,
       padding:15
    },
    title:{
        fontFamily:'OpenSans-Bold',
        fontSize:22,
        textAlign:'right'
    }
});

export default CateogryGridTile;