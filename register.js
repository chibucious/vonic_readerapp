import React, {useState} from "react";
import { View,Text,StyleSheet,Image,TouchableOpacity,ScrollView, TextInput,Alert, ActivityIndicator, Modal } from "react-native";

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
  const [myNameValue, setmyNameValue] = useState('');
  const [myEmailValue, setmyEmailValue] = useState('');
  const [myPasswordValue, setmyPasswordValue] = useState('');

  //Register function
  const Register=()=>{
      // Alert.alert('Vonic', myNameValue+" "+myEmailValue+" "+myPasswordValue);
      if(myNameValue.trim()==""){
        Alert.alert("","Name should not be left empty!");
      }else if(myEmailValue.trim()==""){
        Alert.alert("","Email should not be left empty!");
      }else if(myPasswordValue.trim()==""){
        Alert.alert("","Password should not be left empty!");
      }else{
         
        fetch('https://autominer-com.stackstaging.com/mobile_api/native_registration.php', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: myNameValue,
            email: myEmailValue,
            password: myPasswordValue
        
          })
        
        }).then((response) => response.json())
              .then((responseJson) => {
        
        // Showing response message coming from server after inserting records.
        Alert.alert("",responseJson);

      }).catch((error) => {
        console.error(error);
      });

      }
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

        
        <Text style={[globalStyles.text, {color:"#abb4bd", fontSize:15, textAlign:"center", marginVertical:10}]}>
          or
        </Text>

        {/* Text Field Email and password */}
        <Text style={globalStyles.inputTitle}>Name</Text>  
        <TextInput style={globalStyles.input1} onChangeText={setmyNameValue} />

        <Text style={[ globalStyles.inputTitle, {marginTop:6} ]}>Email</Text>  
        <TextInput style={globalStyles.input1} onChangeText={setmyEmailValue} />

        <Text style={[ globalStyles.inputTitle, {marginTop:6} ]}>Password</Text>  
        <TextInput style={globalStyles.input1} onChangeText={setmyPasswordValue} secureTextEntry={true} />
        {/* Text Field Email and password */}


        <TouchableOpacity style={globalStyles.submitContainer}>
          <Text style={[ globalStyles.text, {color:"#fff", fontWeight:"600",fontSize:16, } ]} onPress={Register}>Register</Text>
        </TouchableOpacity>
        
        
        <ActivityIndicator size="large" color="#ff0000" style={{position:"absolute", top:0, left:0, right:0, bottom:0, display:'none'}} />
        
        

        <Text style={[ globalStyles.text, {fontSize:14, color:"#ABB4BD", textAlign:"center", marginTop:24} ]}>
          Already have an account? <Text style={[ globalStyles.text, globalStyles.link ]} onPress={GoToLogin} >Login Now</Text>
        </Text>

      </View>
    </ScrollView>
  )
}
