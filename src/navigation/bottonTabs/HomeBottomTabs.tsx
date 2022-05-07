import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '../../themes/colors/ZettingColors';
import Search from '../../../assets/svg/search.svg'
import Casting from '../../../assets/svg/casting.svg'
import Zetting from '../../../assets/svg/zetting.svg'
import Bell from '../../../assets/svg/bell.svg'
import Profile from '../../../assets/svg/profile.svg'
import ScreenProfileHome from '../../screens/profile/home/ScreenProfileHome';
import ScreenExploreHome from '../../screens/explore/home/ScreenExploreHome';
import ScreenCastingHome from '../../screens/casting/home/ScreenCastingHome';
import ScreenProjectHome from '../../screens/project/home/ScreenProjectHome';
import ScreenNotificationHome from '../../screens/notification/home/ScreenNotificationHome';

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: COLORS.orange,
                headerShown: false,
                tabBarStyle: { backgroundColor: COLORS.black, borderTopColor: COLORS.white }
            }}
            initialRouteName='Project' >

            <Tab.Screen name="Explore" component={ScreenExploreHome} options={{
                tabBarIcon: ({ focused }) => (
                    <Search fill={focused ? COLORS.orange : COLORS.white} />
                ),
            }} />
            <Tab.Screen name="Casting" component={ScreenCastingHome} options={{
                tabBarIcon: ({ focused }) => (
                    <Casting fill={focused ? COLORS.orange : COLORS.white} />
                ),
            }} />
            <Tab.Screen name="Project" component={ScreenProjectHome} options={{
                tabBarIcon: ({ focused }) => (
                    <Zetting fill={focused ? COLORS.orange : COLORS.white} />
                ),
            }} />


            <Tab.Screen name="Notification" component={ScreenNotificationHome} options={{
                tabBarIcon: ({ focused }) => (
                    <Bell fill={focused ? COLORS.orange : COLORS.white} />
                ),
            }} />
            <Tab.Screen name="Profile" component={ScreenProfileHome} options={{
                tabBarIcon: ({ focused }) => (
                    <Profile fill={focused ? COLORS.orange : COLORS.white} />
                ),
            }} />
        </Tab.Navigator>
    );
}

export default BottomTabs;
