import { Picker } from '@react-native-picker/picker';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { SafeAreaView, Text, TextInput, View, StyleSheet, ScrollView, Button, Image, Dimensions } from 'react-native';
import { RootStackParamList } from '../navigators/BottomTabs';
import { db } from '../services/firebase/config';
import { collection, addDoc } from "firebase/firestore";
import { PROVINCIAS } from '../helpers/Provinces';

const { width, height } = Dimensions.get('window');

export const SignUpScreen = () => {
  const [user, setUser] = useState({ name: '', lastName: '', email: '', password: '', province: '', phoneNumber: '' });
  const [provincias] = useState(PROVINCIAS);
  const [selectProvince, setProvinceSelected] = useState<string>(provincias[0].value);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();


  const handleChangeText = (name: string, value: string) => {
    setUser({ ...user, [name]: value });
  };

  const createNewUser = async () => {
    try {
      const userRef = await addDoc(collection(db, "users"), {
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        province: user.province,
        phoneNumber: user.phoneNumber
      });
      console.log("Document written with ID: ", userRef.id);
    } catch (error) {
      console.error('Please, complete all the data');
    }
  };

  // Variable de estado para la visibilidad de la contraseña
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.principal}>
      <ScrollView>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: 35 }}>
          <Text style={{
            fontSize: 45,
            fontFamily: "FugazOne",
            color: "#2196f4",
            textShadowColor: "rgba(0, 0, 0, 0.2)",
            textShadowOffset: { width: 1, height: 1 },
            textShadowRadius: 1,
            paddingTop: 15,
          }}>
            PawMatch
          </Text>
          <Image
            source={require('../assets/images/23.png')}
            style={{ width: 100, height: 100 }} // Ajusta el tamaño según necesites
            resizeMode="contain"
          />
        </View>
        <Text style={styles.title}>Registrarse</Text>
        <TextInput
          placeholder='Nombre'
          placeholderTextColor={'#ffffff'}
          style={styles.input}
          onChangeText={(value) => handleChangeText('name', value)}
        />
        <TextInput
          placeholder='Apellido'
          placeholderTextColor={'#ffffff'}
          style={styles.input}
          onChangeText={(value) => handleChangeText('lastName', value)}
        />
        <TextInput
          placeholder='Correo electrónico'
          placeholderTextColor={'#ffffff'}
          style={styles.input}
          keyboardType="email-address"
          onChangeText={(value) => handleChangeText('email', value)}
        />
        <TextInput
          placeholder='Contraseña'
          placeholderTextColor={'#ffffff'}
          style={styles.input}
          onChangeText={(value) => handleChangeText('password', value)}
          secureTextEntry={!showPassword}
        />
        <TextInput
          placeholder='Repetir contraseña'
          placeholderTextColor={'#ffffff'}
          style={styles.input}
          secureTextEntry={!showPassword}
        />
        <Text style={styles.textSelect}>Provincia:</Text>
        <View style={styles.containerPicker}>
          <Picker
            style={styles.picker}
            selectedValue={selectProvince}
            onValueChange={(itemValue) => {
              setProvinceSelected(itemValue);
            }}
          >
            {provincias.map(provincia => (
              <Picker.Item key={provincia.value} label={provincia.label} value={provincia.value} />
            ))}
          </Picker>
        </View>
        <TextInput
          placeholder='Número de teléfono'
          placeholderTextColor={'#ffffff'}
          style={styles.input}
          keyboardType="phone-pad"
          onChangeText={(value) => handleChangeText('phoneNumber', value)}
        />
        <View style={styles.buttonsGroup}>
          <Button
            title="Registrarse"
            onPress={() => createNewUser()}

          />
          <Text style={{ textAlign: 'center', margin: 10, color: 'grey' }}>ó</Text>
          <Button
            title="Registrarse con Google"
          />
          <Text onPress={() => navigation.navigate('SignInScreen')} style={{ color: 'lightblue', textAlign: 'center', margin: 15 }}>Iniciar Sesión</Text>
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
    color: '#ffffff'
  },
  placeholder: {
    color: '#223d56'
  },
  textSelect: {
    color: '#ffffff',
    marginTop: 10,
    marginLeft: 45
  },
  containerPicker: {
    marginTop: 30,
    alignSelf: "center",
    backgroundColor: "#223d56",
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "gray",
    width: width * 0.8,
    height: 45,
    justifyContent: "center"
  },
  picker: {
    margin: 10,
    color: '#ffffff'
  },
  buttonsGroup: {
    padding: 40,
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
  }
});