import {Tabs} from 'expo-router';
import TabIcon from "@/components/tab/TabIcon";

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
                    headerShown: false,
                    tabBarIcon: ({color, focused}) =>
                        <TabIcon name={focused ? 'map-sharp' : 'map-outline'} color={color}/>
                }}
            />
            <Tabs.Screen
                name="favourites"
                options={{
                    title: 'Favourites',
                    tabBarIcon: ({color, focused}) =>
                        <TabIcon name={focused ? 'heart-sharp' : 'heart-outline'} color={color}/>
                }}
            />
            <Tabs.Screen
                name="more"
                options={{
                    title: 'More',
                    tabBarIcon: ({color, focused}) =>
                        <TabIcon name={focused ? 'menu-sharp' : 'menu-outline'} color={color}/>
                }}
            />
        </Tabs>
    );
}
