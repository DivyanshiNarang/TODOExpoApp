import { ThemeProvider } from "@/hooks/useTheme";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false, }}>
        <Stack.Screen
          name="(tabs)" // folder name - stack navigation for screens in tabs folder
        />
      </Stack>
    </ThemeProvider>
  );
}
