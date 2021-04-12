import React, {useState} from "react";
import { View,Text,StyleSheet,Image,TouchableOpacity,ScrollView,TextInput,Alert } from "react-native";

//Global Styling
import { globalStyles } from "./assets/globalstyles";

//Icons
import { FontAwesome } from '@expo/vector-icons';

//Images
var logo1 = require("./assets/voniclogo3.png");

//Components
import InputTextField from "./components/inputTextField";

//Navigating to a new screen
import { NavigationContainer, createStackNavigator } from 'react-navigation';



export default function Login({ navigation }){

    //function
    const GoToRegister=()=>{
        navigation.navigate('RegisterScreen');
        //navigation.push('RegisterScreen');
    }
    const GoToForgotPass=()=>{
        navigation.navigate('ForgotPasswordScreen');
        //navigation.push('RegisterScreen');
    }


    //Creating variables for the input values
    const [myEmailValue, setmyEmailValue] = useState('');
    const [myPasswordValue, setmyPasswordValue] = useState('');

    //Register function
    const Login=()=>{
        Alert.alert('Vonic', myEmailValue+" "+myPasswordValue);
    }


 
  return(
    <ScrollView style={globalStyles.container}>
      <View>
        <View style={globalStyles.logocontainer}>
            <Image source={logo1}></Image>
            <Text style={[ globalStyles.text, {fontWeight:'bold'} ]}>Reader's App</Text>
        </View>

        <View style={globalStyles.socials}>
          <TouchableOpacity>
            <View style={globalStyles.socialButton}>
              <FontAwesome name="facebook-square" size={16} color="blue" style={globalStyles.socialLogo} />
              <Text style={globalStyles.text}>Facebook</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={globalStyles.socialButton}>
            <FontAwesome name="google" size={16} color="brown" style={globalStyles.socialLogo} />
              <Text style={globalStyles.text}>Google</Text>
            </View>
          </TouchableOpacity>
        </View>

        
        <Text style={[globalStyles.text, {color:"#abb4bd", fontSize:15, textAlign:"center", marginVertical:20}]}>
          or
        </Text>

        {/* Text Field Email and password */}
        <Text style={globalStyles.inputTitle}>Email</Text>  
        <TextInput style={globalStyles.input1} onChangeText={setmyEmailValue} />

        <Text style={[ globalStyles.inputTitle, {marginTop:6} ]}>Password</Text>  
        <TextInput style={globalStyles.input1} onChangeText={setmyPasswordValue} secureTextEntry={true} />
        {/* Text Field Email and password */}

        <Text style={[globalStyles.text, globalStyles.link, {textAlign:"right"} ]} onPress={GoToForgotPass} >Forgot Password?</Text>

        <TouchableOpacity style={globalStyles.submitContainer}>
          <Text style={[ globalStyles.text, {color:"#fff", fontWeight:"600",fontSize:16, } ]} onPress={Login}>Login</Text>
        </TouchableOpacity>

        <Text style={[ globalStyles.text, {fontSize:14, color:"#ABB4BD", textAlign:"center", marginTop:24} ]}>
          Don't have an account? <Text style={[ globalStyles.text, globalStyles.link ]} onPress={GoToRegister} >Register Now</Text>
        </Text>

      </View>
    </ScrollView>
  )
}
