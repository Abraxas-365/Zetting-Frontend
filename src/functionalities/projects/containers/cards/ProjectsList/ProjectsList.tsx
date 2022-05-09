import React, { useState } from 'react';
import { ActivityIndicator, FlatList, StyleProp, ViewStyle, View } from 'react-native';
import ProjectCard from '../../../../../components/Cards/ProjectCard';
import { COLORS } from '../../../../../themes/colors/ZettingColors';
import { useProjects } from '../../../hooks/useProjects'
import Switch2Buttons from '../../buttons/Switch2Buttons';

type Props = {
    style?: StyleProp<ViewStyle>

}
const ProjectsList = ({
    style = { marginTop: 40 },
}: Props) => {

    const { projects, isLoadingProjects, getProjects, setIsLoading } = useProjects('myprojects');
    const [state, setState] = useState(true);
    console.log(projects)

    return (
        <View >
            <Switch2Buttons
                onFistButton={() => {
                    setIsLoading(true)
                    setState(true);
                    console.log(state);
                    getProjects('myprojects')
                }}
                onSecondButton={() => {
                    setIsLoading(true)
                    setState(false);
                    console.log(state);
                    getProjects('projects')
                }}
            />
            {
                isLoadingProjects ?
                    <ActivityIndicator size={50} color={COLORS.orange} style={{ marginTop: '20%' }} />
                    :
                    <FlatList
                        style={[style]}
                        contentContainerStyle={{ flexGrow: 1, }}
                        data={projects} renderItem={({ item }) => <ProjectCard
                            cardStyle={{ backgroundColor: item.color, marginBottom: 20 }}
                            butonColor={item.color}
                            textBelowTitle={item.workers == null ? '1 Member' : (item.workers.length + 1).toString() + " Members"}
                            textRightPhotos={item.workers == null ? ""
                                : item.workers.length + 1 > 3 ? "+" + (item.workers.length - 2).toString()
                                    : ""}
                            title={item.name}
                            AvatarImage1={item.owner.perfil_image}

                        />}
                    />
            }
        </View>

    );
};

export default ProjectsList;
