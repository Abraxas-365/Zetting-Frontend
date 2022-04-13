import { CommonActions } from "@react-navigation/native";
import { useContext } from "react";
import { apiCalls } from "../api/apiCalls";
import { AuthContext } from "../context/AuthContext";
import { User } from "../interfaces/appInterfaces";


export const useEditUser = async (user: User, navigation: any, token: any) => {
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    console.log(config);

    try {
        const { data } = await apiCalls.put('/api/users/update', user, config);

        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'BottomTabsPerfil', params: { data } }
                ]

            })
        )

    } catch (err) {
        console.error(err);
    }


}
