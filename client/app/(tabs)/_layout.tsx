import {Tabs} from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#ffd33d',
                headerStyle: {
                    backgroundColor: '#25292e',
                },
                headerShadowVisible: false,
                headerTintColor: '#fff',
                tabBarStyle: {
                    backgroundColor: '#25292e',
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Map',
                    tabBarIcon: ({color, focused}) => (
                        <Ionicons name={focused ? 'map-sharp' : 'map-outline'} color={color} size={24}/>
                    ),
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="favourites"
                options={{
                    title: 'Favourites',
                    tabBarIcon: ({color, focused}) => (
                        <Ionicons name={focused ? 'heart-sharp' : 'heart-outline'} color={color} size={24}/>
                    ),
                }}
            />
            <Tabs.Screen
                name="more"
                options={{
                    title: 'More',
                    tabBarIcon: ({color, focused}) => (
                        <Ionicons name={focused ? 'menu-sharp' : 'menu-outline'} color={color} size={24}/>
                    ),
                }}
            />
        </Tabs>
    );
}
