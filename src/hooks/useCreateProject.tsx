import { CommonActions } from "@react-navigation/native";
import { apiCalls } from "../api/apiCalls";
import { Project } from "../interfaces/appInterfaces";


export const useCreteProject = async (project: Project, navigation: any, token: any) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    console.log(config);

    try {
        console.log("el color es", project.color);
        const { data } = await apiCalls.post('/api/projects/new', project, config);

        console.log(data);
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'BuildTeamScreen', params: { data } }
                ]

            })
        )

    } catch (err) {
        console.error(err);
    }


}
