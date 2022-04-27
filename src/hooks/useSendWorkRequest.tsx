import { CommonActions } from "@react-navigation/native";
import { apiCalls } from "../api/apiCalls";
import { Project, User, WorkRequest } from "../interfaces/appInterfaces";

export const sendWorkRequest = async (owner: User | null, worker: User, project: Project | undefined, navigation: any, token: any) => {



    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    console.log(config);

    try {
        const { data } = await apiCalls.post<WorkRequest>('/api/work-request/new', { "owner": owner, "worker": worker, "project": project }, config);
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'BottomTabs' }
                ]

            }))

    } catch (err) {
        console.error(err);
    }

}
