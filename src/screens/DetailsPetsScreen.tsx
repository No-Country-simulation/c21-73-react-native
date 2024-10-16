
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { BackHandler, Text, View, Image, Dimensions, StyleSheet } from 'react-native';
import { RootStackParamList } from '../navigators/BottomTabs';
import { useEffect } from 'react';

const { width, height } = Dimensions.get( 'window' );

type DetailsPetsScreenRouteProp = RouteProp<RootStackParamList, 'DetailsPetsScreen'>;

export const DetailsPetsScreen = () => {
  const { pet } = useRoute<DetailsPetsScreenRouteProp>().params;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect( () => {
    navigation.setOptions( {
      title: pet.name,
    } );
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
    <View style={ styles.container }>
      <View style={ styles.imageContainer }>
        <Image source={ { uri: pet.image } } style={ styles.image } resizeMode="contain" />
      </View>
      <Text>Breed: { pet.breed }</Text>
      <Text>Age: { pet.age }</Text>
    </View>
  );
};

const styles = StyleSheet.create( {
  container: {
    flex: 1,
  },
  imageContainer: {
    width: width,
    height: height * 0.4
  },
  image: {
    width: "100%",
    height: "100%"
  }

} );
