import { CommonActions, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { createContext, useReducer } from "react";
import { apiCalls } from "../api/apiCalls";
import { User } from "../interfaces/appInterfaces";
import { RootStackParamList } from "../navigator/StackNavigator";
import { authReducer, AuthState } from "./authReducer";




type AuthContextProps = {
    errorMessage: string | null,
    userId: string | null | undefined,
    token: string | null;
    user: User | null;
    status: 'checking' | 'autenticated' | 'not-autenticated'
    exists: boolean | null;
    signIn: (email: string, password: string) => void;
    signOut: () => void;
    registerIn: (email: string) => void;
    signUp: (user: User) => void;
    removeError: () => void;
}


const authInitialState: AuthState = {
    status: 'checking',
    token: null,
    userId: null,
    user: null,
    exists: null,
    errorMessage: null,


}


export const AuthContext = createContext({} as AuthContextProps);


export const AuthProvider = ({ children }: any) => {

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [state, dispatch] = useReducer(authReducer, authInitialState);
    const signIn = async (email: string, password: string) => {

        try {
            const { data } = await apiCalls.post('/api/users/login', { "email": email, "password": password })
            console.log(data.data);
            dispatch({
                type: 'signIn',
                payload: {
                    token: data.token,
                    user: data.user
                }
            })

            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'BottomTabs' }
                    ]

                }))
        } catch (error) {
            dispatch({
                type: 'addError',
                payload: error.response.data.error
            })
            console.log(error.response.data.error);

        }


    };
    const signOut = () => { console.log('d') };
    const registerIn = async (email: string) => {
        try {
            const resp = await apiCalls.get('/api/users/email=' + email)
            console.log(resp.data);
            if (resp.data.exists == false) {
                navigation.navigate('Register2Screen', { email: email })
            } else {
                console.log("la cuenta existe")
            }
        } catch (error) {
            console.log(error.message.toString());

        }


    };
    const signUp = async (user: User) => {
        try {
            const { data } = await apiCalls.post('/api/users/register', user);
            console.log('onSignUpBotton')
            dispatch({
                type: 'signUp',
                payload: {
                    token: data.token,
                    user: data.user
                }
            })
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: 'BottomTabs' }
                    ]

                }))

        } catch (error) {

            console.log(error);

        }


    };
    const removeError = () => { dispatch({ type: 'removeError' }) };



    return (
        <AuthContext.Provider value={{
            ...state,
            signIn,
            signOut,
            signUp,
            registerIn,
            removeError,


        }}>
            {children}
        </AuthContext.Provider>
    )
}

