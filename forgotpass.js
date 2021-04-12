import React, {useState} from "react";
import { View,Text,StyleSheet,Image,TouchableOpacity,ScrollView, TextInput,Alert } from "react-native";

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



export default function App({ navigation }){
  
  //function
  const GoToLogin=()=>{
    navigation.navigate('LoginScreen');
    //navigation.goBack();
  }

  //Creating variables for the input values
  const [myEmailValue, setmyEmailValue] = useState('');

  //Register function
  const Register=()=>{
      Alert.alert('Vonic', myEmailValue);
  }


  return(
    <ScrollView style={globalStyles.container}>
      <View>
        <View style={globalStyles.logocontainer}>
            <Image source={logo1}></Image>
            <Text style={[ globalStyles.text, {fontWeight:'bold'} ]}>Reader's App</Text> 
        </View>


        
        <Text style={[globalStyles.text, {color:"#abb4bd", fontSize:15, textAlign:"center", marginVertical:20}]}>
          Enter your email and we would send you a link to recover your password
        </Text>

        {/* Text Field Email and password */}
        <Text style={[ globalStyles.inputTitle, {marginTop:6} ]}>Email</Text>  
        <TextInput style={globalStyles.input1} onChangeText={setmyEmailValue} />
        {/* Text Field Email and password */}


        <TouchableOpacity style={globalStyles.submitContainer}>
          <Text style={[ globalStyles.text, {color:"#fff", fontWeight:"600",fontSize:16, } ]} onPress={Register}>Send me a link</Text>
        </TouchableOpacity>

        <Text style={[ globalStyles.text, {fontSize:14, color:"#ABB4BD", textAlign:"center", marginTop:24} ]}>
          Go Back to <Text style={[ globalStyles.text, globalStyles.link ]} onPress={GoToLogin} >Login</Text>
        </Text>

      </View>
    </ScrollView>
  )
}
