import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { SafeAreaView, Text, TextInput, View, StyleSheet, ScrollView, Button, Image } from 'react-native';

export const SignUpScreen = () => {
  const [provincias, setProvincias] = useState([{ label: 'Buenos Aires', value: 'buenosaires' }, { label: 'CABA', value: 'caba' }, { label: 'Catamarca', value: 'catamarca' }, { label: 'Chaco', value: 'chaco' }, { label: 'Chubut', value: 'chubut' }, { label: 'Córdoba', value: 'cordoba' }, { label: 'Corrientes', value: 'corrientes' }, { label: 'Entre Ríos', value: 'entrerios' }, { label: 'Formosa', value: 'formosa' }, { label: 'Jujuy', value: 'jujuy' }, { label: 'La Pampa', value: 'lapampa' }, { label: 'La Rioja', value: 'larioja' }, { label: 'Mendoza', value: 'mendoza' }, { label: 'Misiones', value: 'misiones' }, { label: 'Neuquén', value: 'neuquen' }, { label: 'Río Negro', value: 'rionegro' }, { label: 'Salta', value: 'salta' }, { label: 'San Juan', value: 'sanjuan' }, { label: 'San Luis', value: 'sanluis' }, { label: 'Santa Cruz', value: 'santacruz' }, { label: 'Santa Fe', value: 'santafe' }, { label: 'Santiago del Estero', value: 'santiagodelestero' }, { label: 'Tierra del Fuego', value: 'tierradelfuego' }, { label: 'Tucumán', value: 'tucuman' }]);

  return (
    <SafeAreaView style={styles.principal}>
      <ScrollView>
        <Image 
          source={require('../assets/mascotas.png')}
          style={{height: 150, width: 400}}
        />
        <Text style={styles.title}>Registrarse</Text>
        <TextInput
          placeholder='Nombre'
          placeholderTextColor={'#223d56'}
          style={styles.input}
        />
        <TextInput
          placeholder='Apellido'
          placeholderTextColor={'#223d56'}
          style={styles.input}
        />
        <TextInput
          placeholder='Correo electrónico'
          placeholderTextColor={'#223d56'}
          style={styles.input}
        />
        <TextInput
          placeholder='Contraseña'
          placeholderTextColor={'#223d56'}
          style={styles.input}
        />
        <TextInput
          placeholder='Repetir Contraseña'
          placeholderTextColor={'#223d56'}
          style={styles.input}
        />
        <Text style={styles.text}>Provincia:</Text>
        <Picker style={styles.picker} /* selectedValue={provincias}
          onValueChange={(itemValue, itemIndex) =>
            setProvincias(itemValue)
          }  */>
          {provincias.map(provincia => (
            <Picker.Item label={provincia.label} value={provincia.value} />
          ))}
        </Picker>

        <TextInput
          placeholder='Número de Teléfono'
          placeholderTextColor={'#223d56'}
          style={styles.input}
        />
        <View style={styles.buttonsGroup}>
          <Button
            title="Register"
          />
          <Text style={{color: 'lightblue', textAlign:'center', margin: 15}}>Login</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
    margin: 10,
    color: '#223d56',
    fontSize: 10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  placeholder: {
    color: '#223d56'
  },
  picker: {
    margin: 10,
    borderWidth: 1,
    borderColor: 'white',
    color: '#223d56'
  },
  buttonsGroup: {
    padding: 40,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  }
})