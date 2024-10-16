
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { BackHandler, Text, View } from 'react-native';
import { RootStackParamList } from '../navigators/BottomTabs';
import { useEffect } from 'react';

export const PostScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect( () => {
    const backAction = () => {
      navigation.navigate( 'FeedScreen' );
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );
    return () => backHandler.remove();
  } );

  
  return (
    <View>
      <Text>PostScreen</Text>
    </View>
  );
};
