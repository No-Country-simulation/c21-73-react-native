import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WelcomeScreen } from '../screens/WelcomeScreen';
import { SignInScreen } from '../screens/SignInScreen';
import { SignUpScreen } from '../screens/SignUpScreen';
import { FeedScreen } from '../screens/FeedScreen';
import { DetailsPetsScreen } from '../screens/DetailsPetsScreen';
import { Post } from '../modal/Post';
import { PostScreen } from '../screens/PostScreen';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

export type RootStackParamList = {
  WelcomeScreen: undefined;
  SignInScreen: undefined;
  SignUpScreen: undefined;
  FeedScreen: undefined;
  PostScreen: undefined;
  DetailsPetsScreen: { pet: Post; };
};

const Tab = createBottomTabNavigator<RootStackParamList>();
const { height } = Dimensions.get( 'window' );

export function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={ () => ( {
        tabBarStyle: {
          backgroundColor: '#223d56',
          height:height*0.07,
          borderColor:"#223d56",          
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'grey',
      } ) }>
      <Tab.Screen
        options={ { headerShown: false, tabBarStyle: { display: 'none' }, tabBarButton: () => null } }
        name="WelcomeScreen"
        component={ WelcomeScreen } />
      <Tab.Screen
        options={ { headerShown: false, tabBarStyle: { display: 'none' }, tabBarButton: () => null } }
        name="SignInScreen"
        component={ SignInScreen } />
      <Tab.Screen
        options={ { headerShown: false, tabBarStyle: { display: 'none' }, tabBarButton: () => null } }
        name="SignUpScreen"
        component={ SignUpScreen } />
      <Tab.Screen
        options={ {
          tabBarLabel: 'Feed ',
          headerShown: false,
          tabBarIcon: ( { color, size } ) => (
            <Ionicons name="home-outline" color={ color } size={ size } />
          ),
          tabBarShowLabel: false,
        } }

        name="FeedScreen"
        component={ FeedScreen } />
      <Tab.Screen
        name="DetailsPetsScreen"
        component={ DetailsPetsScreen }
        options={ {
          tabBarButton: () => null,
          tabBarLabel: 'DetailsPetsScreen',
          tabBarStyle: { display: 'none' },
        } }
      />
      <Tab.Screen
        name="PostScreen"
        component={ PostScreen }
        options={ {
          tabBarLabel: 'New Post',
          
          tabBarIcon: ( { color, size } ) => (
            <Ionicons name="create-outline" color={ color } size={ 30 } />
          ),
          tabBarShowLabel: false,
        } }
      />

    </Tab.Navigator>
  );
}