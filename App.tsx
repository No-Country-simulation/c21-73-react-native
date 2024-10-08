import { NavigationContainer } from '@react-navigation/native';
import { BottomTabs } from './src/navigators/BottomTabs';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabs/>
    </NavigationContainer>
  );
}

