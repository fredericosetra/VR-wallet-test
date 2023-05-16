import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home';
import RegisterCardsScreen from './src/screens/registerCards';
import MyCards from './src/screens/myCards';
import { theme } from './global/theme';
import { ThemeProvider } from 'styled-components/native';
import AppLoading from 'expo-app-loading';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  useFonts,
  PTSansCaption_400Regular,
  PTSansCaption_700Bold,
} from '@expo-google-fonts/pt-sans-caption';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({ PTSansCaption_400Regular, PTSansCaption_700Bold });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen
              name="RegisterCards"
              component={RegisterCardsScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="MyCards" component={MyCards} options={{ headerShown: false }} />
          </Stack.Navigator>
        </ThemeProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
