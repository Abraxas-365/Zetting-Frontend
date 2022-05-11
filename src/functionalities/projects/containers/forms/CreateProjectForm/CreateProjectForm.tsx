import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import I18n from 'i18n-js';
import React, { useState } from 'react';
import { Button, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { color, StyleProps } from 'react-native-reanimated';
import CustomButton from '../../../../../components/Buttons/CustomButton';
import CustomMultipleLineStackeHold from '../../../../../components/Stakeholders/CustomMultipleLineStackeHold/CustomMultipleLineStackeHold';
import CustomStakeHold from '../../../../../components/Stakeholders/CustomStakeHold';
import DateStakeHold from '../../../../../components/Stakeholders/DateStakeHold/DateStakeHold';
import { RootStackParamListProject } from '../../../../../navigation/stack/ProjectStack';
import { COLORS } from '../../../../../themes/colors/ZettingColors';
import { useForm } from '../../../../share/hooks/useForm';
import { createProject } from '../../../apiCalls/createProject';
import { Project } from '../../../models';
import ColorPickerContainer from '../../componentsExtras/ColorPicker';
import { styles } from './style'

type Props = {
    styleWrapper?: StyleProp<ViewStyle>
}

const CreateProjectForm = ({
    styleWrapper
}: Props) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamListProject>>();
    const [orange, onOrange] = useState(true);
    const [yellow, onYellow] = useState(false);
    const [green, onGreen] = useState(false);
    const [blue, onBlue] = useState(false);
    const [purple, onPurple] = useState(false);
    const [color, setColor] = useState(COLORS.orange);
    const [date, setDate] = useState(new Date())
    const { ProjectName, ProjectDescription, onChange } = useForm({
        ProjectName: '',
        ProjectDescription: '',

    })
    var newProject: Project = {
        name: ProjectName,
        color: color,
        description: ProjectDescription

    }


    return (
        <View style={[styles.wrapper, styleWrapper]} >
            {/*ProjectName*/}
            <CustomStakeHold
                title={I18n.t("Project.Name")}
                boxWrapper={styles.textInputWrapper}
                textInputStyle={styles.textInput}
                textInputProps={{
                    onChangeText: (value) => { onChange(value, 'ProjectName') },
                    placeholderTextColor: COLORS.white,
                }} />

            {/*ProjectDescription*/}
            <CustomMultipleLineStackeHold
                title={I18n.t("Project.Description")}
                componentWrapper={{ marginTop: '10%' }}
                boxWrapper={[{ marginTop: '5%' }, styles.textInputWrapper]}
                textInputProps={{
                    onChangeText: (value) => { onChange(value, 'ProjectDescription') },
                    placeholderTextColor: COLORS.white,
                    maxLength: 800
                }} >

                <Text style={styles.lengthInput}>{ProjectDescription.length}/800</Text>
            </CustomMultipleLineStackeHold >

            {/*Date*/}
            <DateStakeHold date={date} setDate={setDate} componentWrapper={{ marginTop: '10%' }} />

            {/*PickColor*/}
            <ColorPickerContainer
                style={{ marginTop: '10%' }}
                text='Pick Color'
                color1={orange}
                color2={yellow}
                color3={green}
                color4={blue}
                color5={purple}
                onColor1={onOrange}
                onColor2={onYellow}
                onColor3={onGreen}
                onColor4={onBlue}
                onColor5={onPurple}
                setColor={setColor}

            />
            {/*submit*/}
            <CustomButton
                onPress={async () => {
                    try {
                        await createProject(newProject)
                        navigation.navigate('BuidTeamScreen')
                    } catch (e) {
                        console.error(e)
                    }
                }}
                text={I18n.t("Project.Create")}
                styleContainer={styles.submitButton}
                styleText={styles.submitButtonText}


            />


        </View >
    );
};

export default CreateProjectForm;

export const styless = StyleSheet.create({

})
