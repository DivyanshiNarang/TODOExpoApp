import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { StyleSheet } from 'react-native';

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: 'green',
                tabBarInactiveTintColor: 'red',
                tabBarStyle: {
                    backgroundColor: '#1e293b',
                    borderWidth: 1,
                    borderTopColor: 'blue',
                    height: 90,
                    paddingBottom: 4,
                    paddingTop: 5,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: 600,
                },
                headerShown: false,
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: '',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='home-outline' size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name='settings'
                options={{
                    title: '',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='settings-outline' size={size} color={color} />
                    ),
                }}
            />

        </Tabs>
    );
}

const styles = StyleSheet.create({})

export default TabsLayout;
