import { NavigationContainer } from '@react-navigation/native';
import { BottomTabs } from './src/navigators/BottomTabs';
import { useFonts } from 'expo-font';

export default function App() {
  
  const [ fontsLoaded ] = useFonts( {
    FugazOne: require('./src/assets/fonts/FugazOne.ttf'),
  } );

  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}

