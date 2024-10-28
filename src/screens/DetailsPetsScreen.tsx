
import { NavigationProp, RouteProp, useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { BackHandler, Text, View, Image, Dimensions, StyleSheet, ScrollView, Pressable, FlatList } from 'react-native';
import { RootStackParamList } from '../navigators/BottomTabs';
import { useEffect, useRef } from 'react';
import React from 'react';

const { width, height } = Dimensions.get( 'window' );

type DetailsPetsScreenRouteProp = RouteProp<RootStackParamList, 'DetailsPetsScreen'>;

export const DetailsPetsScreen = () => {

  const { pet } = useRoute<DetailsPetsScreenRouteProp>().params;
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const flatListRef = useRef<FlatList>( null );
  const scrollViewRef = useRef<ScrollView>(null);

  useFocusEffect(
    React.useCallback(() => {
      scrollViewRef.current?.scrollTo({ y: 0, animated: false });
      flatListRef.current?.scrollToOffset({ offset: 0, animated: false });
    }, [])
  );

  useEffect( () => {
    navigation.setOptions( {
      title: pet.name,
      headerStyle: {
        backgroundColor: '#111b24',
      },
      headerTintColor: '#fbffff',
      headerTitleAlign: 'center', 
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

  const renderItem = ( { item }: { item: string; } ) => (
    <View style={ styles.imageContainer }>
      <Image source={ { uri: item } } style={ styles.image } resizeMode="contain" />
    </View>
  );

  return (
    <ScrollView ref={ scrollViewRef } style={ styles.container }>
      <FlatList
        ref={ flatListRef }
        data={ pet.images }
        renderItem={ renderItem }
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={ true }
      />
      <Text style={ styles.titleInfo }>Raza</Text>
      <View style={ styles.separator }></View>
      <Text style={ styles.textDetails }>{ pet.breed }</Text>
      <Text style={ styles.titleInfo }>Edad</Text>
      <View style={ styles.separator }></View>
      <Text style={ styles.textDetails }> { pet.age }</Text>
      <Text style={ styles.titleInfo }>Descripcion</Text>
      <View style={ styles.separator }></View>
      <Text style={ styles.textDetails }> { pet.description }</Text>
      <Text style={ styles.titleInfo }>Vacunas</Text>
      <View style={ styles.separator }></View>
      <Text style={ styles.textDetails }> { pet.vaccines }</Text>
      <Text style={ styles.titleInfo }>Enfermedades</Text>
      <View style={ styles.separator }></View>
      <Text style={ styles.textDetails }> { pet.diseases }</Text>
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
          marginBottom: 10,
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
    fontSize: 18,
    alignSelf: "center",
    marginTop: 10,
    textAlign: "center",
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
  },
  imagePlaceholder: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3a3a3a",
    borderRadius: 10,
  },
  placeholderText: {
    color: "#fff",
    fontSize: 16,
  },

} );
