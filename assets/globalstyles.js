import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    //It was later I added this container style after fininshing my login page
    container:{
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 30,

    },

    logocontainer:{
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },

    text:{
        // fontFamily: "Avenir Next",
        color: "#1D2029",
    },

    socials:{
        marginTop: 30,
        flexDirection: "row",
        justifyContent: 'center',
    },

    socialButton:{
        flexDirection: "row",
        marginHorizontal: 12,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "rgba(171, 180, 189, 0.65)",
        borderRadius: 4,
        backgroundColor: "#fff",
        shadowColor: "rgba(171, 180, 189, 0.35)", 
        shadowOffset: { width:0, height:10 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5,
    },

    socialLogo:{
        width: 16,
        height: 16,
        marginRight: 8,
    },

    link:{
        color:"#ff1654",
        fontSize: 14,
        fontWeight: "500",
    },

    submitContainer:{
        backgroundColor:"#ff1654",
        fontSize: 16,
        borderRadius: 4,
        paddingVertical: 12,
        marginTop: 32,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "rgba(255, 25, 84, 0.24)",
        shadowOffset: {width:0, height:9},
        shadowOpacity: 1,
        shadowRadius: 20,
    },

    // inputTextField.js
    inputTitle: {
        color: "#ABB4BD",
        fontSize: 14,
    },

    input1: {
        paddingVertical: 2,
        color: "#1D2029",
        fontSize: 14,
        borderBottomWidth: .7,
        borderBottomColor: "#ABB4BD",
        marginBottom:5,
        
        // fontFamily: "Avenir Next",
    }

})