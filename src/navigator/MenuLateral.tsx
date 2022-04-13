
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator()

import React from 'react';
import { View } from 'react-native';
import { StackNavigator } from './StackNavigator';

const MenuLateral = () => {
    return (
        <View>
            <Drawer.Navigator>
                <Drawer.Screen name="StackNavigator" component={StackNavigator} />
            </Drawer.Navigator>
        </View>
    );
};

export default MenuLateral;
