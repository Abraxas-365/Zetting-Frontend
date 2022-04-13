

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { StyleSheet } from 'react-native'
import { SVGProps } from "react"
import Svg, { G, Path } from 'react-native-svg';
import { RootStackParamList } from '../../navigator/StackNavigator';
import { useMyProjects, useProjects } from '../../hooks/useProjects';
import { styleBackgrounds } from '../../themes/Backgrounds';
import { styleWrappers } from '../../themes/Wrappers';
import { styleTitles } from '../../themes/Titles';
import PlusButtonSvg from '../../components/svg/PlusSvg';
import CustomSmallBotton from '../../components/buttons/CustomSmallBotton';
import ProjectBotton from '../../components/buttons/ProjectButton';

const Arrow = (props: SVGProps<SVGSVGElement>) => (
    <Svg
        width={55.462}
        height={104.263}
    >
        <G
            data-name="Group 782"
            fill="none"
            stroke="#e5e1f6"
            strokeLinecap="round"
            strokeWidth={2}
        >
            <Path
                data-name="Path 513"
                d="M1.016 103.257s46.014.747 46.591-43.678 0-55.8 0-55.8"
            />
            <Path data-name="Path 514" d="m41.463 10.451 6.127-8.739 6.47 8.739" />
        </G>
    </Svg>)



const ProyetosScreen = () => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    //naranja
    const [colorProject, setColorProject] = useState('#FF7F39');
    //gis
    const [colorMyProject, setColorMyProject] = useState('#23232B');
    //blaanco
    const [borderColor, setBorderColor] = useState('#FF7F39');
    const [borderColor1, setBorderColor1] = useState('#E5E1F6');
    const [tipo, setTipo] = useState(false);

    const projects = useProjects();
    const myProjects = useMyProjects();
    const projectsBotton = () => {

        setColorProject('#FF7F39')
        setBorderColor('#FF7F39')
        setColorMyProject('#23232B')
        setBorderColor1('#E5E1F6')
        setTipo(false)
    }
    const myprojectsBotton = () => {
        setColorProject('#23232B')
        setBorderColor('#E5E1F6')
        setColorMyProject('#FF7F39')
        setBorderColor1('#FF7F39')
        setTipo(true)
    }
    if (tipo == false) {

        return (
            <SafeAreaView style={styleBackgrounds.fondoDark}>
                <View style={{ ...styleWrappers.wrapperHorizontalGap }}>
                    <View style={{ ...styleWrappers.wrapperTitles, flexDirection: 'row' }}>
                        <Text style={styleTitles.titleTextLight}>RROJECTS</Text>
                        <TouchableOpacity style={styleProyectosScreen.mas} onPress={() => navigation.navigate('CreateProyectScreen')}>
                            <PlusButtonSvg />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        marginTop: '10%', flexDirection: 'row',
                    }}>


                        <CustomSmallBotton borderColor={borderColor} color={colorProject} text='My Project' onPress={projectsBotton} />
                        <View style={{ marginHorizontal: '2%', marginBottom: "12%" }} />
                        <CustomSmallBotton borderColor={borderColor1} color={colorMyProject} text='Projects' onPress={myprojectsBotton} />
                    </View>
                </View>
                <FlatList ListEmptyComponent={<EmptyFlatList />}
                    contentContainerStyle={{ flexGrow: 1, top: '3%', ...styleWrappers.wrapperHorizontalGap }}
                    data={myProjects.myProjects} renderItem={({ item }: any) => <ProjectBotton project={item} />}
                    onEndReached={() => { myProjects.setPageMyProject(myProjects.page + 1) }}
                />
            </SafeAreaView >
        );
    }
    if (tipo == true) {

        return (
            <SafeAreaView style={styleBackgrounds.fondoDark}>
                <View style={{ ...styleWrappers.wrapperHorizontalGap }}>
                    <View style={{ ...styleWrappers.wrapperTitles, flexDirection: 'row' }}>
                        <Text style={styleTitles.titleTextLight}>RROJECTS</Text>
                        <TouchableOpacity style={styleProyectosScreen.mas} onPress={() => navigation.navigate('CreateProyectScreen')}>
                            <PlusButtonSvg />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        marginTop: '10%', flexDirection: 'row',
                    }}>


                        <CustomSmallBotton borderColor={borderColor} color={colorProject} text='My Project' onPress={projectsBotton} />
                        <View style={{ marginHorizontal: '2%', marginBottom: "12%" }} />
                        <CustomSmallBotton borderColor={borderColor1} color={colorMyProject} text='Projects' onPress={myprojectsBotton} />
                    </View>
                </View>

                <FlatList contentContainerStyle={{ flexGrow: 1, top: '3%', ...styleWrappers.wrapperHorizontalGap }}
                    data={projects.projects} renderItem={({ item }: any) => <ProjectBotton project={item} />}
                    onEndReached={() => { projects.setPageProject(projects.page + 1) }}
                />

            </SafeAreaView >
        );

    }

};

export default ProyetosScreen;
const EmptyFlatList = () => {
    return (
        <View style={{ position: 'absolute', right: "-15%", flexDirection: 'row' }}>
            <Text style={{ color: '#e5e1f6', width: '50%', top: '28%', fontSize: 16, fontWeight: '500' }}>Press the + button to create new project</Text>
            <Arrow />
        </View>
    )
}


export const styleProyectosScreen = StyleSheet.create({
    mas: {
        position: 'absolute',
        right: 0,

    }


})
