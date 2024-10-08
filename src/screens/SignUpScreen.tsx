import { Picker } from '@react-native-picker/picker';
import { useState } from 'react';
import { SafeAreaView, Text, TextInput, View, StyleSheet, ScrollView, Button } from 'react-native';

export const SignUpScreen = () => {
  const [provincias, setProvincias] = useState([{label:'Buenos Aires', value: 'buenosaires'}, {label: 'CABA', value: 'caba'}, {label: 'Catamarca', value: 'catamarca'}, {label: 'Chaco', value: 'chaco'}, {label:'Chubut', value: 'chubut'}, {label:'Córdoba', value: 'cordoba'}, {label:'Corrientes', value: 'corrientes'}, {label:'Entre Ríos', value: 'entrerios'}, {label:'Formosa', value: 'formosa'}, {label:'Jujuy', value: 'jujuy'}, {label:'La Pampa', value: 'lapampa'}, {label:'La Rioja', value: 'larioja'}, {label:'Mendoza', value: 'mendoza'},{label:'Misiones', value: 'misiones'}, {label:'Neuquén', value: 'neuquen'}, {label:'Río Negro', value: 'rionegro'}, {label:'Salta', value: 'salta'}, {label:'San Juan', value: 'sanjuan'}, {label:'San Luis', value: 'sanluis'}, {label:'Santa Cruz', value: 'santacruz'}, {label:'Santa Fe', value: 'santafe'}, {label:'Santiago del Estero', value: 'santiagodelestero'},{label:'Tierra del Fuego', value: 'tierradelfuego'}, {label:'Tucumán', value: 'tucuman'}]);

  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.title}>Registrarse</Text>
        <Text style={styles.text}>Nombre:</Text>
        <TextInput
          placeholder='Juan'
          style={styles.input}
        />
        <Text style={styles.text}>Apellido:</Text>
        <TextInput
          placeholder='Doe'
          style={styles.input}
        />
        <Text style={styles.text}>Email:</Text>
        <TextInput
          placeholder='johndoe@email.com'
          style={styles.input}
        />
        <Text style={styles.text}>Contraseña:</Text>
        <TextInput
          placeholder='asde1234'
          style={styles.input}
        />
        <Text style={styles.text}>Repetir Contraseña:</Text>
        <TextInput
          placeholder='asde1234'
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
        <Text style={styles.text}>Teléfono:</Text>
        <TextInput
          placeholder='3515252525'
          style={styles.input}
        />
        <View style={styles.buttonsGroup}>
          <Button
            title="Register"
            color='green'
          />
          <Button
            title="Login"
          />
          <Button
            title="Register with Google"
            color=''
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    margin: 10,
  },
  text: {
    marginLeft: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 3,
  },
  picker: {
    backgroundColor: 'red',
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
  buttonsGroup: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    borderRadius: 10,
  }
})