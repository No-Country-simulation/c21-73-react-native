import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WelcomeScreen } from '../screens/WelcomeScreen';
import { SignInScreen } from '../screens/SignInScreen';
import { SignUpScreen } from '../screens/SignUpScreen';
import { FeedScreen } from '../screens/FeedScreen';
import { DetailsPetsScreen } from '../screens/DetailsPetsScreen';
import { Pet } from '../modal/Pet';
import { PostScreen } from '../screens/PostScreen';

export type RootStackParamList = {
  WelcomeScreen: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
  FeedScreen: undefined;
  PostScreen: undefined;
  DetailsPetsScreen: { pet: Pet; };
};

const Tab = createBottomTabNavigator<RootStackParamList>();

export function BottomTabs() {
  return (
    <Tab.Navigator     
    screenOptions={{
      tabBarStyle: {
        backgroundColor: '#223d56', 
      },
      tabBarActiveTintColor: 'white', // Color del ícono y texto activos
      tabBarInactiveTintColor: 'grey', // Color del ícono y texto inactivos
    }}>
      <Tab.Screen
        options={ { headerShown: false, tabBarStyle: { display: 'none' }, tabBarButton: () => null } }
        name="WelcomeScreen"
        component={ WelcomeScreen } />
      <Tab.Screen
        options={ { headerShown: false, tabBarStyle: { display: 'none' }, tabBarButton: () => null } }
        name="SignInScreen"
        component={ SignInScreen } />
      <Tab.Screen
        options={ { headerShown: true, tabBarStyle: { display: 'none' }, tabBarButton: () => null } }
        name="SignUpScreen"
        component={ SignUpScreen } />
      <Tab.Screen
        options={ { headerShown: false, } }
        name="FeedScreen"
        component={ FeedScreen } />
      <Tab.Screen
        name="DetailsPetsScreen"
        component={ DetailsPetsScreen }
        options={ {
          tabBarButton: () => null,
          tabBarLabel: 'DetailsPetsScreen',
          tabBarStyle: { display: 'none' },  // Ocultar esta pantalla de la barra de pestañas
        } }
      />
      <Tab.Screen
        name="PostScreen"
        component={ PostScreen }
        options={ {
          tabBarLabel: 'PostScreen',
          tabBarStyle: { display: 'none' },  // Ocultar esta pantalla de la barra de pestañas
        } }
      />

    </Tab.Navigator>
  );
}