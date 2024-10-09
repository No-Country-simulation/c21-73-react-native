
import { Image, StyleSheet, Dimensions, ScrollView, Text, View, TextInput, Button, Pressable } from 'react-native';


const { width, height } = Dimensions.get( 'window' );

export const SignInScreen = () => {



  return (

    <ScrollView style={ { flex: 1 } }>
      <View style={ { width: width, height: height * 0.4, backgroundColor: "#111b24" } }>
        <Image
          source={ require( '../assets/images/petsanimated.png' ) }
          style={ { width, height: height * 0.4 } }
          resizeMode="stretch"
        />
      </View>
      <View style={ { width, height: height * 0.6, backgroundColor: "#111b24" } }>
        <Text style={ styles.textStyle }>Welcome</Text>
        <TextInput
          value=""
          placeholder="Email"
          style={ { fontSize: 15, paddingLeft: 8, marginTop: 20, backgroundColor: "#223d56", width: width * 0.8, height: 45, alignSelf: "center", borderRadius: 5, borderWidth: 0.5, borderColor: "white" } }
          placeholderTextColor="white"
        />
        <TextInput
          value=""
          placeholder="Password"

          style={ { fontSize: 15, paddingLeft: 8, marginTop: 20, backgroundColor: "#223d56", width: width * 0.8, height: 45, alignSelf: "center", borderRadius: 5, borderWidth: 0.5, borderColor: "white" } }
          placeholderTextColor="white"
        />



        <Text onPress={ () => console.log( "press forgot password" ) } style={ { color: "grey", marginTop: 10, paddingRight: 40, alignSelf: "flex-end" } }>Forgot Password?</Text>

        <Pressable
          style={ { justifyContent: "center", backgroundColor: "#2196f4", height: 38, width: width * 0.4, borderRadius: 3, overflow: "hidden", marginTop: 20, alignSelf: "center", alignItems: "center" } }
          onPress={ () => console.log( "press login" ) }
        >
          <Text style={ { color: "white", fontWeight: "bold", fontSize: 14 } }>LOGIN</Text>
        </Pressable>
        <Text style={ { color: "grey", marginTop: 15, alignSelf: "center" } }>or</Text>

        <Pressable
          style={ {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#2196f4",
            height: 38,
            width: width * 0.45,
            borderRadius: 3,
            overflow: "hidden",
            marginTop: 20,
            alignSelf: "center",
          } }
          onPress={ () => console.log( "press login" ) }
        >
          <Image
            source={ require( '../assets/images/icongmail.png' ) }
            style={ { width: 40, height: 30, marginRight: 8 } }
            resizeMode="stretch"
          />
          <Text style={ { color: "white", fontWeight: "bold", fontSize: 14 } }>LOGIN WITH GMAIL</Text>
        </Pressable>

        <Text onPress={ () => console.log( "press dont have account" ) } style={ { color: "white", marginTop: 10, alignSelf: "center" } }>Don't have account?</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create( {
  containerMain: {
    flex: 1,
    // backgroundColor: "#111b24"
  },
  textStyle: {
    color: "#fbffff",
    fontSize: 38,
    marginTop: 20,
    alignSelf: "center"
  },

} );
