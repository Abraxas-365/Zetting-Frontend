import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import PlusButton from '../../../components/Buttons/PlusButton';
import { RootStackParamListProject } from '../../../navigation/stack/ProjectStack';
import { styleBackground, stylesText, styleWrappers } from '../../../themes/styles';

const ScreenProjectHome = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamListProject>>();
    return (
        <SafeAreaView style={styleBackground.darkBackground}>
            <View style={styleWrappers.frameWrapper}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={[stylesText.titleLight, { flex: 1 }]}>PROJECT</Text>
                    <PlusButton
                        onPress={() => navigation.navigate('NewProjectStack')}
                    />
                </View>

            </View>
        </SafeAreaView>
    );
};

export default ScreenProjectHome;
