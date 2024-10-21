import { Picker } from '@react-native-picker/picker';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { SafeAreaView, Text, TextInput, View, StyleSheet, ScrollView, Button, Image, Dimensions } from 'react-native';
import { RootStackParamList } from '../navigators/BottomTabs';


const { width, height } = Dimensions.get( 'window' );

export const SignUpScreen = () => {
  const [ provincias, setProvincias ] = useState( [ { label: 'Buenos Aires', value: 'buenosaires' }, { label: 'CABA', value: 'caba' }, { label: 'Catamarca', value: 'catamarca' }, { label: 'Chaco', value: 'chaco' }, { label: 'Chubut', value: 'chubut' }, { label: 'Córdoba', value: 'cordoba' }, { label: 'Corrientes', value: 'corrientes' }, { label: 'Entre Ríos', value: 'entrerios' }, { label: 'Formosa', value: 'formosa' }, { label: 'Jujuy', value: 'jujuy' }, { label: 'La Pampa', value: 'lapampa' }, { label: 'La Rioja', value: 'larioja' }, { label: 'Mendoza', value: 'mendoza' }, { label: 'Misiones', value: 'misiones' }, { label: 'Neuquén', value: 'neuquen' }, { label: 'Río Negro', value: 'rionegro' }, { label: 'Salta', value: 'salta' }, { label: 'San Juan', value: 'sanjuan' }, { label: 'San Luis', value: 'sanluis' }, { label: 'Santa Cruz', value: 'santacruz' }, { label: 'Santa Fe', value: 'santafe' }, { label: 'Santiago del Estero', value: 'santiagodelestero' }, { label: 'Tierra del Fuego', value: 'tierradelfuego' }, { label: 'Tucumán', value: 'tucuman' } ] );
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={ styles.principal }>
      <ScrollView>
        <Image
          source={ require( '../assets/mascotas.png' ) }
          style={ { height: height * 0.4, width: width } }
        />
        <Text style={ styles.title }>Register</Text>
        <TextInput
          placeholder='Name'
          placeholderTextColor={ '#ffffff' }
          style={ styles.input }
        />
        <TextInput
          placeholder='Last Name'
          placeholderTextColor={ '#ffffff' }
          style={ styles.input }
        />
        <TextInput
          placeholder='Email'
          placeholderTextColor={ '#ffffff' }
          style={ styles.input }
          keyboardType="email-address"
        />
        <TextInput
          placeholder='Password'
          placeholderTextColor={ '#ffffff' }
          style={ styles.input }
        />
        <TextInput
          placeholder='Repeat Password'
          placeholderTextColor={ '#ffffff' }
          style={ styles.input }
        />
        <Text style={ styles.text }>Province:</Text>
        <Picker style={ styles.picker } /* selectedValue={provincias}
          onValueChange={(itemValue, itemIndex) =>
            setProvincias(itemValue)
          }  */>
          { provincias.map( provincia => (
            <Picker.Item
              key={ provincia.value }
              label={ provincia.label }
              value={ provincia.value } />
          ) ) }
        </Picker>

        <TextInput
          placeholder='Phone Number'
          placeholderTextColor={ '#ffffff' }
          style={ styles.input }
          keyboardType="phone-pad"
        />
        <View style={ styles.buttonsGroup }>
          <Button
            title="Register"
          />
          <Text style={ { textAlign: 'center', margin: 10, color: 'grey' } }>or</Text>
          <Button
            title="Register with Google"
          />
          <Text onPress={ () => navigation.navigate( 'SignInScreen') } style={ { color: 'lightblue', textAlign: 'center', margin: 15 } }>Login</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create( {
  principal: {
    backgroundColor: '#111b24',
    flex: 1,
  },
  title: {
    textAlign: 'center',
    margin: 10,
    color: '#fbffff',
    fontSize: 40,
  },
  text: {
    alignSelf: "center",
    margin: 10,
    color: '#223d56',
    fontSize: 15,
    fontWeight: "bold",
  },
  input: {
    alignSelf: 'center',
    backgroundColor: "#223d56",
    width: width * 0.8,
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.5,
    margin: 10,
    padding: 10,
    borderRadius: 5,

  },
  placeholder: {
    color: '#223d56'
  },
  picker: {
    margin: 10,
    borderWidth: 1,
    borderColor: 'white',
    color: '#ffffff'
  },
  buttonsGroup: {
    padding: 40,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  }
} );