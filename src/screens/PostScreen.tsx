
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { BackHandler, Dimensions, ScrollView, Text, TextInput, View, StyleSheet, Pressable } from 'react-native';
import { RootStackParamList } from '../navigators/BottomTabs';
import { useEffect, useState } from 'react';
import { Picker } from '@react-native-picker/picker';

const { width, height } = Dimensions.get( 'window' );

export const PostScreen = () => {
  const [ provincias, setProvincias ] = useState( [ { label: 'Buenos Aires', value: 'buenosaires' }, { label: 'CABA', value: 'caba' }, { label: 'Catamarca', value: 'catamarca' }, { label: 'Chaco', value: 'chaco' }, { label: 'Chubut', value: 'chubut' }, { label: 'Córdoba', value: 'cordoba' }, { label: 'Corrientes', value: 'corrientes' }, { label: 'Entre Ríos', value: 'entrerios' }, { label: 'Formosa', value: 'formosa' }, { label: 'Jujuy', value: 'jujuy' }, { label: 'La Pampa', value: 'lapampa' }, { label: 'La Rioja', value: 'larioja' }, { label: 'Mendoza', value: 'mendoza' }, { label: 'Misiones', value: 'misiones' }, { label: 'Neuquén', value: 'neuquen' }, { label: 'Río Negro', value: 'rionegro' }, { label: 'Salta', value: 'salta' }, { label: 'San Juan', value: 'sanjuan' }, { label: 'San Luis', value: 'sanluis' }, { label: 'Santa Cruz', value: 'santacruz' }, { label: 'Santa Fe', value: 'santafe' }, { label: 'Santiago del Estero', value: 'santiagodelestero' }, { label: 'Tierra del Fuego', value: 'tierradelfuego' }, { label: 'Tucumán', value: 'tucuman' } ] );
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect( () => {
    navigation.setOptions({
      title: "New Post",
      headerStyle: {
        backgroundColor: '#111b24',},
      headerTintColor: '#fbffff', // Cambia este color por el que desees para el título
      headerTitleAlign: 'center', // Centra el título
    })
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
    <ScrollView style={ { flex: 1, backgroundColor: "#111b24" } }>
      
      <TextInput style={ styles.textInputName } placeholderTextColor="white" placeholder="Name Pet" value=""></TextInput>
      
      <TextInput style={ styles.textInputName } placeholderTextColor="white" placeholder="Age" value="" keyboardType="numeric"></TextInput>
      
      <TextInput style={ styles.textInputName } placeholderTextColor="white" placeholder="Diseases" value=""></TextInput>
      
      <TextInput style={ styles.textInputName } placeholderTextColor="white" placeholder="Breed - N/A" value=""></TextInput>
      
      <View style={ styles.containerPicker }>
        <Picker style={ styles.picker }>
          { provincias.map( provincia => (
            <Picker.Item key = {provincia.value} label={ provincia.label } value={ provincia.value } />
          ) ) }
        </Picker>
      </View>
      
      <TextInput style={ styles.textInputName } placeholderTextColor="white" placeholder="Vaccines - N/A" value=""></TextInput>
      
      <TextInput style={ styles.textInputDesc } multiline={ true } placeholderTextColor="white" placeholder="Description.." value=""></TextInput>
      
      <Pressable
        style={ { backgroundColor: "#223d56", borderRadius: 5, width: width * 0.8, alignSelf: "center", borderWidth: 0.5, borderColor: "white", height: 95, paddingLeft: 8, justifyContent: "center", marginTop: 30, } }
        onPress={ () => console.log( "add images" ) }
      >
        <Text style={ { color: "white", fontWeight: "bold", fontSize: 20, alignSelf: "center" } }>Add Images +</Text>
      </Pressable>

    </ScrollView>
  );
};


const styles = StyleSheet.create( {
  textInputName: {
    marginTop: 30,
    backgroundColor: "#223d56",
    borderWidth: 0.5,
    borderColor: "white",
    width: width * 0.8,
    height: 45,
    borderRadius: 5,
    alignSelf: "center",
    paddingLeft: 8
  },
  textInputDesc: {
    marginTop: 30,
    backgroundColor: "#223d56",
    borderWidth: 0.5,
    borderColor: "white",
    width: width * 0.8,
    height: 90,
    borderRadius: 5,
    alignSelf: "center",
    paddingLeft: 8,
    paddingTop: 8,
    textAlignVertical: "top",
  },
  containerPicker:
  {
    marginTop: 30,
    alignSelf: "center",
    backgroundColor: "#223d56",
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "white",
    width: width * 0.8,
    height: 45,
    justifyContent: "center"
  }
  ,
  picker: {
    margin: 10,
    borderWidth: 1,
    borderColor: 'white',
    color: '#fbffff',

  }
} );