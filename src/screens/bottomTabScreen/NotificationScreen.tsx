

import React from 'react';
import { Button, FlatList, Image, SafeAreaView, Text, View } from 'react-native';
import { StyleSheet } from 'react-native'
import NotificationCard from '../../components/cards/NotificationCard';
import { useNotifications } from '../../hooks/useNotifications';
import { Notification } from '../../interfaces/appInterfaces';
import { styleBackgrounds } from '../../themes/Backgrounds';
import { styleTitles } from '../../themes/Titles';
import { styleWrappers } from '../../themes/Wrappers';


const NotificationScreen = () => {
    const { notifications } = useNotifications()
    return (
        <SafeAreaView style={styleBackgrounds.fondoDark}>

            <View style={styleWrappers.wrapperHorizontalGap}>
                <View style={{ ...styleWrappers.wrapperTitles }}>
                    <Text style={{ ...styleTitles.titleTextLight }}>NOTIFICATION</Text>
                </View>
                <Text style={{ ...styleText.notificationsNum }}>You have n notifications today</Text>
            </View>

            <FlatList contentContainerStyle={{ flexGrow: 1, top: '3%', ...styleWrappers.wrapperHorizontalGap }} data={notifications} renderItem={({ item }: any) => <NotificationCard notification={item} />} />
        </SafeAreaView>
    );
};

export default NotificationScreen;



export const styleText = StyleSheet.create({
    notificationsNum: {
        color: '#e5e1f6',
        fontSize: 15,
        marginTop: 15
    }

})
