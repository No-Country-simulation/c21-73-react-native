import { SafeAreaView, Text, TextInput, View, StyleSheet, ScrollView, Button } from 'react-native';

export const SignUpScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.title}>SignUp</Text>
        <Text>First Name:</Text>
        <TextInput
          placeholder='John'
          style={styles.input}
        />
        <Text>Last Name:</Text>
        <TextInput
          placeholder='Doe'
          style={styles.input}
        />
        <Text>Email:</Text>
        <TextInput
          placeholder='johndoe@email.com'
          style={styles.input}
        />
        <Text>Password:</Text>
        <TextInput
          placeholder='asde1234'
          style={styles.input}
        />
        <Text>Repeat Password:</Text>
        <TextInput
          placeholder='asde1234'
          style={styles.input}
        />
        <Text>State:</Text>
        <TextInput
          style={styles.input}
        />
        <Text>Phone Number:</Text>
        <TextInput
          placeholder='3515252525'
          style={styles.input}
        />
        <View style={styles.buttonsGroup}>
          <Button
            title="Register"
            color= 'green'
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    padding: 3,
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