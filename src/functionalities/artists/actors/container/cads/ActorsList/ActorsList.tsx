import React from 'react';
import { ActivityIndicator, FlatList, StyleProp, View, ViewStyle } from 'react-native';
import WorkerCard from '../../../../../../components/Cards/WorkerCard';
import { COLORS } from '../../../../../../themes/colors/ZettingColors';
import { useActors } from '../../../hooks/useActors';
type Props = {
    containerView?: StyleProp<ViewStyle>
    listStyle?: StyleProp<ViewStyle>
}

const ActorsList = ({
    containerView,
    listStyle
}: Props) => {


    const { actors, isLoadingActors, getActors, setIsLoading } = useActors();
    return (
        <View style={[containerView]}>
            {
                isLoadingActors ?
                    <ActivityIndicator size={50} color={COLORS.orange} style={{ marginTop: '20%' }} />
                    :
                    <FlatList
                        style={[listStyle]}
                        contentContainerStyle={{ flexGrow: 1, }}
                        data={actors} renderItem={({ item }) => <WorkerCard
                            heardState={false}
                            containerStyle={{ marginBottom: 20 }}
                            name={item.name}
                            info={item.description}
                        />}
                    />
            }
        </View>
    );
};

export default ActorsList;
