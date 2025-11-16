import useTheme from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

const TabsLayout = () => {
    const { colors } = useTheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: colors.textMuted,
                tabBarStyle: {
                    backgroundColor: colors.surface,
                    borderWidth: 1,
                    borderTopColor: colors.border,
                    height: 90,
                    paddingBottom: 2,
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


export default TabsLayout;
