import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import CustomButton from '../../../components/Buttons/CustomButton';
import PlusButton from '../../../components/Buttons/PlusButton';
import Switch2Buttons from '../../../functionalities/projects/containers/buttons/Switch2Buttons';
import ProjectsList from '../../../functionalities/projects/containers/cards/ProjectsList/ProjectsList';
import { RootStackParamListProject } from '../../../navigation/stack/ProjectStack';
import { COLORS } from '../../../themes/colors/ZettingColors';
import { styleBackground, stylesText, styleWrappers } from '../../../themes/styles';

const ScreenProjectHome = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamListProject>>();

    return (
        <SafeAreaView style={styleBackground.darkBackground}>
            <View style={styleWrappers.frameWrapper}>
                {/*Header*/}
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[stylesText.titleLight, { flex: 1 }]}>PROJECT</Text>
                    <PlusButton
                        onPress={() => navigation.navigate('NewProjectStack')}
                    />
                </View>

                {/*Body*/}
                <ProjectsList style={{ height: "85%", marginTop: '7%' }} />

            </View>
        </SafeAreaView>
    );

};

export default ScreenProjectHome;
