import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import CreateProjectForm from '../../components/forms/CreateProyectForm';
import { styleBackgrounds } from '../../themes/Backgrounds';
import { styleTitles } from '../../themes/Titles';
import { styleWrappers } from '../../themes/Wrappers';

const CreateProyectScreen = () => {
    return (
        <SafeAreaView style={styleBackgrounds.fondoDark}>

            <View style={styleWrappers.wrapperTitles}>
                <Text style={{ ...styleTitles.titleTextLight, alignSelf: 'center' }}>NEW PROYECT</Text>
            </View>
            <CreateProjectForm />
        </SafeAreaView>
    );
};

export default CreateProyectScreen;
