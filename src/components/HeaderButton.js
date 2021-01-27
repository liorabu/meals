import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import Icon from 'react-native-vector-icons/AntDesign';
import Colors from '../constants/Colors';
import { View } from 'react-native';

const CustomHeaderButton =props=>{
    return <HeaderButton IconComponent={Icon} iconSize={23} color={Colors.primary} {...props} />;
}

export default CustomHeaderButton;