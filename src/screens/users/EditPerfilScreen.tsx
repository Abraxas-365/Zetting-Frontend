import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import EditPerfilForm from '../../components/forms/EditPerfilForm';
import { RootStackParamList } from '../../navigator/StackNavigator';
import { styleBackgrounds } from '../../themes/Backgrounds';
import { styleTitles } from '../../themes/Titles';
import { styleWrappers } from '../../themes/Wrappers';

interface Props extends StackScreenProps<RootStackParamList, 'EditPerfilScreen'> { }
const EditPerfilScreen = ({ route }: Props) => {
    return (
        <SafeAreaView style={styleBackgrounds.fondoDark}>
            <View style={{ ...styleWrappers.wrapperTitles }}>
                <Text style={{ ...styleTitles.titleTextLight, alignSelf: 'center' }}>EDIT</Text>
            </View>
            <EditPerfilForm user={route.params.user} />
        </SafeAreaView>
    );
};

export default EditPerfilScreen;
