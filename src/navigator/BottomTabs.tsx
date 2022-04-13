import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Bell, BellSvgActive, BellSvgInactive } from '../components/svg/BellSvg';
import HeardSvg from '../components/svg/HeardSvg';
import { ProfileSVG } from '../components/svg/ProfileSvg';
import SearchSvg from '../components/svg/SearchSvg';
import { ZettingSVG } from '../components/svg/ZettingSVG';
import HomeScreen from '../screens/bottomTabScreen/HomeScreen';
import NotificationScreen from '../screens/bottomTabScreen/NotificationScreen';
import ProfileScreen from '../screens/bottomTabScreen/ProfileScreen';
import ProyetosScreen from '../screens/bottomTabScreen/ProyectosScreen';
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#FF7F39",
                headerShown: false,
                tabBarStyle: { backgroundColor: '#23232B', borderTopColor: '#E5E1F6' }
            }} initialRouteName='Zetting' >
            <Tab.Screen name="Search" component={HomeScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <SearchSvg color={focused ? '#FF7F39' : "#e5e1f6"} />
                ),
            }} />
            <Tab.Screen name="Favorites" component={ProfileScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <HeardSvg color={focused ? '#FF7F39' : "#e5e1f6"} />
                ),
            }} />
            <Tab.Screen name="Zetting" component={ProyetosScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <ZettingSVG color={focused ? '#FF7F39' : "#e5e1f6"} />
                ),
            }} />


            <Tab.Screen name="Notification" component={NotificationScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <Bell color={focused ? '#FF7F39' : "#e5e1f6"} />
                ),
            }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <ProfileSVG color={focused ? '#FF7F39' : "#e5e1f6"} />
                ),
            }} />
        </Tab.Navigator>
    );
}

export default BottomTabs;


export const BottomTabsPerfil = () => {

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#FF7F39",
                headerShown: false,
                tabBarStyle: { backgroundColor: '#23232B', borderTopColor: '#E5E1F6' }
            }} initialRouteName='Profile' >
            <Tab.Screen name="Search" component={HomeScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <SearchSvg color={focused ? '#FF7F39' : "#e5e1f6"} />
                ),
            }} />
            <Tab.Screen name="Favorites" component={ProfileScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <HeardSvg color={focused ? '#FF7F39' : "#e5e1f6"} />
                ),
            }} />
            <Tab.Screen name="Zetting" component={ProyetosScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <ZettingSVG color={focused ? '#FF7F39' : "#e5e1f6"} />
                ),
            }} />


            <Tab.Screen name="Notification" component={NotificationScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <Bell color={focused ? '#FF7F39' : "#e5e1f6"} />
                ),
            }} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                tabBarIcon: ({ focused }) => (
                    <ProfileSVG color={focused ? '#FF7F39' : "#e5e1f6"} />
                ),
            }} />
        </Tab.Navigator>
    );
}
