
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { ScrollView } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import { useEditUser } from '../../hooks/useEditUser';
import { useForm } from '../../hooks/useForm';
import { Profession, User } from '../../interfaces/appInterfaces';
import { RootStackParamList } from '../../navigator/StackNavigator';
import { styleWrappers } from '../../themes/Wrappers';
import CustomCenterBotton from '../buttons/CustomCenterBotton';
import StakeHolders from '../stakeHolds/StakeHolders';

type Props = {
    user: User

}

const EditPerfilForm = ({ user }: Props) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const { token } = useContext(AuthContext)
    const { name, description, collaboration, onChange } = useForm({

        name: user.name,
        description: '',
        collaboration: '',
    })

    var profession: Profession = {
        description: description,

    }
    var user: User = {
        name: name,
        profession: profession

    }
    return (

        <ScrollView style={{ ...styleWrappers.wrapperHorizontalGap, top: '4%', flex: 1 }} contentContainerStyle={{ paddingBottom: 90 }} >
            <StakeHolders texto='Name' stakeHold={onChange} stakeHoldText={name} valueText='name' color='#E5E1F6' />
            <StakeHolders texto='Last Name' stakeHold={onChange} stakeHoldText={description} valueText='description' color='#E5E1F6' />

            <CustomCenterBotton onPress={() => useEditUser(user, navigation, token)} text='Save' top='8%' />
        </ScrollView >
    );
};

export default EditPerfilForm;
