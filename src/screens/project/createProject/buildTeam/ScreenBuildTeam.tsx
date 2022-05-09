import I18n from 'i18n-js';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../../../components/Buttons/CustomButton';
import JobButtons from '../../../../functionalities/projects/containers/buttons/JobButons/JobButtons';
import { styleBackground, stylesText, styleWrappers } from '../../../../themes/styles';
import { styles } from './style'

const ScreenBuildTeam = () => {
    return (
        <View style={{ ...styleBackground.orangeBackground, flex: 2 }}>

            {/*Header*/}
            <SafeAreaView style={[styleWrappers.frameWrapper, { height: '19%' }]}>
                <Text style={[styles.title, stylesText.titleLight]}>{I18n.t("Project.Build")}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.sloganText}>{I18n.t("Project.Slogan")}</Text>
                    <CustomButton text={I18n.t("Project.Skip")} styleContainer={styles.skipButton} styleText={styles.skipButtonText} />
                </View>
            </SafeAreaView>

            {/*Body*/}
            <View style={styleBackground.darkBackground}>
                <View style={[styleWrappers.frameWrapper, { marginTop: '5%' }]}>
                    <JobButtons />

                </View>
            </View>
        </View>
    );
};

export default ScreenBuildTeam;

