import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import I18n from 'i18n-js';
import React from 'react';
import { ScrollView, View } from 'react-native';
import JobsButton from '../../../../../components/Buttons/JobsButton';
import { RootStackParamListProject } from '../../../../../navigation/stack/ProjectStack';

const JobButtons = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamListProject>>();
    return (
        <ScrollView>
            {/*UNO*/}
            <View style={{ flexDirection: 'row' }}>
                <JobsButton
                    onPress={() => { navigation.navigate('SearchActors') }}
                    text={I18n.t('Actor.ACTORS')}
                    styles={{ marginRight: '7%' }}
                    uri='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT27V_NOn2abqu4R-oIWD7hpOJB7dH95ArFOVYtO6tLMSwvoBnkRYoZwjoQ831IOHSjWDQ&usqp=CAU' />

                <JobsButton
                    uri='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT27V_NOn2abqu4R-oIWD7hpOJB7dH95ArFOVYtO6tLMSwvoBnkRYoZwjoQ831IOHSjWDQ&usqp=CAU' />
            </View>

            {/*DOS*/}
            <View style={{ flexDirection: 'row', marginTop: '7%' }}>
                <JobsButton
                    styles={{ marginRight: '7%' }}
                    uri='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT27V_NOn2abqu4R-oIWD7hpOJB7dH95ArFOVYtO6tLMSwvoBnkRYoZwjoQ831IOHSjWDQ&usqp=CAU' />

                <JobsButton
                    uri='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT27V_NOn2abqu4R-oIWD7hpOJB7dH95ArFOVYtO6tLMSwvoBnkRYoZwjoQ831IOHSjWDQ&usqp=CAU' />
            </View>

            {/*TRES*/}
            <View style={{ flexDirection: 'row', marginTop: '7%' }}>
                <JobsButton
                    styles={{ marginRight: '7%' }}
                    uri='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT27V_NOn2abqu4R-oIWD7hpOJB7dH95ArFOVYtO6tLMSwvoBnkRYoZwjoQ831IOHSjWDQ&usqp=CAU' />

                <JobsButton
                    uri='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT27V_NOn2abqu4R-oIWD7hpOJB7dH95ArFOVYtO6tLMSwvoBnkRYoZwjoQ831IOHSjWDQ&usqp=CAU' />
            </View>

            {/*CUATRO*/}
            <View style={{ flexDirection: 'row', marginTop: '7%' }}>
                <JobsButton
                    styles={{ marginRight: '7%' }}
                    uri='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT27V_NOn2abqu4R-oIWD7hpOJB7dH95ArFOVYtO6tLMSwvoBnkRYoZwjoQ831IOHSjWDQ&usqp=CAU' />

                <JobsButton
                    uri='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT27V_NOn2abqu4R-oIWD7hpOJB7dH95ArFOVYtO6tLMSwvoBnkRYoZwjoQ831IOHSjWDQ&usqp=CAU' />
            </View>

            {/*CINCO*/}
            <View style={{ flexDirection: 'row', marginTop: '7%' }}>
                <JobsButton
                    styles={{ marginRight: '7%' }}
                    uri='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT27V_NOn2abqu4R-oIWD7hpOJB7dH95ArFOVYtO6tLMSwvoBnkRYoZwjoQ831IOHSjWDQ&usqp=CAU' />

                <JobsButton
                    uri='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT27V_NOn2abqu4R-oIWD7hpOJB7dH95ArFOVYtO6tLMSwvoBnkRYoZwjoQ831IOHSjWDQ&usqp=CAU' />
            </View>

            {/*SEIS*/}
            <View style={{ flexDirection: 'row', marginTop: '7%' }}>
                <JobsButton
                    styles={{ marginRight: '7%' }}
                    uri='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT27V_NOn2abqu4R-oIWD7hpOJB7dH95ArFOVYtO6tLMSwvoBnkRYoZwjoQ831IOHSjWDQ&usqp=CAU' />

                <JobsButton
                    uri='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT27V_NOn2abqu4R-oIWD7hpOJB7dH95ArFOVYtO6tLMSwvoBnkRYoZwjoQ831IOHSjWDQ&usqp=CAU' />
            </View>


        </ScrollView>
    );
};

export default JobButtons;
