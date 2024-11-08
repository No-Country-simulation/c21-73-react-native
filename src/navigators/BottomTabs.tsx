import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WelcomeScreen } from '../screens/WelcomeScreen';
import { SignInScreen } from '../screens/SignInScreen';
import { SignUpScreen } from '../screens/SignUpScreen';
import { FeedScreen } from '../screens/FeedScreen';

const Tab = createBottomTabNavigator();

export function BottomTabs() {
  return (
    <Tab.Navigator>      
      <Tab.Screen
        options={ { headerShown: false, tabBarStyle: { display: 'none' } } }
        name="WelcomeScreen"
        component={ WelcomeScreen } />
      <Tab.Screen
        options={ { headerShown: false, tabBarStyle: { display: 'none' } } }
        name="SignInScreen"
        component={ SignInScreen } />
      <Tab.Screen
        options={ { headerShown: false, tabBarStyle: { display: 'none' } } }
        name="SignUpScreen"
        component={ SignUpScreen } />
        <Tab.Screen
        name="FeedScreen"
        component={ FeedScreen } />
    </Tab.Navigator>
  );
}