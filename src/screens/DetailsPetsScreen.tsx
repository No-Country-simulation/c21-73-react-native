
import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { BackHandler, Text, View, Image, Dimensions, StyleSheet, ScrollView, Pressable } from 'react-native';
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
      headerStyle: {
        backgroundColor: '#111b24',
      },
      headerTintColor: '#fbffff', // Cambia este color por el que desees para el título
      headerTitleAlign: 'center', // Centra el título
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
    <ScrollView style={ styles.container }>
      <View style={ styles.imageContainer }>
        <Image source={ { uri: pet.image } } style={ styles.image } resizeMode="contain" />
      </View>
      <Text style={ styles.titleInfo }>Breed</Text>
      <View style={ styles.separator }></View>
      <Text style={ styles.textDetails }>{ pet.breed }</Text>
      <Text style={ styles.titleInfo }>Age</Text>
      <View style={ styles.separator }></View>
      <Text style={ styles.textDetails }> { pet.age }</Text>
      <Text style={ styles.titleInfo }>Description</Text>      
      <View style={ styles.separator }></View>
      <Text style={ styles.textDetails }> { "more info" }</Text>

      <Pressable
        style={ {
          justifyContent: "center",
          backgroundColor: "#2196f4",
          height: 38,
          width: width * 0.4,
          borderRadius: 3,
          overflow: "hidden",
          marginTop: height * 0.04,
          alignSelf: "center",
          alignItems: "center",
          marginBottom:10,
        } }
        onPress={ () => console.log( "Formulario" ) }
      >
        <Text style={ { color: "white", fontWeight: "bold", fontSize: 14, alignSelf: "center" } }>ADOPT</Text>
      </Pressable>



    </ScrollView>
  );
};

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: "#111b24"
  },
  imageContainer: {
    borderRadius: 10,
    width: width,
    height: height * 0.4,
    backgroundColor: '#223d56',
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textDetails: {
    color: "#fbffff",
    fontSize: 20,
    alignSelf: "center",
    marginTop: 10,
  },
  titleInfo: {
    color: "#fbffff",
    fontSize: 30,
    alignSelf: "center",
    marginTop: 10
  },
  separator: {
    borderWidth: 0.5,
    borderColor: "#fbffff",
    width: width * 0.8,
    alignSelf: "center",
  }

} );
