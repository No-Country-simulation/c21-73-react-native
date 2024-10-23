
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Dimensions, ScrollView, Text, View, TextInput, Pressable } from 'react-native';
import { RootStackParamList } from '../navigators/BottomTabs';


const { width, height } = Dimensions.get( 'window' );

export const SignInScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (

    <ScrollView style={ { flex: 1 } }>
      <View style={ styles.imageContainer }>
        <Image
          source={ require( '../assets/images/petsanimated.png' ) }
          style={ styles.image }
          resizeMode="stretch"
        />
      </View>
      <View style={ styles.containerLogin }>
        <Text style={ styles.textStyle }>Welcome</Text>
        <TextInput
          value=""
          placeholder="Email"
          style={ styles.textinputEmail }
          placeholderTextColor="white"
        />
        <TextInput
          value=""
          placeholder="Password"
          style={ styles.textinputPassword }
          placeholderTextColor="white"
        />



        <Text onPress={ () => console.log( "press forgot password" ) } style={ styles.textForgotPassword }>Forgot Password?</Text>

        <Pressable
          style={ styles.buttonLogin }
          onPress={ () => navigation.navigate( 'FeedScreen') }
        >
          <Text style={ { color: "white", fontWeight: "bold", fontSize: 14 } }>LOGIN</Text>
        </Pressable>
        <Text style={ styles.textOR }>or</Text>

        <Pressable
          style={ styles.buttonGmail }
          onPress={ () => navigation.navigate( 'FeedScreen') }
        >
          <Image
            source={ require( '../assets/images/icongmail.png' ) }
            style={ { width: 40, height: 30, marginRight: 8 } }
            resizeMode="stretch"
          />
          <Text style={ { color: "white", fontWeight: "bold", fontSize: 14 } }>LOGIN WITH GMAIL</Text>
        </Pressable>

        <Text onPress={ () => navigation.navigate( 'SignUpScreen') } style={ styles.textRegister }>Don't have account?</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create( {
  containerMain: {
    flex: 1,
    // backgroundColor: "#111b24"
  },
  imageContainer: {
    width: width,
    height: height * 0.4,
  },
  image: {
    width: "100%",
    height: "100%"
  },
  containerLogin: {
    width, height: height * 0.6, backgroundColor: "#111b24"
  },
  textStyle: {
    color: "#fbffff",
    fontSize: 38,
    marginTop: height * 0.01,
    alignSelf: "center"
  },
  textinputEmail: {
    fontSize: 15,
    paddingLeft: 8,
    marginTop: height * 0.04,
    backgroundColor: "#223d56",
    width: width * 0.8,
    height: 45,
    alignSelf: "center",
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "gray"
  },
  textinputPassword: {
    fontSize: 15,
    paddingLeft: 8,
    marginTop: height * 0.02,
    backgroundColor: "#223d56",
    width: width * 0.8,
    height: 45,
    alignSelf: "center",
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "gray"
  },
  textForgotPassword: {
    color: "grey",
    marginTop: height * 0.01,
    paddingRight: width * 0.1,
    alignSelf: "flex-end"
  },
  buttonLogin: {
    justifyContent: "center",
    backgroundColor: "#2196f4",
    height: 38,
    width: width * 0.4,
    borderRadius: 3,
    overflow: "hidden",
    marginTop: height * 0.04,
    alignSelf: "center",
    alignItems: "center"
  },
  textOR: {
    color: "grey",
    marginTop: 15,
    alignSelf: "center"
  },
  buttonGmail: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2196f4",
    height: 38,
    width: width * 0.5,
    borderRadius: 3,
    overflow: "hidden",
    marginTop: height * 0.025,
    alignSelf: "center",
  },
  textRegister: {
    color: "white",
    marginTop: height*0.005,    
    alignSelf: "center",
  }

} );
