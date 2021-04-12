import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

//import the screens
import Login from "../login";
import Register from "../register";
import ForgotPassword from "../forgotpass";

//Here we can now Create our StackNavigator function and pass an object into the function
//the object is used to configure different screens we want to register for the StackNavigator
//we named the screen Login, when we navigate the Login, it should show the Login Component on the screen
//In summary create a StackNavigator function/object and store inside LoginStack
//The LoginStack won't do anything except we wrap it in our AppContainer
//AppContainer would return a component we can render to App.js so by default, it shows login screen which is on top of the stack
const LoginStack = createStackNavigator({
    LoginScreen: {
        screen: Login,
        navigationOptions:{
            title:'login',
            header: null //this will hide the header or headerShown:false
        }
    },
    RegisterScreen: {
        screen: Register,
        navigationOptions:{
            header: null
        }
    },
    ForgotPasswordScreen: {
        screen: ForgotPassword,
        navigationOptions:{
            header: null
        }
    }
})

export default createAppContainer(LoginStack);