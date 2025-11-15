import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false, }}>
    <Stack.Screen
      name="(tabs)" // folder name - stack navigation for screens in tabs folder
    />
  </Stack>;
}
