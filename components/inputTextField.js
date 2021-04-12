import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

//Global Styling
import { globalStyles } from "../assets/globalstyles";

export default class InputTextField extends React.Component {
    render(){
        return(
            <View style={this.props.style}> 
                <Text style={globalStyles.inputTitle}>{this.props.title}</Text>
                <TextInput placeholder={this.props.placeholderText} secureTextEntry={this.props.isSecure} style={globalStyles.input}></TextInput>
                <View style={{ borderBottomWidth:1, borderBottomColor:"#D8D8D8" }}></View>
            </View>
        )
    }
}