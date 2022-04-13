import React, { useContext, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Entypo } from '@expo/vector-icons';
import { Project } from '../../interfaces/appInterfaces';
import { useForm } from '../../hooks/useForm';
import { AuthContext } from '../../context/AuthContext';
import { RootStackParamList } from '../../navigator/StackNavigator';
import { styleWrappers } from '../../themes/Wrappers';
import StakeHolders from '../stakeHolds/StakeHolders';
import CustomAdjustableBotton from '../buttons/CustomAdjustableButton';
import CustomCenterBotton from '../buttons/CustomCenterBotton';
import { useCreteProject } from '../../hooks/useCreateProject';


const CreateProjectForm = () => {

    const [color, setColor] = useState('#FF7F39');

    const { name, description, collaboration, onChange } = useForm({

        name: '',
        description: '',
        collaboration: '',
    })

    var project: Project = {
        name: name,
        description: description,
        // collaboration: collaboration,
        color: color

    }

    type BottonProps = {
        color?: string
        onChake?: any,
        checked?: any
        cambairUno?: any
        cambiarDos?: any
        cambiarTres?: any
        cambiarCuatro?: any
    }
    const [orange, onOrange] = useState(true);
    const [yellow, onYellow] = useState(false);
    const [green, onGreen] = useState(false);
    const [blue, onBlue] = useState(false);
    const [purple, onPurple] = useState(false);
    const MyColorbox = ({ color = "#E5E1F6", onChake, checked, cambairUno, cambiarDos, cambiarTres, cambiarCuatro }: BottonProps) => {

        function onCheckmarkPress() {
            onChake(!checked);
            cambairUno(false)
            cambiarDos(false)
            cambiarTres(false)
            cambiarCuatro(false)
            setColor(color)

            console.log("el color es", color)
            console.log(project)




        }

        return (
            <Pressable
                style={[styles.checkboxBase, checked && styles.checkboxChecked, { backgroundColor: color }]}
                onPress={onCheckmarkPress}>
                {checked && <Entypo name="check" size={15} color='#23232B' />}
            </Pressable>
        );
    }

    const { token } = useContext(AuthContext)
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    console.log(name)
    return (

        <ScrollView style={{ ...styleWrappers.wrapperHorizontalGap, top: '4%', flex: 1 }} contentContainerStyle={{ paddingBottom: 90 }} >

            <StakeHolders texto='Project Name' stakeHold={onChange} stakeHoldText={name} valueText='name' color='#E5E1F6' />
            <StakeHolders texto='Project description' stakeHold={onChange} stakeHoldText={description} valueText='description' color='#E5E1F6' />
            <StakeHolders texto='Colaboration' stakeHold={onChange} stakeHoldText={collaboration} valueText='collaboration' color='#E5E1F6' />
            <View style={{
                borderBottomColor: '#E5E1F6',
                borderBottomWidth: 1,
                marginTop: '15%',
                height: '15%',
            }}>
                <Text style={{ color: '#E5E1F6' }}>Color</Text>
                <View style={{ flexDirection: 'row', width: '100%', height: '40%', position: 'absolute', bottom: 5 }}>
                    <MyColorbox color='#FF7F39' cambairUno={onYellow} cambiarDos={onGreen} cambiarTres={onBlue} cambiarCuatro={onPurple} checked={orange} onChake={onOrange} />
                    <MyColorbox color='#F8E5A3' cambairUno={onOrange} cambiarDos={onGreen} cambiarTres={onBlue} cambiarCuatro={onPurple} checked={yellow} onChake={onYellow} />
                    <MyColorbox color='#BBC79E' cambairUno={onOrange} cambiarDos={onYellow} cambiarTres={onBlue} cambiarCuatro={onPurple} checked={green} onChake={onGreen} />
                    <MyColorbox color='#8CBBDD' cambairUno={onOrange} cambiarDos={onYellow} cambiarTres={onGreen} cambiarCuatro={onPurple} checked={blue} onChake={onBlue} />
                    <MyColorbox color='#BD7ABC' cambairUno={onOrange} cambiarDos={onYellow} cambiarTres={onGreen} cambiarCuatro={onBlue} checked={purple} onChake={onPurple} />
                </View>
            </View>
            <View style={styles.section}>
            </View>
            <View>
                <CustomCenterBotton onPress={() => useCreteProject(project, navigation, token)} text="Create Project" />

            </View>
        </ScrollView >
    );
};


export default CreateProjectForm
const styles = StyleSheet.create({
    checkboxBase: {
        width: 26,
        height: 26,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        marginRight: '1%',
        backgroundColor: 'red',
    },

    checkboxChecked: {
        backgroundColor: 'red',
    },
    section: {
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: '15%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    paragraph: {
        color: '#23232B',
        fontSize: 10,
    },

    paragraphOrange: {
        color: '#FF7F39',
        fontSize: 10,
    },
    checkbox: {
        borderRadius: 5,
        margin: 8,
        color: 'red'
    },
});
